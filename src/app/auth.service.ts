import { Injectable, NgZone } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, tap} from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
import { ItemsService } from './services/items.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  tokenExpirationTimer: any

  constructor(
    private http: HttpClient, 
    private router: Router,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone 
    ) {

      this.afAuth.authState.subscribe(user => {
        if(user){
          this.setUserData(user)
       this.router.navigate(['dashboard'])
          JSON.parse(localStorage.getItem('user'))
        }else{
          localStorage.setItem('user', null)
          JSON.parse(localStorage.getItem('user'))
        }
      })

   }

   signUp(email, password){
     return this.afAuth.createUserWithEmailAndPassword(email, password).then((result => {
       this.setUserData(result.user)
       this.router.navigate(['dashboard'])
     })).catch(error => {
       console.log(error)
     })
   }

   login(email, password){
     return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
       this.setUserData(result.user)
       this.router.navigate(['dashboard'])
     })
   }



   logout(){
     this.afAuth.signOut().then(() => {
     this.userData.next(null)
     localStorage.removeItem('user')
     this.router.navigate(['login'])
     })
   }

   setUserData(user){
     const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
     }

     this.userData.next(userData)


    localStorage.setItem('user', JSON.stringify(user))

   }



/*
  signup(username: string, password:string){
    return this.http.post<User>('/api/user/register', {
      name: username,
      password: password
  }).pipe(catchError(this.handleErrors), tap(resData => {
    this.handleAuthentication(resData.id, resData.name, resData.token)
    }))

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

    this.autoLogout()

  }

  autoLogin(){

    if(localStorage.getItem('userData')){

      const {id, name, token, expiaryTime} = JSON.parse(localStorage.getItem('userData'))

      const user = new User(id, name, token)

      const expiaryDate = new Date(expiaryTime).getTime()/1000
      user.setExpiaryTime(expiaryDate)

      if(user.getToken()){
        this.user.next(user)
        this.router.navigate(['/dashboard'])
        console.log('login worked')
        this.autoLogout()

      }else{
        console.log('the token expired')
      }
    }else{
      console.log('no user data saved')
    }

  }

  autoLogout(){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout()
    }, 86400000)
  }

  logout(){

    console.log('logout called')
    this.user.next(null)
    this.router.navigate(['/login'])
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
  }

*/





}
