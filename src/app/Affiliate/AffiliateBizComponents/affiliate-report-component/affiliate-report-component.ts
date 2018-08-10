import { Component, OnInit } from '@angular/core';
import { AffiliateBizService } from '../../services/affiliate-biz.service';

@Component({
    selector: 'affiliate-report',
    templateUrl: './report.component.html',
    
})
export class AffiliateReportComponent implements OnInit {
    constructor(private bizService: AffiliateBizService) { }

    ngOnInit(): void { 
        this.bizService.getPerformancesAPIData().subscribe(data => console.log(data), error => console.log(error));
    }
}
