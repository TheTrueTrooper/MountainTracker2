import { TestBed } from '@angular/core/testing';

import { BusyRatingService } from './busy-rating.service';

describe('BusyRatingService', () => {
  let service: BusyRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusyRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
