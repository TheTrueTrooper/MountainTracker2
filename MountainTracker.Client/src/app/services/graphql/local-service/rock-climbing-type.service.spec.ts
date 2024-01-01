import { TestBed } from '@angular/core/testing';

import { RockClimbingTypeService } from './rock-climbing-type.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

describe('RockClimbingTypeService', () => {
  let service: RockClimbingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(RockClimbingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
