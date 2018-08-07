import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { IUser } from '../model/user';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'affiliate-app-login',
    templateUrl: './login.component.html'    
})

export class LoginComponent implements OnInit {
    @ViewChild('frmLogin') frm : any;
    user: IUser;

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit(): void { 
        this.user = {userName: '', pasword: ''};
    }

    Submit(){
        console.log(this.frm.value);
        this.loginService.login(this.frm.value).subscribe(val => 
            {
                if (this.loginService.redirectUrl)
                    this.router.navigate([this.loginService.redirectUrl])
            }
        );        
        this.frm.reset();

    }

    Clear(){
        this.frm.reset();
    }
}
