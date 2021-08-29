import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { AuthService } from './auth.service';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({providedIn: 'root'})

export class LoginGaurdService implements CanActivate{

    constructor(private afAuth: AngularFireAuth, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{

        return this.afAuth.authState.pipe(map(user => {
            return !user;
        }), tap(isAuth => {
            if (!isAuth) {
                this.router.navigate(['/dashboard']);
                return false;
            }
            return true;
        }));
    }
}

