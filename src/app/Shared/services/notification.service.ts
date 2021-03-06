import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
 
import { AppNotification, AppNotificationType  } from '../models/app-notification';
 
@Injectable()
export class NotificationService {
    private subject = new Subject<AppNotification>();
    private keepAfterRouteChange = false;
 
    constructor(private router: Router) {
        //clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
 
    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }
 
    success(message: string, keepAfterRouteChange = false) {
        this.Notify(AppNotificationType.Success, message, keepAfterRouteChange);
    }
 
    error(message: string, keepAfterRouteChange = false) {
        this.Notify(AppNotificationType.Error, message, keepAfterRouteChange);
    }
 
    info(message: string, keepAfterRouteChange = false) {
        this.Notify(AppNotificationType.Info, message, keepAfterRouteChange);
    }
 
    warn(message: string, keepAfterRouteChange = false) {
        this.Notify(AppNotificationType.Warning, message, keepAfterRouteChange);
    }
 
    Notify(type: AppNotificationType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<AppNotification>{ type: type, message: message });
    }
 
    clear() {
        // clear alerts
        this.subject.next();
    }
}