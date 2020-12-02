import { Injectable, OnInit} from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Item } from '../models/item.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AuthService } from '../auth.service';


 

@Injectable({
  providedIn: 'root'
})


export class ItemsService implements OnInit{


  items: Item[] = []
  itemsSubject: Subject<Item[]> = new Subject<Item[]>()

  constructor(private http: HttpClient, private authService: AuthService) { 
    
  }
  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user){
        this.fetchItems().subscribe(res => {
          console.log(res)
        })
      }
    })
  }

  addItem(item: Item){
    //assign user id to item
    item.name = item.name.toLowerCase()
    this.authService.user.subscribe(user => {
      console.log(user)
      item.user_id = user.id;
    })

    console.log(item)
    return this.http.post<Item>('/api/items/add', item).pipe(catchError(this.handleErrors), tap(res => {
      this.items.push(res)
      this.itemsSubject.next(this.items)
    }))
  }


  fetchItems(){
    console.log("getting items")
    return this.http.get('/api/items').pipe(catchError(this.handleErrors), tap(res => {

      this.items = []
      for(let item of res['items']){
        this.items.push(item)
      }

      this.itemsSubject.next(this.items)
    }))
  }

  editItem(item: Item){

    console.log(item)
    item.name = item.name.toLowerCase()
    return this.http.put('api/items', item).pipe(catchError(this.handleErrors), tap(res => {

      this.items = this.items.map((item: Item) => {
        if(item.id === res['id']){
          return Item.newItem(res)
        }else{
          return Item.newItem(item)
        }
      })

      this.itemsSubject.next(this.items)
    }))
  }

  deleteItem(item: Item){

    return this.http.delete('api/items/'+item.id).pipe(catchError(this.handleErrors), tap(res => {

      this.items = this.items.filter(item => {
        return !(item.id === res['id'])
      })
      this.itemsSubject.next(this.items)
    }))

  }



  handleErrors(errorRes: HttpErrorResponse){


    let errorMessage = "an unknown error occured"

    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorRes)
    }

    switch(errorRes.error.error){
      case "ITEM_EXISTS":
        errorMessage = "The item already exists"

    }

    throw(errorMessage)

}

  
}
