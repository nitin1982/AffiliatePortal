import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation/app-navigation.component';
import { AffiliateModule } from './affiliate/affiliate.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './Security/login-component/login-component.component';
import { LoginService } from './Security/login.service';
import { AuthGuard } from './Security/auth-guard.service';
import { AppLoadingComponent } from './App-Loading/app-loading.component';



@NgModule({
  declarations: [
    AppComponent, NavigationComponent, LoginComponent, AppLoadingComponent
  ],
  imports: [
    BrowserModule, AffiliateModule, AppRoutingModule, FormsModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
