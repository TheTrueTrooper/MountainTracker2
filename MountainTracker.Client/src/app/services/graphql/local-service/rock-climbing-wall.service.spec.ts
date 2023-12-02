import { TestBed } from '@angular/core/testing';

import { RockClimbingWallService } from './rock-climbing-wall.service';

describe('RockClimbingWallService', () => {
  let service: RockClimbingWallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockClimbingWallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
