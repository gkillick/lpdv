import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {map, take} from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ItemOrder } from '../models/item_order.interface';
import {ItemsService} from './items.service';
import {Item} from "../models/item.interface";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: Observable<ItemOrder[]> = new Observable<ItemOrder[]>(null);
  itemOrdersCollection: AngularFirestoreCollection<ItemOrder>;
  itemOrdersList: ItemOrder[];

  constructor(public http: HttpClient, public authService: AuthService, public afs: AngularFirestore, public itemsService: ItemsService) {
    this.itemOrdersCollection = this.afs.collection<ItemOrder>('itemOrders', ref => ref.where('uid', '==', authService.user.uid));
    this.itemOrders = this.itemOrdersCollection.valueChanges();
    this.itemOrders.subscribe(itemOrders => {
      this.itemOrdersList = itemOrders;
    }) ;
  }

  addItemOrders(itemOrders: ItemOrder[]): Promise<any>{
    const itemsOrdersBatch = this.afs.firestore.batch();
    for (const itemOrder of itemOrders) {
      const itemOrderRef = this.itemOrdersCollection.doc().ref;
      itemOrder.id = itemOrderRef.id;
      itemOrder.uid = this.authService.user.uid;
      itemsOrdersBatch.set(itemOrderRef, itemOrder);
    }
    return itemsOrdersBatch.commit();

  }

  editItemOrder(itemOrder: ItemOrder): Promise<any> {
     return this.itemOrdersCollection.doc(itemOrder.id).set(itemOrder);
  }


  deleteItemOrdersForOrder(ordId: string): void{
    this.afs.collection<ItemOrder>('itemOrders',
        ref => ref.where('uid', '==', this.authService.user.uid) && ref.where('order_id', '==', ordId))
      .valueChanges().pipe(map((itemOrders: ItemOrder[]) => {
        itemOrders.forEach((itemOrder: ItemOrder) => {
          this.itemOrdersCollection.doc(itemOrder.id).delete();
      });
    })).subscribe();
  }

  formattedItemOrdersForProductionTable(func: (date1: Date, date2: Date, date3: Date) => boolean, date1: Date, date2: any): Observable<any>{
    return combineLatest(this.itemOrders, this.itemsService.items).pipe(take(1), map(([itemOrders, items]) => {
      const itemOrds = itemOrders.filter(itemOrder => {
        const selectedDate1 = new Date(date1);
        const selectedDate2 = new Date(date2);
        const orderDate = itemOrder.date.toDate();
        selectedDate1.setHours(0,0,0,0);
        selectedDate2.setHours(0,0,0,0);
        orderDate.setHours(0,0,0,0);
        console.log(selectedDate1);
        console.log(orderDate);
        console.log(func);
        console.log(func(orderDate, selectedDate1, selectedDate2));
        return func(orderDate, selectedDate1, selectedDate2);
      }).map(itemOrder => {
        const it = items.find((item: Item) => item.id === itemOrder.item_id);
        return {
          name: it.name,
          type: it.item_type,
          combinedName: it.name,
          amount: itemOrder.amountTotal,
          sliced_amount: itemOrder.amountSliced
        };
      });
      const distinctItemNames = {};
      itemOrds.forEach(ord => {
        if (!distinctItemNames[ord.name]){
          distinctItemNames[ord.name] = ord;
        }else {
          distinctItemNames[ord.name].amount += ord.amount;
          distinctItemNames[ord.name].sliced_amount += ord.sliced_amount;
        }
      });
      const returnArray = [];
      for (const key of Object.keys(distinctItemNames)){
        returnArray.push(distinctItemNames[key]);
      }
      return returnArray;
    }));
  }


}
