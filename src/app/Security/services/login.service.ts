import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, catchError, map } from 'rxjs/operators';
import { IUser } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILoggedInUser } from '../models/loggenInUser';

@Injectable()
export class LoginService {
    isLoggedIn: boolean = false;;
    loggedInUser: IUser;
    redirectUrl: string;
    private innNetworkApiUrl: string = 'http://localhost:61985/api/Token/InNetwork';
    private outNetworkApiUrl: string = 'http://localhost:61985/api/Token/OutNetwork';

    constructor(private http: HttpClient, private router: Router) {
    }

    login(user: IUser): Observable<ILoggedInUser> {
        if (user) {
            if (user.charterEmp)
                return this.http.get<ILoggedInUser>(this.innNetworkApiUrl, { withCredentials: true }).pipe(                    
                    catchError(this.handleError),
                    delay(1000),
                    tap(val => this.isLoggedIn = true)
                );
            else {
                return this.http.post<ILoggedInUser>(this.outNetworkApiUrl, user).pipe(
                    catchError(this.handleError),
                    delay(1000),
                    tap(val => this.isLoggedIn = true)
                );
            }
        }
    }

    mockedLoginMethod():Observable<boolean>{
        return of(true).pipe(delay(1000), tap(val => this.isLoggedIn = true));
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }

    logOut() {
        this.isLoggedIn = false;
        this.loggedInUser = { userName: '', password: '', charterEmp: false };
        localStorage.removeItem("AuthToken");
    }

    setLocalStorage(k: string, v: string){
        localStorage.setItem(k, v);
    }

    getLocalStorage(k: string): string {
        return localStorage.getItem(k);
    }

}