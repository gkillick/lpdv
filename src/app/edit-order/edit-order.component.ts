import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { map, tap} from 'rxjs/operators';
import {Item, ItemNames} from '../models/item.interface';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order.interface';
import {ItemOrdersService} from "../services/item-orders.service";
import {ItemOrder} from "../models/item_order.interface";
import {ItemsService} from "../services/items.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit{
  orderId: string;
  orderData: any;
  order: any;

  constructor(private dialogRef: MatDialogRef<EditOrderComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private orderService: OrderService,
              ) {
    this.orderId = data.orderId;
  }

  ngOnInit(): any {
    this.orderService.orders.subscribe(orders => {
      this.order = orders.find(order => order.id === this.orderId);
    });

    console.log(this.orderId);
    this.orderService.getOrderForm(this.orderId).subscribe(orderData => {
      console.log(orderData);
      this.orderData = orderData;
    });
  }
}
