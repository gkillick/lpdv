import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {Item} from '../models/item.model'
import {IpcRenderer} from 'electron'
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
//import storage from 'electron-json-storage'

 

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = []
  itemChangedSubject: Subject<Item[]> = new Subject<Item[]>()
  ipc: IpcRenderer

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

    this.ipc.on(RESPONSE_KEYS, (event, keys) => {

      for(let key of keys){
        this.ipc.send(REQUEST_ITEM, key)
      }

    })

    this.ipc.on(RESPONSE_ITEM, (event, data) => {
      this.items.push(data)
      this.itemChangedSubject.next(this.items)
    })

    this.ipc.send(GET_KEYS)
  }




  addItem(item: Item){

    this.items.push(item)
    this.itemChangedSubject.next(this.items)

    const key: string = (this.items.length - 1).toString()

    console.log(key)

    const itemWithId = {key: key, data: item}

    this.ipc.send(SENDING_ITEM,  itemWithId)

  }

  getItems(){

    return this.items.slice()

  }
}
