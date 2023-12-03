import { TestBed } from '@angular/core/testing';

import { ClimbingQualityRatingService } from './climbing-quality-rating.service';

describe('ClimbingQualityRatingService', () => {
  let service: ClimbingQualityRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbingQualityRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
