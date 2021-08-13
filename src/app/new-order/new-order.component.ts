import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { getMaxListeners } from 'process';
import { map, tap } from 'rxjs/operators';
import { ItemOrder } from '../models/item_order.interface';
import { Order} from '../models/order.interface';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';
import { ItemOrdersService } from '../services/item-orders.service';
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
  viewClass = "New Order"
  edit = false
  loading = false;
  success = false;
  total = 0;
  sub_total = 0;
  tax = 0;
  searchText = '';
  @ViewChild('input' ) elemRef: ElementRef;


  organizedItems = {
    "viennoiserie": [],
    "pains": [],
    "noel": []
  }

  constructor(private itemsService: ItemsService, private itemOrdersService: ItemOrdersService, private orderService: OrderService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewOrderComponent>) {}


  ngOnInit(): void {


    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1);
    tomorrow.setHours(0,0,0,0);

    this.myForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      telephone: ['', Validators.required],
      date: [tomorrow, Validators.required],
    });


    this.itemsService.items.pipe(tap( items => {
      items.map(item => this.organizedItems[item.item_type].push(item))
    })).subscribe(items => {

      items.map(item => this.myForm.addControl(item.name , new FormControl('' )))


      for(const key of Object.keys(this.organizedItems)){
            this.organizedItems[key].sort((a,b) => {
              return ('' + a.name).localeCompare(b.name);
          })
        }
      })
  }

  async submitHandler() {

    const order: Order = this.myForm.value;
    order.sub_total = this.sub_total
    order.tax = this.tax
    order.total = this.total
    order.date.setHours(0,0,0,0);
    this.orderService.addOrder(order).then(orderId => { 
      this.submitItemOrders(this.myForm.value, this.organizedItems, orderId, order.date)
      this.dialogRef.close()
    }).catch(err => {
      console.log(err)
    })
  }

  submitItemOrders(form, seperatedItems, order_id: string, date: Date){
    var itemOrders: ItemOrder[] = []
    for(let key of Object.keys(seperatedItems)){
      for(let item of seperatedItems[key]){
        var number: number = form[item.name]
        if(number > 0){
          itemOrders.push({id: null, uid: null, item_id: item.id, number, order_id, date: date})
        }
      }
    }

    console.log(itemOrders)

    this.itemOrdersService.addItemOrders(itemOrders)
  }

  increment(elmRef: HTMLInputElement){
   
    console.log(elmRef.value)
    elmRef.value = (Number(elmRef.value) + 1).toString()
  }

  decrement(elmRef: HTMLInputElement){
   
    console.log(elmRef.value)
    elmRef.value = (Number(elmRef.value) - 1).toString()
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
      for(let key in this.organizedItems){
        for(let item of this.organizedItems[key]){
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
      tax += tax_items.normal.total * .14975
      this.tax = tax;
      this.sub_total = before_tax;
      this.total = this.tax + this.sub_total;
      });


  }


  

}
