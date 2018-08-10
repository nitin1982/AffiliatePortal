import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryLoginDataService implements InMemoryDbService {
    createDb(){
        const users = [
            {
                id: 1,
                name: 'Nitin'
            },
            {
                id: 2,
                name: 'Amit'
            }
        ];

        return {users};
    }
}