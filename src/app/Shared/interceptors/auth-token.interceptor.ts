import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import { LoginService } from '../../Security/services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    
    constructor(private loginService: LoginService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.loginService.getLocalStorage("AuthToken")}`
          }
        });
    
        return next.handle(request);
      }

}