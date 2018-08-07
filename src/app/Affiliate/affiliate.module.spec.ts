import { AffiliateModule } from './affiliate.module';

describe('AffiliateModule', () => {
  let affiliateModule: AffiliateModule;

  beforeEach(() => {
    affiliateModule = new AffiliateModule();
  });

  it('should create an instance', () => {
    expect(affiliateModule).toBeTruthy();
  });
});
