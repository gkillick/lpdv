import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Item } from 'electron/main';
import { ItemOrder, Order } from '../models/item.model';
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

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      client_number: ['', Validators.required],
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

    const order = new Order(formValue.name, [])

    for(let key in this.items){
      console.log(key)
      for(let item of this.items[key]){
        console.log(formValue[item.name])
        order.itemOrders.push(new ItemOrder(item, formValue[item.name])) 
      }
    }
    console.log(order)

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

}
