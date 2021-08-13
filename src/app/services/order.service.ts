import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { DataService } from './data.service';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators'
import { ItemOrdersService } from './item-orders.service';
import { User } from '../models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order} from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  orders: Observable<Order[]> = new Observable<Order[]>(null)
  ordersCollection: AngularFirestoreCollection<Order>


  constructor(private http: HttpClient, private authService: AuthService, private afs: AngularFirestore) { 
    this.ordersCollection= this.afs.collection<Order>('order', ref => ref.where("uid", '==', authService.user.uid))
    this.orders = this.ordersCollection.valueChanges()
  }
/*
  constructor(private itemOrderService: ItemOrdersService,private authService: AuthService, private http: HttpClient) {
    
   }
   */

  addOrder(order: Order){


    order.uid = this.authService.user.uid
    order.id = this.afs.createId()
    return this.ordersCollection.doc(order.id).set(order).then(resp => {
        return order.id
      })
  }

  getOrders(){
    return this.http.get('/api/orders').pipe(catchError(this.handleErrors), tap(res => {
      this.orders = []

      for(let order of res['orders']){
        this.orders.push(Order.newOrder(order))
      }
      this.orderChangedSubject.next(this.orders)
    }))
  }

  editOrder(order: Order){

    return this.http.put<Order>('api/orders', order).pipe(catchError(this.handleErrors), tap(res => {

      console.log(res)
    }))
  }

  deleteOrder(order: Order){
    console.log('deleting')

    this.itemOrderService.deleteItemOrdersForOrder(order.id)

    return this.http.delete('api/orders/'+order.id).pipe(catchError(this.handleErrors), tap(res => {

      this.orders= this.orders.filter(item => {
        return !(item.id === res['id'])
      })
      this.orderChangedSubject.next(this.orders)
    }))
  }

  getOrderById(id){
    for(let order of this.orders){
      if(order.id === id){
        return order
      }
    }
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
