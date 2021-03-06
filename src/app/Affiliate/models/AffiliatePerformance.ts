export interface AffiliatePerformance{
    group: string;
    subGroup: string;
    performanceType: string;
    performance: AffiliateYearlyPerformance
}

export enum YearMonths {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    Sep = 9,
    Oct = 10,
    Nov = 11,
    Dec = 12
}

export interface AffiliateYearlyPerformance{
    name: string;
    performances: Map<YearMonths, number>;
}


