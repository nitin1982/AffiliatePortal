import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUser } from '../models/user';

@Injectable()
export class AppUserService {

    users: AppUser[] = [];

    constructor() {
        let user1: AppUser = {
            id: 1,
            name: 'John',
            empID: 'E101',
            contactNo: '(215)832-651',
            email: 'john@charter.com',
        };

        let user2: AppUser = {
            id: 2,
            name: 'Lewis',
            empID: 'C102',
            contactNo: '(215)831-654',
            email: 'lewis@charter.com'
        }


        let user3: AppUser = {
            id: 3,
            name: 'Mike',
            empID: 'E105',
            contactNo: '(215)985-654',
            email: 'mike@charter.com',
        }

        this.users.push(user1);
        this.users.push(user2);
        this.users.push(user3);
    }

    getAllUsers(): Observable<AppUser[]> {
        return of(this.users);
    }

    getUser(id: number): Observable<AppUser> {
        return of(this.users.find(u => u.id == id));
    }
}