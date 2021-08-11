import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { AuthService } from './auth.service';
import {exhaustMap, take} from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()


export class AuthInterceptorService implements HttpInterceptor{
    constructor(
        private afAuth: AngularFireAuth
        ){}


    intercept(req: HttpRequest<any>, next: HttpHandler){

        return this.afAuth.authState.pipe(take(1), exhaustMap(user => {

            if(!user){
                return next.handle(req)
            } else {
                user.getIdToken().then(token => {
                    const modifiedReq = req.clone({headers: new HttpHeaders({'auth-token': token})}) 
                    return next.handle(req)
                }).catch(error => {
                    console.log(error)
                })
            }
        }))
    }



}