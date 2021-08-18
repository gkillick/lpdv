import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order.interface';
import {ItemOrdersService} from '../services/item-orders.service';
import {ItemOrder} from '../models/item_order.interface';
import {combineLatest} from 'rxjs';
import {SubmitFormData} from '../models/form.interface';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit{
  orderId: string;
  orderData: any;
  order: any;
  myForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EditOrderComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private orderService: OrderService,
              private fb: FormBuilder,
              private itemOrderService: ItemOrdersService
              ) {
    this.orderId = data.orderId;
  }

  ngOnInit(): any {
    combineLatest(this.orderService.orders, this.orderService.getOrderForm(this.orderId)).subscribe(([orders, orderForm]) => {
      this.order = orders.find(order => order.id === this.orderId);
      this.orderData = orderForm;
      const mapped = orderForm.map(item => ({[item.name]: [item.number]}));
      const obj = Object.assign({}, ...mapped);
      console.log(obj);
      this.myForm = this.fb.group({
        first_name: [this.order.first_name, Validators.required],
        last_name: [this.order.last_name, Validators.required],
        telephone: [this.order.telephone, Validators.required],
        date: [this.order.date.toDate(), Validators.required],
        ...obj
      });
    });
  }
  submitForm(orderForm: SubmitFormData): any {
    const itemOrders = orderForm.itemOrders;
    const orderFound = this.orderService.ordersList.find((order: Order) => order.id === this.orderId);
    const {last_name, first_name, telephone, date} = orderForm.personalData;
    const editedOrder = {...orderFound, last_name, first_name, telephone, date};
    this.orderService.editOrder(editedOrder);
    itemOrders.forEach((itemOrd: ItemOrder) => {
      const order: ItemOrder = {...this.itemOrderService.itemOrdersList.find(item => item.item_id === itemOrd.item_id),
        amountSliced: itemOrd.amountSliced, amountTotal: itemOrd.amountTotal};
      this.itemOrderService.editItemOrder(order).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    });
  }
}
