import { Component, OnInit, Input } from '@angular/core';
import { IAffiliatePerformance, YearMonths } from '../../model/AffiliatePerformance';

@Component({
    selector: 'affiliate-performance-component',
    templateUrl: './affiliate-performance-component.html',
    
})
export class AffilatePerformanceComponent implements OnInit {
    yearMonths = YearMonths;
    @Input('performanceData') performanceData: IAffiliatePerformance;

    constructor() { }

    ngOnInit(): void { }

    
}
