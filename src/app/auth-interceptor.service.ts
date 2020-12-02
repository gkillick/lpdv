import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { AuthService } from './auth.service';
import {exhaustMap, take} from 'rxjs/operators'

@Injectable()


export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler){

        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if(!user){
                return next.handle(req)
            }else{
                const modifiedReq = req.clone({headers: new HttpHeaders({'auth-token': user.token})}) 
                next.handle(modifiedReq)
            }
        }))
    }



}