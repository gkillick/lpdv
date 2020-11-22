import { Injectable } from '@angular/core';
import {SENDING_ITEM, GET_KEYS_ORDERS, GET_KEYS_ITEMS, RESPONSE_KEYS_ITEMS, RESPONSE_KEYS_ORDERS, REQUEST_ITEM, RESPONSE_ITEM, RESPONSE_ORDER, REQUEST_ORDER} from '../../message-types'
import {IpcRenderer} from 'electron'
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';
import { Order } from '../models/order.model';
import { ItemOrder } from '../models/item_order.model';

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
  orderCounts = []
  orderCountChanged: Subject<any> = new Subject<any>()


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
    console.log('order changed')
    console.log(order)

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


    for(let item of this.items){
      for(let itemOrder of order.itemOrders){
        if(item.name === itemOrder.item.name){
          var foundItemType = false
          for(let orderCount of this.orderCounts){
            if(orderCount['name'] === item.name){
              foundItemType = true
              orderCount['count'] += +itemOrder.amount
            }
          }
          if(!foundItemType){
            this.orderCounts.push({name: item.name, count: +itemOrder.amount})
          }
        }
      }
    }

    this.orderCountChanged.next(this.orderCounts)

    console.log(this.orderCounts)



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
        //data.name, data.item_type, data.price
        const item = new Item(null,data.name, data.item_type, data.price, data.sliced, data.tax_catagory)
        this.items.push(item)
        this.itemsChanged.next(this.items)
        console.log(this.items)


      }
      

    })

    this.ipc.on(RESPONSE_ORDER, (event, msg) => {

      const {type, data, id} = msg 

      if(type === "ORDER"){

        //find id for order here and pass id to item order
        const order = new Order(id, data.user_id, data.first_name, data.last_name, data.telephone,data.date, [])
        
        for(let item of this.items){
          for(let itemOrder of data.itemOrders){
            if(item.name === itemOrder.item.name){
              order.itemOrders.push(new ItemOrder(null, null, item, +itemOrder.amount, itemOrder.sliced))
              var foundItemType = false
              for(let orderCount of this.orderCounts){
                if(orderCount['name'] === item.name){
                  foundItemType = true
                  orderCount['count'] += +itemOrder.amount
                }
              }
              if(!foundItemType){
                this.orderCounts.push({name: item.name, count: +itemOrder.amount})
              }
            }
          }
        }

        this.orders.push(order)
        this.orderChanged.next(this.orders)
        this.orderCountChanged.next(this.orderCounts)
      }


    })


    this.ipc.send(GET_KEYS_ITEMS)
  }

}
