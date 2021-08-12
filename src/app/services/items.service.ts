import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})


export class ItemsService {

  items: Observable<Item[]> = new Observable<Item[]>(null)
  itemCollection: AngularFirestoreCollection<Item>
  itemsBatch;

  constructor(private http: HttpClient, private authService: AuthService, private afs: AngularFirestore) { 
    this.itemsBatch = this.afs.firestore.batch()
    this.itemCollection = this.afs.collection<Item>('items', ref => ref.where("uid", '==', authService.user.uid))
    this.items = this.itemCollection.valueChanges()
  }

  addItem(item: Item){
    item.name = item.name.toLowerCase()
    item.uid = this.authService.user.uid
    item.id = this.afs.createId()
    return this.itemCollection.doc(item.id).set(item)
  }

  addItems(items: Item[]): Promise<any> {

    for(let item of items){
      item.name = item.name.toLowerCase()
      item.uid = this.authService.user.uid
      const itemRef = this.itemCollection.doc().ref
      item.id = itemRef.id
      this.itemsBatch.set(itemRef, item)
    }

    return this.itemsBatch.commit()
  }

  editItem(item: Item){
    return this.itemCollection.doc(item.id).update(item)
  }

  deleteItem(item: Item){
    return this.itemCollection.doc(item.id).delete()
  }
}
