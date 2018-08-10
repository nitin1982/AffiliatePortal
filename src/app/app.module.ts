import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent, NavigationComponent, AppLoadingComponent
  ],
  imports: [
    BrowserModule, AffiliateModule, AppRoutingModule, FormsModule, SecurityModule, HttpClientModule
   //,HttpClientInMemoryWebApiModule.forRoot(InMemoryLoginDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
