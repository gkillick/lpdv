import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Item } from 'electron/main';
import { getMaxListeners } from 'process';
import { ItemOrder } from '../models/item_order.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';
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

  loading = false;
  success = false;
  total_price = 0;
  total_before_tax = 0;
  total_tax = 0;

  items = {
    "viennoiserie": [],
    "pains": []
  }
  current_user = new User(1, "Montreal lpdv", "gkillick@gmail.com")
  

  constructor(private dataService: DataService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewOrderComponent>) { }


  ngOnInit(): void {
    console.log('init')

    for(let item of this.dataService.items){
      console.log(item.item_type)
      if(item.item_type === "viennoiserie"){
        this.items["viennoiserie"].push(item)
      }else if(item.item_type === "pains"){
        this.items["pains"].push(item)
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
    var itemOrders = [];
    const order = new Order(this.dataService.idTraker.toString(),this.current_user.id, formValue.first_name, formValue.last_name, formValue.telephone, formValue.date, [], this.total_before_tax, this.total_tax, this.total_price)
    this.dataService.idTraker +=1
    for(let key in this.items){
      console.log(key)
      for(let item of this.items[key]){
        console.log(formValue[item.name])
        order.itemOrders.push(new ItemOrder(null,null, item, formValue[item.name], false)) 
      }
    }

    this.dataService.addOrder(order)
    

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
      this.total_tax = tax;
      this.total_before_tax = before_tax;
      this.total_price = this.total_tax + this.total_before_tax;
      });

  }
// Create our number formatter.
formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

  

}
