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


  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    var itemOrders = [];
    const order = new Order(null,this.current_user.id, formValue.first_name, formValue.last_name, formValue.telephone, formValue.date, [])
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

}
