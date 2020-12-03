import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemOrder } from '../models/item_order.model';
import {map, tap, catchError} from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: ItemOrder[] = []
  itemOrderSubject: Subject<ItemOrder[]> = new Subject<ItemOrder[]>()

  constructor(private http: HttpClient) { }

  addItemOrders(itemOrders: ItemOrder[]){
    const orders = {orders: itemOrders}
    return this.http.post('/api/itemOrders/add', orders).pipe(catchError(this.handleErrors), map(res => {
      const itemOrders: ItemOrder[] = [] 
      for(let itemOrder of res['itemOrders']){
        itemOrders.push(itemOrder)
      }
      itemOrders
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
