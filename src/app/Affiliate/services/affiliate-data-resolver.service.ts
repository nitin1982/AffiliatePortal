import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IAffiliatePerformance } from '../models/AffiliatePerformance';
import { AffiliateBizService } from './affiliate-biz.service';

@Injectable()


export class AffiliateDataResolverGuard implements Resolve<IAffiliatePerformance[]> {
    
    constructor(private affiliateService: AffiliateBizService) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IAffiliatePerformance[]> {        
        return this.affiliateService.getAffiliateBizData();
    }
}
