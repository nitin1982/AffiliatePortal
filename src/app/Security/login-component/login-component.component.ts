import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'affiliate-app-login',
    templateUrl: './login.component.html'    
})

export class LoginComponent implements OnInit {
    @ViewChild('frmLogin') frm : any;
    user: IUser;
    noServerAPI: boolean;

    constructor(private loginService: LoginService, private router: Router) { 
    }

    ngOnInit(): void { 
        this.user = {userName: '', password: '', charterEmp: false};        
    }

    Submit(){
        if(this.noServerAPI){
            this.loginService.mockedLoginMethod().subscribe(val => {
                if (val && this.loginService.redirectUrl)
                    this.router.navigate([this.loginService.redirectUrl])
            });
        }
        else{
            let user: IUser;
            if(this.frm.value.charterEmp)
                user = {userName: '', password: '', charterEmp: true};
            else
                user = this.frm.value as IUser;        
                //console.log(user);

            this.loginService.login(user).subscribe(val => 
            {
                console.log(val);
                this.loginService.setLocalStorage("AuthToken", val.token);

                if (val && this.loginService.redirectUrl)
                    this.router.navigate([this.loginService.redirectUrl])
            }
            );
        }
                
        this.frm.reset();

    }

    Clear(){
        this.frm.reset();
    }
}
