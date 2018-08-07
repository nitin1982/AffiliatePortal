import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AffiliateBizService } from './service/affiliate-biz.service';
import { AffiliateLandingPageComponent } from './AffiliateBizComponents/affiliate-landing-page-component/affiliate-landingPage.component';
import { AffilatePerformanceListComponent } from './AffiliateBizComponents/affiliate-performance-list-component/affiliate-performance-list-component';
import { AffilatePerformanceComponent } from './AffiliateBizComponents/affiliate-performance-component/affiliate-performance-component';
import { AffiliateReportComponent } from './AffiliateBizComponents/affiliate-report-component/affiliate-report-component';
import { AuthGuard } from '../Security/auth-guard.service';
import { AffiliateDataResolverGuard } from './service/affiliate-data-resolver.service';
const affiliateRoutes: Routes = [
  {
    path: 'Affiliate',
    component: AffiliateLandingPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Performance',
        component: AffilatePerformanceListComponent,
        resolve: { affBizData: AffiliateDataResolverGuard }
      },
      {
        path: 'Report',
        component: AffiliateReportComponent
      }
    ]
  }
]
@NgModule({ 
  imports: [
    CommonModule, RouterModule.forChild(affiliateRoutes)
  ],
  declarations: [
    AffilatePerformanceComponent,
    AffilatePerformanceListComponent,
    AffiliateLandingPageComponent,
    AffiliateReportComponent
  ],
  exports: [RouterModule],
  providers: [AffiliateBizService, AffiliateDataResolverGuard]
})

export class AffiliateModule { }
