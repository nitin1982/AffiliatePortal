import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  title = 'app';

  constructor(private router: Router){
    this.loading = true;
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        console.log('Navigation Started.')
        this.loading = true;
      }else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel
        ) {
        console.log('Navigation Ended.')
        this.loading = false;
    }
    });
  }
}
