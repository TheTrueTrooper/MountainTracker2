import { TestBed } from '@angular/core/testing';

import { RockClimbingWallService } from './rock-climbing-wall.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('RockClimbingWallService', () => {
  let service: RockClimbingWallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(RockClimbingWallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
