import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {Item} from '../models/item.model'
import {IpcRenderer} from 'electron'
import {SENDING_ITEM, GET_KEYS, RESPONSE_KEYS, REQUEST_ITEM, RESPONSE_ITEM} from '../../message-types'
import { DataService } from './data.service';
//import storage from 'electron-json-storage'

 

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = []
  itemChangedSubject: Subject<Item[]> = new Subject<Item[]>()
  ipc: IpcRenderer


  itemTypesChangedSubject: Subject<any> = new Subject<any>()

  constructor(private dataService: DataService) { 

  }






  addItem(item: Item){

    console.log(item)
    this.items.push(item)
    this.itemChangedSubject.next(this.items)

    const key: string = this.dataService.idTraker.toString()

    const itemWithId = {
      key: key, 
        payload: {
          type: 'ITEM',
          data : item
      }
    }


    this.dataService.ipc.send(SENDING_ITEM,  itemWithId)

  }

  getItems(){

    return this.items.slice()

  }
}
