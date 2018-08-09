import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { IUser } from '../models/user';

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;;
    loggedInUser: IUser;
    redirectUrl: string;

    constructor() {

    }

    login(user: IUser): Observable<boolean> {
        return of(true)
        .pipe(
            delay(1000), 
            tap(val => this.isLoggedIn = true),
            tap(val => this.loggedInUser = user)
        );
    }

    logOut() {
        this.isLoggedIn = false;
        this.loggedInUser = {userName:'', password:''};
    }

}