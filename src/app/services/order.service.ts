import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { DataService } from './data.service';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { Order } from '../models/order.model';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators'
import { ItemOrdersService } from './item-orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  orders: Order[] = []
  orderChangedSubject: Subject<Order[]> = new Subject<Order[]>()


  constructor(private itemOrderService: ItemOrdersService,private authService: AuthService, private http: HttpClient) {
    
   }

  addOrder(order: Order){
    console.log('order: ')
    console.log(order)
    //assign user id to item
    this.authService.user.subscribe((user: User)=> {
      console.log(user)
      order.user_id = user.id
    })

    console.log(order)
    return this.http.post<Order>('/api/orders/add', order).pipe(catchError(this.handleErrors), tap(res => {
      console.log(res)
    }))
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
