import { TestBed } from '@angular/core/testing';

import { ProvinceOrStateService } from './province-or-state.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('ProvinceOrStateService', () => {
  let service: ProvinceOrStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(ProvinceOrStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
