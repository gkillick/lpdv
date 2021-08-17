import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {ItemsService} from '../services/items.service';
import firebase from 'firebase';
import Item = firebase.analytics.Item;
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrderService} from "../services/order.service";
import {Order} from "../models/order.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  orderId: string;
  edit: boolean;
  order: Order;
  orderData: any;
  myForm: FormGroup;
  organizedItems = {viennoiserie: [], pains: [], noel: []};

  constructor(private dialogRef: MatDialogRef<OrderFormComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private orderService: OrderService,
              private fb: FormBuilder,
              private itemsService: ItemsService
  ) {
    if (data) {
      this.orderId = data.orderId;
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  ngOnInit(): any {
    if (this.edit){
      combineLatest(this.orderService.orders, this.orderService.getOrderForm(this.orderId)).subscribe(([orders, orderForm]) => {
        this.order = orders.find(order => order.id === this.orderId);
        const mapped = orderForm.map(item => ({[item.name]: [item.number]}));
        const obj = Object.assign({}, ...mapped);
        this.myForm = this.fb.group({
          first_name: [this.order.first_name, Validators.required],
          last_name: [this.order.last_name, Validators.required],
          telephone: [this.order.telephone, Validators.required],
          date: [this.order.date, Validators.required],
          ...obj
        });
      });
    }else {
      this.orderService.getOrderForm().subscribe(orderData => {
        this.orderData = orderData;
      });
    }

    this.itemsService.items.pipe(tap( items => {
      items.map(item => this.organizedItems[item.item_type].push(item));
    })).subscribe(items => {

      for (const key of Object.keys(this.organizedItems)) {
        this.organizedItems[key].sort((a, b) => {
          return ('' + a.name).localeCompare(b.name);
        });
      }
    });

  }

  delete(): void{
    console.log('delete');
  }
  submitHandler(): void{
    console.log('submit');
  }

}
