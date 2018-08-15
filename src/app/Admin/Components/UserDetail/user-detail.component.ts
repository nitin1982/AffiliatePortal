import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppUser } from '../../models/user';
import { AppUserService } from '../../services/app-user.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'user-detail',
    templateUrl: './detail.component.html'    
})
export class UserDetailComponent implements OnInit {
    selectedUser: Observable<AppUser>;


    constructor(private route: ActivatedRoute, private router: Router, private appUserService: AppUserService) { }

    ngOnInit(): void { 
        // this.route.params.subscribe(param => {
        //     this.appUserService.getUser(+param['id']).subscribe(user => this.selectedUser = user);
        // });

        
        this.selectedUser = this.route.paramMap.pipe(
             switchMap((params: ParamMap) =>
             this.appUserService.getUser(+params.get('id')))
        );
    }

    NavigateBack(){
        this.router.navigate(['Admin/AppUsers']);
    }
}
