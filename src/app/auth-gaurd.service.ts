import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGaurdService implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{

        return this.authService.userData.pipe(map(user => {

            return !!user
        }), tap(isAuth => {

            if(!isAuth){
                this.router.navigate(['/login'])
            }
        }))
    }
}