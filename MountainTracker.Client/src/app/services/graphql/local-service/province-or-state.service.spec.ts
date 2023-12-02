import { TestBed } from '@angular/core/testing';

import { ProvinceOrStateService } from './province-or-state.service';

describe('ProvinceOrStateService', () => {
  let service: ProvinceOrStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinceOrStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
