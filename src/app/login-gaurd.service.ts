import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class LoginGaurdService implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{

        return this.authService.user.pipe(map(user => {

            return !user
        }), tap(isAuth => {

            console.log(isAuth)

            if(!isAuth){
                this.router.navigate(['/dashboard'])
                return false
            }
                return true
        }))
    }
}