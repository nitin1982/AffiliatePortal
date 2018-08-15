import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from '../models/user';

@Injectable()
export class AppUserService {

    users: AppUser[] = [];
    
    constructor(){
        let user1 = new AppUser();
        user1.id = 1;
        user1.name = 'John';
        user1.empID = 'E101'
        user1.contactNo = '(215)832-651';
        user1.email = 'john@charter.com';

        let user2 = new AppUser();
        user2.id = 2;
        user2.name = 'Lewis';
        user2.empID = 'C102'
        user2.contactNo = '(215)831-654';
        user2.email = 'lewis@charter.com';

        let user3 = new AppUser();
        user3.id = 3;
        user3.name = 'Mike';
        user3.empID = 'E105'
        user3.contactNo = '(215)985-654';
        user3.email = 'mike@charter.com';

        this.users.push(user1);
        this.users.push(user2);
        this.users.push(user3);
    }

    getAllUsers(): Observable<AppUser[]>{
        return of(this.users);
    }

    getUser(id: number): Observable<AppUser>{
        console.log('method called');
        
        return of(this.users.find(u => u.id == id));
    }


}