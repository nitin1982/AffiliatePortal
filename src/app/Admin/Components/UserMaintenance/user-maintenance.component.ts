import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../../services/app-user.service';
import { AppUser } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html'
})
export class UserMaintenanceComponent implements OnInit {

  appUsers: AppUser[] = [];
  srch: string;
  constructor(private appUserService: AppUserService, private route: ActivatedRoute) { 
    
  }
  ngOnInit() {    
    this.appUserService.getAllUsers().subscribe(data => this.appUsers = data);    
    this.route.queryParamMap.subscribe(val => this.srch = val.get('search'));
  }
}
