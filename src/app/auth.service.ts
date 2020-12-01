import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, tap} from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from './models/user.model';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null)

  constructor(private http: HttpClient) { }


  signup(username: string, password:string){
    return this.http.post('http://localhost:3000/api/user/register', {
      name: username,
      password: password
  }).pipe(catchError(this.handleErrors))

  }

  login(username: string, password: string){
    return this.http.post<User>('http://localhost:3000/api/user/login', {
      name: username,
      password: password
    } ).pipe(catchError(this.handleErrors), tap(resData => {
    this.handleAuthentication(resData.id, resData.name, resData.token)
    }))
  }


  handleAuthentication(id: string, name: string, token: string){

    const data = jwt_decode(token)
    console.log(data)


    this.user.next(new User(id, name, token))

  }


  handleErrors(errorRes: HttpErrorResponse){


      let errorMessage = "an unknown error occured"

      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorRes)
      }

      switch(errorRes.error.error){
        case "USER_EXISTS":
          errorMessage = "This user already exists"
          break;
        case 'INVALID_USERNAME':
          errorMessage = "Invalid username or password"
          break;
        case 'INVALID_PASSWORD':
          errorMessage = "Invalid username or password"
          break;
        case 'ACCESS_DENIED':
          errorMessage = "Invalid creddentials"
          break;
        case 'INVALID_TOKEN':
          errorMessage = "Invalid creddentials"
          break;
  
      }

      throw(errorRes)

  }
}
