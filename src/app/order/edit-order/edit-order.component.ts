import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {Order} from '../../models/order.interface';
import {ItemOrdersService} from '../../services/item-orders.service';
import {ItemOrder} from '../../models/item_order.interface';
import {combineLatest} from 'rxjs';
import {SubmitFormData} from '../../models/form.interface';

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
      this.myForm = this.fb.group({
        first_name: [this.order.first_name, Validators.required],
        last_name: [this.order.last_name, Validators.required],
        telephone: [this.order.telephone, Validators.required],
        date: [this.order.date.toDate(), Validators.required],
        timeOfDay: [this.order.timeOfDay, Validators.required],
        payed: [this.order.payed, Validators.required],
        notes: [this.order.notes, Validators.required],
        ...obj
      });
    });
  }
  submitForm(orderForm: SubmitFormData): any {
    const itemOrders = orderForm.itemOrders;
    const orderFound = this.orderService.ordersList.find((order: Order) => order.id === this.orderId);
    const {last_name, first_name, telephone, date, sub_total, tax, total, timeOfDay, payed, notes} = orderForm.orderMetadata;
    const editedOrder = {...orderFound, last_name, first_name, telephone, date, sub_total, tax, total, timeOfDay, payed, notes};
    this.itemOrderService.deleteItemOrdersForOrder(orderFound.id);
    this.orderService.deleteOrder(orderFound.id).then(() => {
      this.orderService.addOrder(editedOrder).then((id) => {
        const orders = itemOrders.map(itemOrder => {
          return {...itemOrder, order_id: id};
        });
        this.itemOrderService.addItemOrders(orders);
      });
    });
  }
}
