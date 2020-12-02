import { Injectable, OnInit} from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AuthService } from '../auth.service';


 

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  addItem(item: Item){
    //assign user id to item
    this.authService.user.subscribe(user => {
      console.log(user)
      item.user_id = user.id;
    })

    console.log(item)
    return this.http.post('/api/items/add', item).pipe(catchError(this.handleErrors))
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

    throw(errorRes)

}

  
}
