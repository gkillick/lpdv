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
  orderQuantities = []
  orderCountQuantities: Subject<any> = new Subject<any>()
  itemNames = []


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


  getOrderById(id: number){

    for(let order of this.orders){
      if(+order.id == id){
        return order
      }
    }

    return null
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

  }

  saveOrder(order: Order){

    console.log(order)
    var index = 0
    for(let ord of this.orders){
      if(ord.id == order.id){
        console.log(index)
        break
      }
      index +=1
    }

    this.orders[index] = order

    order.updateSummary()

    this.orderChanged.next(this.orders)

    const key: string = order.id

    const orderWithId = {
      key: key,
        payload: {
          type: 'ORDER',
          data : order 
      }
    }

    this.ipc.send(SENDING_ITEM,  orderWithId)
  }


  addItem(item: Item){

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

    this.itemNames.push(item.name)

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
        this.itemNames.push(data.name)
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
        console.log(id)
        const order = new Order(id, data.user_id, data.first_name, data.last_name, data.telephone, new Date(data.date), [], data.before_tax, data.tax, data.total)
        

        for(let item of this.items){
          for(let itemOrder of data.itemOrders){
            if(item.name === itemOrder.item.name){
              order.addItemOrder(new ItemOrder(null, null, item, +itemOrder.amount, itemOrder.sliced))
            }
          }
        }

        this.orders.push(order)
        this.orderChanged.next(this.orders)
      }


    })


    this.ipc.send(GET_KEYS_ITEMS)
  }
  

}
