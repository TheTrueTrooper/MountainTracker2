import { TestBed } from '@angular/core/testing';

import { RegionService } from './region.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('RegionService', () => {
  let service: RegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(RegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
