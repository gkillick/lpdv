import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ItemOrder } from '../models/item_order.model';
import {map, tap, catchError} from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: ItemOrder[]
  itemOrderSubject: Subject<ItemOrder[]> = new Subject<ItemOrder[]>()

  constructor(private http: HttpClient) { 

    this.itemOrders = []
    console.log(this.itemOrders)
  }

  addItemOrders(itemOrde: ItemOrder[]){
    const orders = {orders: itemOrde}

    this.itemOrders = this.itemOrders.filter(itemOr => {
      return !(itemOr.order_id === itemOrde[0].order_id)
    })
    return this.http.post('/api/itemOrders/add', orders).pipe(catchError(this.handleErrors), tap(res => {
      for(let itemOrder of res['itemOrders']){
        console.log(itemOrder)
        console.log(this.itemOrders)
        this.itemOrders.push(itemOrder)
      }
      this.itemOrderSubject.next(this.itemOrders)
    }))
  }

  getItemOrders(){
    return this.http.get('api/itemOrders').pipe(catchError(this.handleErrors), tap(res => {
      this.itemOrders = []
      console.log(res['itemOrders'])
      this.itemOrders = res['itemOrders']
      if(!this.itemOrders){
        this.itemOrders = []
      }

      this.itemOrderSubject.next(this.itemOrders)
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
