import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { LoginService } from './Security/services/login.service';
import { IUser } from './Security/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  title = 'app';

  constructor(private router: Router, private loginService: LoginService){
    this.loading = true;

    // this.loginService.login({userName: '', password: '', charterEmp: true} as IUser).subscribe(val => 
    //   {
    //       console.log(val);
    //       this.loginService.setLocalStorage("AuthToken", val.token);

    //       if (val && this.loginService.redirectUrl)
    //           this.router.navigate([this.loginService.redirectUrl])
    //   },error => {
    //     console.log(error);
    //     this.router.navigate(['Login']);
    //   })
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
