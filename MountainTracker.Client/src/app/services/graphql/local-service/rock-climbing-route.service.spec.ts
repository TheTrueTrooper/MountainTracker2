import { TestBed } from '@angular/core/testing';

import { RockClimbingRouteService } from './rock-climbing-route.service';

describe('RockClimbingRouteService', () => {
  let service: RockClimbingRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockClimbingRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
