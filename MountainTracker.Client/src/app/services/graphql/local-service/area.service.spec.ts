import { TestBed } from '@angular/core/testing';

import { AreaService } from './area.service';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  LandingPage: {
    AutoRotateDelay: 2500,
    AutoRotate: true,
    AutoLoad: true
  },
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('AreaService', () => {
  let service: AreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          {provide: ClientConfig, useFactory:clientConfigMockFactory}
      ]
    });
    service = TestBed.inject(AreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
