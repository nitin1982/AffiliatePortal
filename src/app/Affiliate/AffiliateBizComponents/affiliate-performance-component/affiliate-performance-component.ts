import { Component, OnInit, Input } from '@angular/core';
import { AffiliatePerformance, YearMonths } from '../../models/AffiliatePerformance';

@Component({
    selector: 'affiliate-performance-component',
    templateUrl: './affiliate-performance-component.html',
    
})
export class AffilatePerformanceComponent implements OnInit {
    yearMonths = YearMonths;
    @Input('performanceData') performanceData: AffiliatePerformance;

    constructor() { }

    ngOnInit(): void { }

    
}
