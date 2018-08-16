import { Pipe, PipeTransform } from '@angular/core';
import { AppUser } from '../models/user';

@Pipe({name: 'filter'})

export class AppUserFilterPipe implements PipeTransform {
    
    transform(value: AppUser[], filterBy: string): AppUser[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(u => (u.name.toLocaleLowerCase().indexOf(filterBy) !== -1) || 
                (u.email.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
                (u.contactNo.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
                (u.empID.toLocaleLowerCase().indexOf(filterBy) !== -1)) : value;
    }
}