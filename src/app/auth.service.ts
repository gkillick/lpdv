import { Injectable, NgZone } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, tap} from 'rxjs/operators'
import {BehaviorSubject, Observable, throwError} from 'rxjs';
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

  userData: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  user: User;
  tokenExpirationTimer: any;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    ) {

      this.afAuth.authState.subscribe(user => {
        this.user = user;
        this.userData.next(user);
        if (user) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
   }

   signUp(email: string, password: string): Promise<any>{
     return this.afAuth.createUserWithEmailAndPassword(email, password);
   }

   login(email: string, password: string): Promise<any>{
     return this.afAuth.signInWithEmailAndPassword(email, password);
   }



   logout(): void{
     this.afAuth.signOut().then(() => {

     });
   }
}
