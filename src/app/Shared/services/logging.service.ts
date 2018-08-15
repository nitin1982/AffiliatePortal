import { Injectable, Injector } from '@angular/core';
import { NotificationService } from './notification.service';
import { AppNotificationType } from '../models/app-notification';

@Injectable()
export class LoggingService {
  private alertService: NotificationService;
  constructor(private injector: Injector){
    
  }
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    this.alertService = this.injector.get(NotificationService);
    this.alertService.Notify(AppNotificationType.Error, message);
  }

  clear() {
    this.messages = [];
  }
}
