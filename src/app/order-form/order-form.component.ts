import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {ItemsService} from '../services/items.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../services/order.service';
import {Order} from '../models/order.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemOrder} from '../models/item_order.interface';
import {Item} from '../models/item.interface';
import {CustomerFormData, ItemFormInfo, SubmitFormData} from '../models/form.interface';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit, OnChanges, OnDestroy {

  orderId: string;
  viewClass: string;
  edit: boolean;
  order: Order;
  @Input() orderData: ItemFormInfo[];
  @Input() myForm: FormGroup;
  organizedItems = {viennoiserie: [], pains: [], noel: []};
  searchText = '';
  @Output() itemOrderEmitter: EventEmitter<SubmitFormData> = new EventEmitter<SubmitFormData>();
  total = 0;
  subTotal = 0;
  tax = 0;
  formSubscription: Subscription;

  constructor(private dialogRef: MatDialogRef<OrderFormComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private orderService: OrderService,
              private fb: FormBuilder,
              private itemsService: ItemsService,
  ) {
    if (data) {
      this.orderId = data.orderId;
      this.edit = true;
      this.viewClass = 'Edit';
    } else {
      this.edit = false;
      this.viewClass = 'New Order';
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
      this.calculatePrices(this.myForm);      // calculate prices on init for when editing order
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

    if (!this.formSubscription && this.myForm) {
      this.formSubscription = this.myForm.valueChanges.subscribe(form => {
        this.calculatePrices(this.myForm);
      });
    }
  }

  ngOnDestroy(): void{
    this.formSubscription.unsubscribe();
  }

  calculatePrices(form): void{
    let beforeTax = 0;
    let tax = 0;
    const taxItems = {
      "no_tax": {"count": 0, "total": 0},
      "normal": {"count": 0, "total": 0},
      "no_tax_6": {"count": 0, "total": 0}
    };
    const formValue = form.value;
    for (const key in this.organizedItems) {
      for (const item of this.organizedItems[key]) {
        if (formValue[item.name] > 0 && item.tax_category != null) {
          taxItems[item.tax_category]["count"] += formValue[item.name];
          taxItems[item.tax_category]["total"] += (formValue[item.name] * item.price);
        }
      }
    }

    beforeTax += taxItems.no_tax_6.total + taxItems.no_tax.total + taxItems.normal.total;

    // calculate individual taxes
    if (taxItems.no_tax_6.count < 6) {
      tax += taxItems.no_tax_6.total * .14975;
    }
    tax += taxItems.normal.total * .14975;
    this.tax = tax;
    this.subTotal = beforeTax;
    this.total = this.tax + this.subTotal;
  }

  delete(): void {
    this.orderService.deleteOrder(this.orderId).then(resp => {
      this.dialogRef.close();
    });
  }

  submitHandler(): void {
    this.itemsService.items.pipe(map((items: Item[]) => {
      return items.reduce((list: ItemOrder[], item: Item) => {
        const elements = this.orderData.filter(orderElement => {    // Get sliced and unsliced elements with the item_id
          return orderElement.id === item.id;
        });
        const {slicedAmount, totalAmount} = this.getAmounts(elements, this.myForm);
        if (totalAmount > 0) { // if item has a positive number selected create an item order
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
      const orderMetadata = this.getPersonalData(this.myForm);
      const itemOrdersWithDate: ItemOrder[] = itemOrders.map(itemOrder => {
        itemOrder.date = orderMetadata.date;
        return itemOrder;
      });
      this.itemOrderEmitter.emit({itemOrders: itemOrdersWithDate , orderMetadata});
      this.dialogRef.close();
    });
  }

  getPersonalData(form: FormGroup): CustomerFormData {
    const {first_name, last_name, telephone, date} = form.value;
    console.log(form.value);
    return {first_name, last_name, telephone, date, sub_total: this.subTotal, tax: this.tax, total: this.total};
  }

  getAmounts(orderElements: ItemFormInfo[], form: FormGroup): any {
    if (orderElements.length > 1) {    // sliced and unsliced
      const slicedElement = orderElements.find(el => el.sliced);
      const unslicedElement = orderElements.find(el => !el.sliced);
      const slicedAmount = +form.value[slicedElement.name];
      const totalAmount = +form.value[unslicedElement.name] + slicedAmount;
      return {slicedAmount, totalAmount};
    }else{
      const totalAmount = +form.value[orderElements[0].name];
      return {slicedAmount: 0, totalAmount};
    }
  }
}
