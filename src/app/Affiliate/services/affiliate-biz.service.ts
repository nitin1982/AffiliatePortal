import { Injectable } from '@angular/core';
import { AffiliatePerformance, YearMonths  } from '../models/AffiliatePerformance';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../Security/services/login.service';

 

@Injectable()
export class AffiliateBizService {
    affiliatePerformanceData: AffiliatePerformance[];
    httpOptions = {
        headers: new HttpHeaders({      
          'Authorization': `Bearer ${this.loginService.getLocalStorage("AuthToken")}`
        })
      };
    
    constructor(private http: HttpClient, private loginService: LoginService ){
        
    }

    getAffiliateBizData(): Observable<AffiliatePerformance[]> {
        this.affiliatePerformanceData = [];
        let performancesIcTotal = new Map<YearMonths, number>();
       
        performancesIcTotal.set(YearMonths.January, 101);
        performancesIcTotal.set(YearMonths.February, 102);
        performancesIcTotal.set(YearMonths.March, 103);
        performancesIcTotal.set(YearMonths.April, 104);
        performancesIcTotal.set(YearMonths.May, 105);
        performancesIcTotal.set(YearMonths.June, 106);
        performancesIcTotal.set(YearMonths.July, 107);
        performancesIcTotal.set(YearMonths.August, 108);
        performancesIcTotal.set(YearMonths.Sep, 109);
        performancesIcTotal.set(YearMonths.Oct, 110);
        performancesIcTotal.set(YearMonths.Nov, 111);
        performancesIcTotal.set(YearMonths.Dec, 112);

        let affiliatePerformanceIcTotal: AffiliatePerformance;
        affiliatePerformanceIcTotal = {
            group: 'Interconnect',
            subGroup: 'Total',
            performanceType: 'Partner Revenue',
            performance: {
                name: 'Budgeted Partner Revenue',
                performances: performancesIcTotal
            }
        };


        let performancesIcZone = new Map<YearMonths, number>();
       
        performancesIcZone.set(YearMonths.January, 113);
        performancesIcZone.set(YearMonths.February, 114);
        performancesIcZone.set(YearMonths.March, 103);
        performancesIcZone.set(YearMonths.April, 104);
        performancesIcZone.set(YearMonths.May, 105);
        performancesIcZone.set(YearMonths.June, 116);
        performancesIcZone.set(YearMonths.July, 107);
        performancesIcZone.set(YearMonths.August, 108);
        performancesIcZone.set(YearMonths.Sep, 109);
        performancesIcZone.set(YearMonths.Oct, 110);
        performancesIcZone.set(YearMonths.Nov, 158);
        performancesIcZone.set(YearMonths.Dec, 112);

        let affiliatePerformanceIcZone: AffiliatePerformance;
        affiliatePerformanceIcZone = {
            group: 'Interconnect',
            subGroup: 'Zone',
            performanceType: 'Partner Revenue',
            performance: {
                name: 'Budgeted Partner Revenue',
                performances: performancesIcZone
            }
        };


        this.affiliatePerformanceData.push(affiliatePerformanceIcTotal)
        this.affiliatePerformanceData.push(affiliatePerformanceIcZone)
        return of(this.affiliatePerformanceData).pipe(delay(1000));
    }

    getPerformancesAPIData(): Observable<any>{
        return this.http.get<any>('http://localhost:61985/api/Performances', this.httpOptions);
    }
}