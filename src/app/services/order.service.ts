import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { DataService } from './data.service';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { Order } from '../models/order.model';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  orders: Order[] = []
  orderChangedSubject: Subject<Order[]> = new Subject<Order[]>()


  constructor(private authService: AuthService, private http: HttpClient) {
    
   }


  addOrder(order: Order){


    //assign user id to item
    this.authService.user.subscribe((user: User)=> {
      console.log(user)
      order.user_id = user.id
    })

    console.log(order)
    return this.http.post<Order>('/api/orders/add', order).pipe(catchError(this.handleErrors), tap(res => {
      this.orders.push(res)
      this.orderChangedSubject.next(this.orders)
    }))



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
