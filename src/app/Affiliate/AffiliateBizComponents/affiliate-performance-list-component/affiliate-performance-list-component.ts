import { Component, OnInit } from '@angular/core';
import { AffiliatePerformance } from '../../models/AffiliatePerformance';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'affiliate-performance-list-component',
    templateUrl: './affiliate-performance-list-component.html',
    
})
export class AffilatePerformanceListComponent implements OnInit {
    
    affiliatePerformanceData: AffiliatePerformance[];
    
    constructor(private route: ActivatedRoute) { 
        this.affiliatePerformanceData = [];
    }

    ngOnInit(): void {         
        this.route.data.subscribe(data => this.affiliatePerformanceData = data['affBizData']);
    }
}
