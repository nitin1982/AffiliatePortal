import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../Security/login-component/login-component.component';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  declarations: [HomeComponent, NotFoundComponent],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
