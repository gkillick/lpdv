import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import {Item, ItemForm} from '../models/item.interface';
import {map, tap} from 'rxjs/operators';
import {ItemFormInfo} from "../models/form.interface";




@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  items: Observable<Item[]> = new Observable<Item[]>(null);
  itemsList: Item[];
  itemCollection: AngularFirestoreCollection<Item>;
  itemsBatch;

  constructor(private http: HttpClient, private authService: AuthService, private afs: AngularFirestore) {
    this.itemsBatch = this.afs.firestore.batch();
    this.itemCollection = this.afs.collection<Item>('items', ref => ref.where('uid', '==', authService.user.uid));

    this.items = this.itemCollection.valueChanges();
    this.items.subscribe(items => {
      this.itemsList = items;
    });
  }

  addItem(itemForm: ItemForm): Promise<any>{
    const item: Item = {...itemForm, uid: this.authService.user.uid, id: this.afs.createId()};
    item.name = item.name.toLowerCase();
    return this.itemCollection.doc(item.id).set(item);
  }


  getFormattedItems(): Observable<ItemFormInfo[]>{
    // This function will create a list of objects with sliced and unsliced variaties
    return this.items.pipe(map(items => {
      return items.filter(item => item.sliced_option).map(item => {
        return {name: item.name + ' Tr.', id: item.id, number: 0, sliced: true, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
      }).concat(items.map(item => {
        return  {name: item.name, id: item.id, number: 0, sliced: false, item_type: item.item_type, tax_category: item.tax_catagory, price: item.price};
      }));
    }));
  }

  addItems(items: Item[]): Promise<any> {

    for(const item of items){
      item.name = item.name.toLowerCase();
      item.uid = this.authService.user.uid;
      const itemRef = this.itemCollection.doc().ref;
      item.id = itemRef.id;
      this.itemsBatch.set(itemRef, item);
    }

    return this.itemsBatch.commit();
  }

  editItem(item: Item): Promise<any> {
    return this.itemCollection.doc(item.id).update(item);
  }

  deleteItem(item: Item): Promise<any> {
    return this.itemCollection.doc(item.id).delete();
  }
}
