import { TestBed } from '@angular/core/testing';

import { RockClimbingRouteService } from './rock-climbing-route.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('RockClimbingRouteService', () => {
  let service: RockClimbingRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(RockClimbingRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
