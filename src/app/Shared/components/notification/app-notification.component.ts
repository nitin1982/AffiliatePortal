import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { AppNotification, AppNotificationType } from '../../models/app-notification';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html'
    
})
export class AppNotificationComponent implements OnInit {
    alerts: AppNotification[] = [];
    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void { 
        this.notificationService.getAlert().subscribe((alert: AppNotification) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
 
            // add alert to array
            this.alerts.push(alert);
        });
    }

    removeAlert(alert: AppNotification) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
 
    cssClass(alert: AppNotification) {
        if (!alert) {
            return;
        }
 
        // return css class based on alert type
        switch (alert.type) {
            case AppNotificationType.Success:
                return 'alert alert-success';
            case AppNotificationType.Error:
                return 'alert alert-danger';
            case AppNotificationType.Info:
                return 'alert alert-info';
            case AppNotificationType.Warning:
                return 'alert alert-warning';
        }
    }
}
