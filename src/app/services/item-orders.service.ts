import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map, tap, catchError} from 'rxjs/operators'
import { Observable, Subject, throwError } from 'rxjs';
import { nextTick } from 'process';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ItemOrder } from '../models/item_order.interface';
import {ItemsService} from "./items.service";
import {Item} from "../models/item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: Observable<ItemOrder[]> = new Observable<ItemOrder[]>(null);
  itemOrdersCollection: AngularFirestoreCollection<ItemOrder>;
  itemOrdersList: ItemOrder[];
  itemsOrdersBatch;

  constructor(public http: HttpClient, public authService: AuthService, public afs: AngularFirestore, public itemsService: ItemsService) {
    this.itemsOrdersBatch = this.afs.firestore.batch();
    this.itemOrdersCollection = this.afs.collection<ItemOrder>('itemOrders', ref => ref.where("uid", '==', authService.user.uid));
    this.itemOrders = this.itemOrdersCollection.valueChanges();
    this.itemOrders.subscribe(itemOrders => {
      console.log(itemOrders);
      this.itemOrdersList = itemOrders;
    }) ;
  }

  addItemOrders(itemOrders: ItemOrder[]){

    for(let itemOrder of itemOrders){
      const itemOrderRef = this.itemOrdersCollection.doc().ref;
      itemOrder.id = itemOrderRef.id;
      itemOrder.uid = this.authService.user.uid;
      console.log(itemOrder.uid);
      this.itemsOrdersBatch.set(itemOrderRef, itemOrder);
    }

    return this.itemsOrdersBatch.commit();

  }


  deleteItemOrdersForOrder(ord_id){
    return;
  }

  handleErrors(errorRes: HttpErrorResponse){


    let errorMessage = "an unknown error occured"

    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorRes)
    }

    switch(errorRes.error.error){
      case "ITEM_EXISTS":
        errorMessage = "The item already exists"

    }

    throw(errorMessage)

}
}
