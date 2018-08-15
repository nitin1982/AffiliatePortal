import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLandingComponent } from './Components/AdminLandingPage/admin-landing.component';
import { UserMaintenanceComponent } from './Components/UserMaintenance/user-maintenance.component';
import { ConfigurationComponent } from './Components/Configuration/configuration.component';
import { AppUserService } from './services/app-user.service';
import { UserDetailComponent } from './Components/UserDetail/user-detail.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLandingComponent,    
    children: [
      {
        path: 'AppUsers',
        component: UserMaintenanceComponent
      },
      {
        path: '',
        redirectTo: 'AppUsers',
        pathMatch: 'full'
      },
      {
        path: 'Config',
        component: ConfigurationComponent
      },
      {
        path:'AppUserDetail/:id',
        component: UserDetailComponent
      }
    ]
  }
  

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminLandingComponent, UserMaintenanceComponent, ConfigurationComponent, UserDetailComponent],
  providers: [AppUserService]
})

export class AdminModule { }
