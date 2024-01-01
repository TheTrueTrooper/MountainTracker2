import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('ZoneService', () => {
  let service: ZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
