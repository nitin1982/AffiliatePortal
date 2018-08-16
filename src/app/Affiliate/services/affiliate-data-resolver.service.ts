import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AffiliatePerformance } from '../models/AffiliatePerformance';
import { AffiliateBizService } from './affiliate-biz.service';

@Injectable()


export class AffiliateDataResolverGuard implements Resolve<AffiliatePerformance[]> {
    
    constructor(private affiliateService: AffiliateBizService) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<AffiliatePerformance[]> {        
        return this.affiliateService.getAffiliateBizData();
    }
}
