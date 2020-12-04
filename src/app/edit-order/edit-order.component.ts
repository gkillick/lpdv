import { Component, Inject, OnInit } from '@angular/core';
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
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  //form object
  myForm: FormGroup;
  order: Order

  loading = false;
  success = false;
  total = 0;
  sub_total = 0;
  tax = 0;

  items = {
    "viennoiserie": [],
    "pains": [],
    "nöel": []
  }
  

  constructor(private orderService: OrderService,private itemsService: ItemsService,private itemOrdersService: ItemOrdersService, private fb: FormBuilder, private dialogRef: MatDialogRef<EditOrderComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.order = this.orderService.getOrderById(data.id)
    console.log("constructor running")
   }


  ngOnInit(): void {
    console.log('init')

    for(let item of this.itemsService.items){
      console.log(item.item_type)
      if(item.item_type === "viennoiserie"){
        this.items["viennoiserie"].push(item)
      }else if(item.item_type === "pains"){
        this.items["pains"].push(item)
      }else if(item.item_type === "nöel"){
        this.items["nöel"].push(item)
      }
    }

    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1);
    tomorrow.setHours(0,0,0,0);

    console.log(this.order.first_name)

    this.myForm = this.fb.group({
      first_name: [this.order.first_name, Validators.required],
      last_name: [this.order.last_name, Validators.required],
      //client_number: ['', Validators.required],
      telephone: [this.order.telephone, Validators.required],
      date: [this.order.date, Validators.required],
    });
    for (var key in this.items) {
      this.items[key].forEach(element => {
        console.log(element.item_type)
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
    this.orderService.editOrder(order).subscribe(res => {
      order = res
    var itemOrders = [];
    for(let key in this.items){
      console.log(key)
      for(let item of this.items[key]){
        console.log(item.id)
        console.log(formValue[item.name])
        if(formValue[item.name]){
          itemOrders.push(new ItemOrder(null, item.name, order.id, item.id, formValue[item.name], false,res.date)) 
        }

      }
    }
    this.itemOrdersService.addItemOrders(itemOrders).subscribe(orders => {
      console.log('item orders')
      console.log(orders)
    }, error => {
      console.log(error)
    })
    }, error => {
      //console.log(error)
    })
    

    try {
      //use this object to create order
      console.log(formValue)
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }

  delete(){
    //this.dataService.deleteOrderById(this.order.id)

    this.dialogRef.close()
  
  }

  formatDate(date: Date): string{
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
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
// Create our number formatter.
formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
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
      this.total= this.tax + this.sub_total;

}
  

}
