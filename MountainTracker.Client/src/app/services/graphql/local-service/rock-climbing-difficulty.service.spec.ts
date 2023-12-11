import { TestBed } from '@angular/core/testing';

import { RockClimbingDifficultyService } from './rock-climbing-difficulty.service';

describe('RockClimbingDifficultyService', () => {
  let service: RockClimbingDifficultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockClimbingDifficultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
