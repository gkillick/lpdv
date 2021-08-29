import { Injectable } from '@angular/core';
import {combineLatest, Observable, Subject, throwError} from 'rxjs';
import { DataService } from './data.service';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, map, take, tap} from 'rxjs/operators'
import { ItemOrdersService } from './item-orders.service';
import { User } from '../models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order} from '../models/order.interface';
import {ItemsService} from './items.service';
import {ItemOrder} from '../models/item_order.interface';
import {Item} from '../models/item.interface';
import {ItemFormInfo} from '../models/form.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  orders: Observable<Order[]> = new Observable<Order[]>(null);
  ordersCollection: AngularFirestoreCollection<Order>;
  ordersList: Order[];
  constructor(private http: HttpClient,
              private authService: AuthService,
              private afs: AngularFirestore,
              private itemOrderService: ItemOrdersService,
              private itemsService: ItemsService) {
    this.ordersCollection = this.afs.collection<Order>('order', ref => ref.where('uid', '==', authService.user.uid));
    this.orders = this.ordersCollection.valueChanges();
    this.orders.subscribe((orders: Order[]) => {
      this.ordersList = orders;
    });
  }

  addOrder(order: Order): Promise<any> {
    order.uid = this.authService.user.uid;
    order.id = this.afs.createId();
    return this.ordersCollection.doc(order.id).set(order).then(resp => {
        return order.id;
      });
  }
  getOrderForm(orderId?: string): Observable<any>{
    if (orderId){
      return this.getPopulatedItemsForm(orderId);
    }else{
      return this.itemsService.getFormattedItems(); // If no order exists we only need a form with all zeros
    }
  }
  editOrder(order: Order): Promise<any> {
    return this.ordersCollection.doc(order.id).set(order);
  }

  deleteOrder(orderId: string): Promise<any> {
    this.itemOrderService.deleteItemOrdersForOrder(orderId);
    return this.ordersCollection.doc(orderId).delete();
  }


  getOrdersWithFilter(func: (date1: Date, date2: Date, date3: Date) => boolean, startDate, endDate): Observable<any> {
    return this.orders.pipe(take(1), map((orders: Order[]) => {
      return orders.filter(order => {
        const selectedDate1 = new Date(startDate);
        const selectedDate2 = new Date(endDate);
        const orderDate = order.date.toDate();
        selectedDate1.setHours(0,0,0,0);
        selectedDate2.setHours(0,0,0,0);
        orderDate.setHours(0,0,0,0);
        return func(orderDate, selectedDate1, selectedDate2);
      });
    }));
  }

  getPopulatedItemsForm(orderId: string): Observable<ItemFormInfo[]>{
    return combineLatest(this.itemsService.items, this.itemOrderService.itemOrders).pipe(map(([items, itemOrders]) => {
      const relevantOrders = itemOrders.filter((itemOrder: ItemOrder) => itemOrder.order_id === orderId );
      return items.map((item: Item) => {
       const itemOrder = relevantOrders.find(itemOrd => itemOrd.item_id === item.id);
       if (itemOrder){
         return {name: item.name, id: item.id, number: itemOrder.amountTotal - itemOrder.amountSliced,
           sliced: false, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
       }else{
         return {name: item.name, id: item.id, number: 0, sliced: false, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
       }
      }).concat(items.filter((item: Item) => {
        return item.sliced_option;
     }).map((item: Item) => {
       const itemOrder = relevantOrders.find(itemOrd => itemOrd.item_id === item.id);
       if (itemOrder){
         return {name: item.name + ' Tr.', id: item.id, number: itemOrder.amountSliced, sliced: true, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
       }else{
         return {name: item.name + ' Tr.', id: item.id, number: 0, sliced: true, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
       }
     }));
    }));
  }
}
