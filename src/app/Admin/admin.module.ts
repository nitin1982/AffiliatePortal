import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLandingComponent } from './Components/AdminLandingPage/admin-landing.component';
import { UserMaintenanceComponent } from './Components/UserMaintenance/user-maintenance.component';
import { ConfigurationComponent } from './Components/Configuration/configuration.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLandingComponent,    
    children: [
      {
        path: 'UserMaintenance',
        component: UserMaintenanceComponent
      },
      {
        path: '',
        redirectTo: 'UserMaintenance',
        pathMatch: 'full'
      },
      {
        path: 'Config',
        component: ConfigurationComponent
      }
    ]
  }
  

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminLandingComponent, UserMaintenanceComponent, ConfigurationComponent]
})

export class AdminModule { }
