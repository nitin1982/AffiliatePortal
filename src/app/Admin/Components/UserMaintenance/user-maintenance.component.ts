import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html'
})
export class UserMaintenanceComponent implements OnInit {

  constructor() { 
    console.log('Activated');
  }

  ngOnInit() {
    console.log('Activated1');
  }

}
