import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Item } from 'electron/main';
import { ItemOrder } from '../models/item_order.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { NewOrderComponent } from '../new-order/new-order.component';
import { DataService } from '../services/data.service';
import { ItemOrdersService } from '../services/item-orders.service';
import { ItemsService } from '../services/items.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: '../new-order/new-order.component.html',
  styleUrls: ['../new-order/new-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  //form object
  myForm: FormGroup;
  order: Order
  viewClass = "Edit Order"
  edit = true
  loading = false;
  success = false;
  total = 0;
  sub_total = 0;
  tax = 0;
  searchText = '';

  items = {
    "viennoiserie": [],
    "pains": [],
    "noel": []
  }
  

  constructor(private orderService: OrderService,private itemsService: ItemsService,private itemOrdersService: ItemOrdersService, private fb: FormBuilder, private dialogRef: MatDialogRef<EditOrderComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.order = this.orderService.getOrderById(data.id)
    console.log("constructor running")
   }


  ngOnInit(): void {

    for(let item of this.itemsService.items){
      for(let item_type in this.items){
        if(item.item_type == item_type){
          this.items[item_type].push(item)
        }
        this.items[item_type].sort((a,b) => {
          return ('' + a.name).localeCompare(b.name);
        })
      }
    }

    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1);
    tomorrow.setHours(0,0,0,0);

    this.myForm = this.fb.group({
      first_name: [this.order.first_name, Validators.required],
      last_name: [this.order.last_name, Validators.required],
      //client_number: ['', Validators.required],
      telephone: [this.order.telephone, Validators.required],
      date: [new Date(this.order.date), Validators.required],
    });
    for (var key in this.items) {
      this.items[key].forEach(element => {
        var found = false
        for(let itemOrder of this.order.itemOrders){
          if(itemOrder.item_id == element.id){
            found = true
            this.myForm.addControl(element.name, new FormControl(itemOrder.amount, ))
          }
        }
        if(!found){
            this.myForm.addControl(element.name, new FormControl('', ))
        }

      });
  }
  this.updateTotals();
  this.onChanges();


  }


  submitHandler() {

    this.loading = true;

    const formValue = this.myForm.value;
    formValue.sub_total = this.sub_total
    formValue.tax = this.tax
    formValue.total = this.total
    formValue.date.setHours(0,0,0,0);
    let order = Order.newOrder(formValue)
    order.id = this.order.id
    order.user_id = this.order.user_id
    this.orderService.editOrder(order).subscribe(res => {
      order = res
      console.log(res)
    var itemOrders = [];
    for(let key in this.items){
      console.log(key)
      for(let item of this.items[key]){
        if(formValue[item.name]){
          itemOrders.push(new ItemOrder(null, order.user_id,item.name,item.combined_name ,order.id, item.id, formValue[item.name], false,res.date)) 
        }

      }
    }

    order.itemOrders = itemOrders
    this.orderService.orders = this.orderService.orders.filter(or => {
      return !(order.id === or.id)
    })
    this.orderService.orders.push(order)
    console.log(order)
    this.orderService.orderChangedSubject.next(this.orderService.orders)
    this.itemOrdersService.addItemOrders(itemOrders).subscribe(orders => {
      console.log(itemOrders)
    }, error => {
      console.log(error)
    })
    }, error => {
      //console.log(error)
    })


    try {
      //use this object to create order
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    

    
  }

  increment(elmRef: HTMLInputElement){
   
    console.log(elmRef.value)
    elmRef.value = (Number(elmRef.value) + 1).toString()
  }

  decrement(elmRef: HTMLInputElement){
   
    console.log(elmRef.value)
    elmRef.value = (Number(elmRef.value) - 1).toString()
  }


  delete(){
    this.orderService.deleteOrder(this.order).subscribe()

    this.dialogRef.close()
  
  }


  tax_classifications: any[] = [
    {value: 'normal', viewValue: 'normal'},
    {value: 'no_tax_6', viewValue: 'tax before 6'},
    {value: 'no_tax', viewValue: 'no tax'},
  ]


  //functions for calculating order totals with relevant taxes

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.updateTotals()
      });

  }

  

//function to update total prices 
updateTotals(){
  var before_tax = 0;
  var tax = 0;
  var tax_items = {
    "no_tax": {"count": 0, "total": 0},
    "normal": {"count": 0, "total": 0},
    "no_tax_6": {"count": 0, "total": 0},
  }
  let formValue = this.myForm.value;
  for(let key in this.items){
    for(let item of this.items[key]){
      if(formValue[item.name] > 0 && item.tax_catagory != null){
        tax_items[item.tax_catagory]["count"] += formValue[item.name];
        tax_items[item.tax_catagory]["total"] += (formValue[item.name] * item.price)
      }
    }
  }
  before_tax += tax_items.no_tax_6.total + tax_items.no_tax.total + tax_items.normal.total

  //calculate individual taxes 
  if(tax_items.no_tax_6.count < 6){
    tax += tax_items.no_tax_6.total * .14975
  }
  console.log(tax)
  tax += tax_items.normal.total * .14975
  this.tax = tax;
  this.sub_total = before_tax;
  this.total = this.tax + this.sub_total;


}

  

}

