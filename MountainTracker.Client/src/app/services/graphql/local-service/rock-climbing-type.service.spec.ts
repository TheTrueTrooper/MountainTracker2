import { TestBed } from '@angular/core/testing';

import { RockClimbingTypeService } from './rock-climbing-type.service';

describe('RockClimbingTypeService', () => {
  let service: RockClimbingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockClimbingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
