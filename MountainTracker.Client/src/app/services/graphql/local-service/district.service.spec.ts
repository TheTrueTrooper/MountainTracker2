import { TestBed } from '@angular/core/testing';

import { DistrictService } from './district.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('DistrictService', () => {
  let service: DistrictService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(DistrictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
