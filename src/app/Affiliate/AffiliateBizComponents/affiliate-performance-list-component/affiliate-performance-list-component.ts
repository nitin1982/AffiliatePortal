import { Component, OnInit } from '@angular/core';
import { IAffiliatePerformance } from '../../model/AffiliatePerformance';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'affiliate-performance-list-component',
    templateUrl: './affiliate-performance-list-component.html',
    
})
export class AffilatePerformanceListComponent implements OnInit {
    
    affiliatePerformanceData: IAffiliatePerformance[];
    
    constructor(private route: ActivatedRoute) { 
        this.affiliatePerformanceData = [];
    }

    ngOnInit(): void {         
        this.route.data.subscribe(data => this.affiliatePerformanceData = data['affBizData']);
    }
}
