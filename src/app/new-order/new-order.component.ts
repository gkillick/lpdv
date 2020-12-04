import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { getMaxListeners } from 'process';
import { Item } from '../models/item.model';
import { ItemOrder } from '../models/item_order.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';
import { ItemOrdersService } from '../services/item-orders.service';
import { ItemsService } from '../services/items.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  //form object
  myForm: FormGroup;
  viewClass = "New Order"
  edit = false
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
  itemtypes = ["viennoiserie", "pains", "noel"]

  

  constructor(private itemsService: ItemsService, private itemOrdersService: ItemOrdersService, private orderService: OrderService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewOrderComponent>) { }


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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      //client_number: ['', Validators.required],
      telephone: ['', Validators.required],
      date: [tomorrow, Validators.required],
    });
    console.log(this.items)
    for (var key in this.items) {

      this.items[key].forEach(element => {
        console.log(element.item_type)
        this.myForm.addControl(element.name, new FormControl('', ))
      });
  }
  this.onChanges();


  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    formValue.sub_total = this.sub_total
    formValue.tax = this.tax
    formValue.total = this.total
    formValue.date.setHours(0,0,0,0);
    let order = Order.newOrder(formValue)
    this.orderService.addOrder(order).subscribe(res => {
      order = res
    var itemOrders = [];
    for(let key in this.items){
      console.log(key)
      for(let item of this.items[key]){
        console.log(item.id)
        console.log(formValue[item.name])
        if(formValue[item.name]){
          itemOrders.push(new ItemOrder(null, item.name, item.combined_name,order.id, item.id, formValue[item.name], false,res.date)) 
        }

      }
    }

    order.itemOrders = itemOrders
    this.orderService.orders.push(order)
    this.orderService.orderChangedSubject.next(this.orderService.orders)
    this.itemOrdersService.addItemOrders(itemOrders).subscribe(orders => {
      console.log('item orders')
      console.log(orders)
    }, error => {
      console.log(error)
    })
    }, error => {
      //console.log(error)
    })


    console.log("Order:")
    console.log(order)


    try {
      //use this object to create order
      this.success = true;
      this.dialogRef.close()
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
    
  }
  increment(e){
    var field = (e.target.parentElement.parentElement.childNodes[1])
    console.log(field)
    if(field.value.length == 0){
      field.value = 1;
    }else{
    field.value = (parseInt(field.value) + 1)
    }
    
  }

  decrement(e){
    var field = e.target.parentElement.parentElement.childNodes[1]
    if(field.value == 1){
      field.value = '';
    }else if (field.value.length != 0){
    field.value = (parseInt(field.value) - 1)
    }
    
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
      });


  }


  

}
