import {ItemOrder} from "../../models/item_order.interface";
import {SubmitFormData} from "../../models/form.interface";
import {Order} from "../../models/order.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../../services/items.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject, OnInit} from "@angular/core";
import {ItemOrdersService} from "../../services/item-orders.service";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'app-edit-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit{
  orderData: any;
  order: any;
  myForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<NewOrderComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              public itemsService: ItemsService,
              private fb: FormBuilder,
              private itemOrderService: ItemOrdersService,
              private orderService: OrderService
  ) {
  }

  ngOnInit(): any {
    this.itemsService.getFormattedItems().subscribe(items => {
      this.orderData = items;
      const mapped = items.map(item => ({[item.name]: [item.number]}));
      const obj = Object.assign({}, ...mapped);
      this.myForm = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        telephone: ['', Validators.required],
        date: ['', Validators.required],
        ...obj
      });
    });
  }
  submitForm(orderForm: SubmitFormData): any {
    const itemOrders = orderForm.itemOrders;
    console.log(orderForm.orderMetadata);
    const {last_name, first_name, telephone, date, sub_total, tax, total} = orderForm.orderMetadata;
    const order = {last_name, first_name, telephone, date, id: null, uid: null, sub_total, tax, total };
    this.orderService.addOrder(order).then(id => {
      const orders = itemOrders.map(itemOrder => {
        return {...itemOrder, order_id: id};
      });
      this.itemOrderService.addItemOrders(orders);
    });
  }
}


