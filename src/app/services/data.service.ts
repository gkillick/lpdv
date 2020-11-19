import { Injectable } from '@angular/core';
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import {IpcRenderer} from 'electron'
import { Item, ItemOrder, Order } from '../models/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ipc: IpcRenderer
  items: Item[] = []
  itemsChanged: Subject<Item[]> = new Subject<Item[]>()
  orders: Order[] = []
  orderChanged: Subject<Order[]> = new Subject<Order[]>()
  idTraker = 0


  constructor() { 

    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }

  

  }

  getStoredData(){

    console.log('getting stored data')

    this.ipc.on(RESPONSE_KEYS, (event, keys) => {
      console.log(keys)

      for(let key of keys){
        this.ipc.send(REQUEST_ITEM, key)
        this.idTraker+=1
      }

    })

    this.ipc.on(RESPONSE_ITEM, (event, msg) => {

      const {type, data} = msg 

      if(type === "ITEM"){
        const item = new Item(data.name, data.item_type, data.price)
        this.items.push(item)
        this.itemsChanged.next(this.items)
        console.log(this.items)


      }else if(type === "ORDER"){
        console.log(data)
        const order =new Order(data.name, [])
        for(let item of this.items){
          for(let itemOrder of data.itemOrders){
            console.log(itemOrder)
            if(item.name === itemOrder.item.name){
              order.itemOrders.push(new ItemOrder(item, +itemOrder.amount))
            }
          }
        }
        this.orders.push(order)
        this.orderChanged.next(this.orders)
      }

      console.log(this.orders)
    })

    this.ipc.send(GET_KEYS)
  }

}
