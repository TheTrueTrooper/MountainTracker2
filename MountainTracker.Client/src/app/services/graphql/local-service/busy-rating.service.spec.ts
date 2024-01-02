import { TestBed } from '@angular/core/testing';

import { BusyRatingService } from './busy-rating.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('BusyRatingService', () => {
  let service: BusyRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(BusyRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
