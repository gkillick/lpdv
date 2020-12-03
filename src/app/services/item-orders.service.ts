import { Injectable } from '@angular/core';
import { ItemOrder } from '../models/item_order.model';

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: ItemOrder[] = []

  constructor() { }

  addItemOrder(itemOrder: ItemOrder){
/*
    return this.http.post<Order>('/api/itemOrders/add', order).pipe(catchError(this.handleErrors), tap(res => {
      this.orders.push(res)
      this.orderChangedSubject.next(this.orders)
    }))

    */

  }
}
