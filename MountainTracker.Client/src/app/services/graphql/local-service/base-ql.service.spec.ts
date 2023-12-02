import { TestBed } from '@angular/core/testing';
import { BaseQlService } from './base-ql.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo, gql } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Country } from '../../../models';
import { ClientConfig } from '../../../configuration';

const clientConfigMockFactory = ()=>({
  LandingPage: {
    AutoRotateDelay: 2500,
    AutoRotate: true,
    AutoLoad: true
  },
  BaseEndpoint: "",
  GraphQlApiEndpoint: "https://localhost:44300/api/graphql",
} as ClientConfig)

class BaseQlServiceTest extends BaseQlService {
    constructor(protected override apolloProvider: Apollo) {
      super(apolloProvider)
     }

     protected override queryObj: string = "testQuery";

     public get getMoutainTrackerApi()
     {
      return this.moutainTrackerApi
     }
     public get getQueryObj()
     {
      return this.queryObj
     }

     public generateQueryTest<
   T extends {
     new (): any;
   }
   >(classToGet: T, query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryVar: string = "", queryParam: string = "")
   {
    return this.generateQuery(classToGet.prototype.constructor, query, selection, queryVar, queryParam)
   }
}

describe('BaseQlService', () => {
  let service: BaseQlServiceTest;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory}],
      imports: [ApolloTestingModule]});
    service = TestBed.inject(BaseQlServiceTest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have api too have been created', () => {
    expect(service.getMoutainTrackerApi).toBeTruthy();
  });

  it('should have queryObj set as per override', () => {
    expect(service.getQueryObj).toBe("testQuery");
  });

  it('should have generate generic query', () => {
    const query = 'testQuery2'
    let expected = gql`
    query
    {
      testQuery
      {
        Test Level 2
        {
          testQuery2
          {
            regionCode
            englishFullName
            countryId
          }
        }
      }
    }
    `
    let generated = service.generateQueryTest(Country, query)
    expect(generated).toBe(expected);
  });
});
