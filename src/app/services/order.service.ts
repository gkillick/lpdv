import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  order: Order[] = []
  orderChangedSubject: Subject<Order[]> = new Subject<Order[]>()


  constructor(private dataService: DataService) {
    
   }


  addOrder(order: Order){
    this.order.push(order)
    this.orderChangedSubject.next(this.order)
    const key: string = this.dataService.idTraker.toString()

    const itemWithId = {
      key: key, 
        payload: {
          type: 'ORDER',
          data : order 
      }
    }



    this.dataService.ipc.send(SENDING_ITEM,  itemWithId)

  }

}
