import { Injectable } from '@angular/core';
import {SENDING_ITEM, GET_KEYS_ORDERS, GET_KEYS_ITEMS, RESPONSE_KEYS_ITEMS, RESPONSE_KEYS_ORDERS, REQUEST_ITEM, RESPONSE_ITEM, RESPONSE_ORDER, REQUEST_ORDER} from '../../message-types'
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

  addOrder(order: Order){

    this.orders.push(order)
    this.orderChanged.next(this.orders)

    const key: string = this.idTraker.toString()

    const itemWithId = {
      key: key, 
        payload: {
          type: 'ORDER',
          data : order 
      }
    }

    this.idTraker++

    this.ipc.send(SENDING_ITEM,  itemWithId)

  }

  addItem(item: Item){

    console.log(item)
    this.items.push(item)
    this.itemsChanged.next(this.items)

    const key: string = this.idTraker.toString()

    const itemWithId = {
      key: key, 
        payload: {
          type: 'ITEM',
          data : item
      }
    }

    this.idTraker++

    this.ipc.send(SENDING_ITEM,  itemWithId)

  }



  getStoredItems(){

  }




  getStoredData(){

    this.ipc.on(RESPONSE_KEYS_ITEMS, (event, keys) => {
      console.log(keys)

      for(let key of keys){
        this.ipc.send(REQUEST_ITEM, key)
        this.idTraker+=1
      }
    this.ipc.send(GET_KEYS_ORDERS)

    })

    this.ipc.on(RESPONSE_KEYS_ORDERS, (event, keys) => {

      for(let key of keys){
        this.ipc.send(REQUEST_ORDER, key)
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


      }
      

    })

    this.ipc.on(RESPONSE_ORDER, (event, msg) => {

      const {type, data} = msg 

      if(type === "ORDER"){
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




    this.ipc.send(GET_KEYS_ITEMS)
  }

}
