import { Injectable } from '@angular/core';
import {SENDING_ITEM, DELETE_ITEM, GET_KEYS_ORDERS, GET_KEYS_ITEMS, RESPONSE_KEYS_ITEMS, RESPONSE_KEYS_ORDERS, REQUEST_ITEM, RESPONSE_ITEM, RESPONSE_ORDER, REQUEST_ORDER} from '../../message-types'
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
/*
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
    */
  }
/*

  getOrderById(id: number){

    for(let order of this.orders){
      if(+order.id == id){
        return order
      }
    }

    return null
  }

  getItemById(id: number){

    for(let item of this.items){
      if(+item.id == id){
        return item
      }
    }

    return null
  }


  addOrder(order: Order){

    this.orders.push(order)
    this.orderChanged.next(this.orders)
    console.log('order changed')
    console.log(order)

    const itemWithId = {
      key: order.id, 
        payload: {
          type: 'ORDER',
          data : order 
      }
    }



    this.ipc.send(SENDING_ITEM,  itemWithId)

  }

  deleteOrderById(id: string){


    this.orders = this.orders.filter(order => {
      console.log(+order.id == +id)
      return +order.id !== +id
    })

    this.orderChanged.next(this.orders)

    console.log(this.orders)
    console.log(id)


    this.ipc.send(DELETE_ITEM, id)

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

    console.log(item)

    const itemWithId = {
      key: item.id, 
        payload: {
          type: 'ITEM',
          data : item
      }
    }

    this.itemNames.push(item.name)

    this.ipc.send(SENDING_ITEM,  itemWithId)

  }

  saveItem(item: Item){


    var index = 0
    for(let it of this.items){
      if(it.id == item.id){
        console.log(index)
        break
      }
      index +=1
    }

    this.items[index] = item

    this.itemsChanged.next(this.items)

    const itemWithId= {
      key: item.id,
        payload: {
          type: 'ITEM',
          data :item 
      }
    }
    
    this.updateItemNames()


    this.ipc.send(SENDING_ITEM,  itemWithId)
  }

  updateItemNames(){

    this.itemNames = []

    for(let item of this.items){
      this.itemNames.push(item.name)
    }

    console.log(this.itemNames)
  }

  deleteItemById(id: string){

    console.log(this.items)
    this.items = this.items.filter(item=> {
      console.log(+item.id !== +id)
      return +item.id !== +id
    })

    console.log(this.items)


    this.ipc.send(DELETE_ITEM, id)

    this.itemsChanged.next(this.items)

  }



  getStoredData(){

    this.ipc.on(RESPONSE_KEYS_ITEMS, (event, keys) => {
      console.log(keys)

      for(let key of keys){
        this.ipc.send(REQUEST_ITEM, key)
        if(this.idTraker <= key){
          this.idTraker = +key + 1
        }
      }
    this.ipc.send(GET_KEYS_ORDERS)

    })

    this.ipc.on(RESPONSE_KEYS_ORDERS, (event, keys) => {

      for(let key of keys){
        this.ipc.send(REQUEST_ORDER, key)
        if(this.idTraker <= key){
          this.idTraker = +key + 1
        }
      }
    })

    this.ipc.on(RESPONSE_ITEM, (event, msg) => {

      const {type, data} = msg 

      if(type === "ITEM"){
        //data.name, data.item_type, data.price
        this.itemNames.push(data.name)
        console.log(data)
        const item = new Item(data.id ,data.name, data.item_type, data.price, data.sliced, data.tax_catagory)
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
          console.log(data.itemOrders)
          for(let itemOrder of data.itemOrders){
            if(item.id === itemOrder.item_id){

              order.addItemOrder(new ItemOrder(null, item.name, null , +item.id, +itemOrder.amount, itemOrder.sliced))
            }
          }
        }

        this.orders.push(order)
        this.orderChanged.next(this.orders)
      }


    })


    this.ipc.send(GET_KEYS_ITEMS)
  }

  sendDataToPrint(data: any){

    this.ipc.send("printPDF", data)
  }
  
*/
}
