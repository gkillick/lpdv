import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, tap} from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from './models/user.model';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  tokenExpirationTimer: any

  constructor(private http: HttpClient, private router: Router) { }


  signup(username: string, password:string){
    return this.http.post('/api/user/register', {
      name: username,
      password: password
  }).pipe(catchError(this.handleErrors))

  }

  login(username: string, password: string){
    return this.http.post<User>('/api/user/login', {
      name: username,
      password: password
    } ).pipe(catchError(this.handleErrors), tap(resData => {
    this.handleAuthentication(resData.id, resData.name, resData.token)
    }))
  }


  handleAuthentication(id: string, name: string, token: string){

    const data = jwt_decode(token)


    const user = new User(id, name, token)
    //user.setExpiaryTime(Date(data['iat']))
    user.setExpiaryTime(data['iat'])

    this.user.next(new User(id, name, token))

    localStorage.setItem('userData', JSON.stringify(user))

    this.router.navigate(['/dashboard'])
  }

  autoLogin(){

    const {id, name, token, expiaryTime} = JSON.parse(localStorage.getItem('userData'))

    const user = new User(id, name, token)

    const expiaryDate = new Date(expiaryTime).getTime()/1000
    user.setExpiaryTime(expiaryDate)

    if(user.getToken()){
      this.user.next(user)
      console.log('login worked')
      this.autoLogout(expiaryDate)
      this.router.navigate(['/dashboard'])
    }else{
      console.log('the token expired')
    }

  }

  autoLogout(expirationDuration: number){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout
    }, expirationDuration)
  }

  logout(){
    this.user.next(null)
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
