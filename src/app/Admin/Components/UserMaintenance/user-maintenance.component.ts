import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../services/app-user.service';
import { AppUser } from '../../models/user';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html'
})
export class UserMaintenanceComponent implements OnInit {

  appUsers: AppUser[] = [];
  constructor(private appUserService: AppUserService) { 
    
  }

  ngOnInit() {
    this.appUserService.getAllUsers().subscribe(data => this.appUsers = data);
  }

  
}
