import { TestBed } from '@angular/core/testing';

import { RockClimbingDifficultyService } from './rock-climbing-difficulty.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingModule } from 'apollo-angular/testing';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('RockClimbingDifficultyService', () => {
  let service: RockClimbingDifficultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(RockClimbingDifficultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
