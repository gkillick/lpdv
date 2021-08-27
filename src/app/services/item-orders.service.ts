import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ItemOrder } from '../models/item_order.interface';
import {ItemsService} from './items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemOrdersService {


  itemOrders: Observable<ItemOrder[]> = new Observable<ItemOrder[]>(null);
  itemOrdersCollection: AngularFirestoreCollection<ItemOrder>;
  itemOrdersList: ItemOrder[];

  constructor(public http: HttpClient, public authService: AuthService, public afs: AngularFirestore, public itemsService: ItemsService) {
    this.itemOrdersCollection = this.afs.collection<ItemOrder>('itemOrders', ref => ref.where('uid', '==', authService.user.uid));
    this.itemOrders = this.itemOrdersCollection.valueChanges();
    this.itemOrders.subscribe(itemOrders => {
      this.itemOrdersList = itemOrders;
    }) ;
  }

  addItemOrders(itemOrders: ItemOrder[]): Promise<any>{
    const itemsOrdersBatch = this.afs.firestore.batch();
    for (const itemOrder of itemOrders) {
      const itemOrderRef = this.itemOrdersCollection.doc().ref;
      itemOrder.id = itemOrderRef.id;
      itemOrder.uid = this.authService.user.uid;
      itemsOrdersBatch.set(itemOrderRef, itemOrder);
    }
    return itemsOrdersBatch.commit();

  }

  editItemOrder(itemOrder: ItemOrder): Promise<any> {
     return this.itemOrdersCollection.doc(itemOrder.id).set(itemOrder);
  }


  deleteItemOrdersForOrder(ordId: string): void{
    this.afs.collection<ItemOrder>('itemOrders',
        ref => ref.where('uid', '==', this.authService.user.uid) && ref.where('order_id', '==', ordId))
      .valueChanges().pipe(map((itemOrders: ItemOrder[]) => {
        itemOrders.forEach((itemOrder: ItemOrder) => {
          this.itemOrdersCollection.doc(itemOrder.id).delete();
      });
    })).subscribe();
  }
}
