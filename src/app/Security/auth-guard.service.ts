import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):boolean {
        return this.checkUserLoggedIn(state.url);
    }

    checkUserLoggedIn(url: string) {
        console.log(this.loginService.isLoggedIn);
        if(!this.loginService.isLoggedIn){
            this.loginService.redirectUrl = url;
            this.router.navigate(['Login']);
            return false;
        }
        console.log(this.loginService.loggedInUser);
        return true;
        
    }
}
