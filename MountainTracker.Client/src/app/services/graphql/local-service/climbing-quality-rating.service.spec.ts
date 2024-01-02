import { TestBed } from '@angular/core/testing';

import { ClimbingQualityRatingService } from './climbing-quality-rating.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('ClimbingQualityRatingService', () => {
  let service: ClimbingQualityRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(ClimbingQualityRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
