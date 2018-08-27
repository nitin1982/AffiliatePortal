import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../Security/login-component/login-component.component';
import { AuthGuard } from '../Security/services/auth-guard.service';
import { SelectiveStrategy } from './services/selective-strategy.service';

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
    path: 'Admin',
    // canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // data: { preload: true},
    loadChildren: '../Admin/admin.module#AdminModule'    
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes,
      {
        enableTracing: false, 
        // preloadingStrategy: PreloadAllModules
        preloadingStrategy: SelectiveStrategy
      })
  ],
  declarations: [HomeComponent, NotFoundComponent],
  exports: [ RouterModule ],
  providers: [SelectiveStrategy]
})
export class AppRoutingModule { }
