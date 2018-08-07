import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Security/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void { }

    Logout(){
        this.loginService.logOut();
        this.router.navigateByUrl('Home');
    }
}
