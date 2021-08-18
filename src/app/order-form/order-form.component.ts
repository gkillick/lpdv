import {Component, Inject, Input, OnChanges, OnInit, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {ItemsService} from '../services/items.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemOrder} from '../models/item_order.interface';
import {Item} from '../models/item.interface';
import {CustomerFormData, ItemFormInfo, SubmitFormData} from '../models/form.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit, OnChanges {

  orderId: string;
  edit: boolean;
  order: Order;
  @Input() orderData: ItemFormInfo[];
  @Input() myForm: FormGroup;
  organizedItems = {viennoiserie: [], pains: [], noel: []};
  searchText = '';
  @Output() itemOrderEmitter: EventEmitter<SubmitFormData> = new EventEmitter<SubmitFormData>();

  constructor(private dialogRef: MatDialogRef<OrderFormComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private orderService: OrderService,
              private fb: FormBuilder,
              private itemsService: ItemsService,
  ) {
    if (data) {
      this.orderId = data.orderId;
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  ngOnInit(): void {
    this.itemsService.getFormattedItems().pipe(tap((items: ItemFormInfo[]) => {
      items.forEach(item => {
        this.organizedItems[item.item_type].push(item);
      });
  })).subscribe(items => {
      for (const key of Object.keys(this.organizedItems)) {
        this.organizedItems[key].sort((a, b) => {
          return ('' + a.name).localeCompare(b.name);
        });
      }
    });
  }

  formIsReady(): any {
    if (this.myForm){
      const controls = this.myForm.controls;
      return controls.first_name && controls.last_name && controls.telephone && controls.date;
    }else{
      return false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formData) {
      this.myForm = this.fb.group(changes.formData.currentValue);
    }
  }

  delete(): void {
    this.orderService.deleteOrder(this.orderId);
  }

  submitHandler(): void {
    this.itemsService.items.pipe(map((items: Item[]) => {
      return items.reduce((list: ItemOrder[], item: Item) => {
        const elements = this.orderData.filter(orderElement => {    // Get sliced and unsliced elements with the item_id
          return orderElement.id === item.id;
        });
        const {slicedAmount, totalAmount, different} = this.getAmounts(elements, this.myForm);
        if (different) { // if item has a positive number selected create an item order
          list.push({
            id: null,
            uid: null,
            order_id: null,
            item_id: item.id,
            amountSliced: slicedAmount,
            amountTotal: totalAmount,
            date: null,
          });
        }
        return list;
      }, []);
    })).subscribe((itemOrders: ItemOrder[]) => {
      const personalData = this.getPersonalData(this.myForm);
      this.itemOrderEmitter.emit({itemOrders, personalData});
    });
  }

  getPersonalData(form: FormGroup): CustomerFormData {
    const {first_name, last_name, telephone, date} = form.value;
    return {first_name, last_name, telephone, date};
  }

  getAmounts(orderElements: ItemFormInfo[], form: FormGroup): any {
    if (orderElements.length > 1) {    // sliced and unsliced
      const slicedElement = orderElements.find(el => el.sliced);
      const unslicedElement = orderElements.find(el => !el.sliced);
      const slicedAmount = +form.value[slicedElement.name];
      const totalAmount = +form.value[unslicedElement.name] + slicedAmount;
      const different = slicedElement.number !== slicedAmount || unslicedElement.number !== totalAmount;
      return {slicedAmount, totalAmount, different };
    }else{
      const totalAmount = +form.value[orderElements[0].name];
      const different = orderElements[0].number !== totalAmount;
      return {slicedAmount: 0, totalAmount, different};
    }
  }
}
