import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation/app-navigation.component';
import { AffiliateModule } from './Affiliate/affiliate.module';
import { AppLoadingComponent } from './App-Loading/app-loading.component';
import { SecurityModule } from './Security/security.module';
import { AppRoutingModule } from './App-Routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from './Security/login-data/in-memory-login-data-service';
import { AuthTokenInterceptor } from './Shared/interceptors/auth-token.interceptor';
import { LoggingService } from './Shared/services/logging.service';
import { HttpErrorHandler } from './Shared/services/http-error-handler.service';
import { AppErrorHandlerService } from './Shared/services/app-error-handler.service';

import { NotificationService } from './Shared/services/notification.service';
import { AppNotificationComponent } from './Shared/components/notification/app-notification.component';


@NgModule({
  declarations: [
    AppComponent, NavigationComponent, AppLoadingComponent, AppNotificationComponent
  ],
  imports: [
    BrowserModule, AffiliateModule, AppRoutingModule, FormsModule, SecurityModule, HttpClientModule
   //,HttpClientInMemoryWebApiModule.forRoot(InMemoryLoginDataService, { dataEncapsulation: false})
  ],
  providers: [NotificationService, LoggingService, HttpErrorHandler,  
    {
      provide: ErrorHandler,
      useClass: AppErrorHandlerService
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
