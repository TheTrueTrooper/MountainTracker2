import { TestBed } from '@angular/core/testing';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo, gql } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Country } from '../../../models';
import { ClientConfig } from '../../../configuration';
import { Observable } from 'rxjs';

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

     public get getMoutainTrackerApi()
     {
      return this.moutainTrackerApi
     }

   public generateQueryTest(query: QlQueryMeta<any>)
   {
    return this.generateQuery(query)
   }

  public generateQueryMetaTest<T extends {
    new (): any;
  }>(classToField: T,query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParams: QlQueryParams[] = [], queryParamPrefix: string | null = null): Observable<QlQueryMeta<T>>
   {
    return this.generateQueryMeta(classToField.prototype.constructor, query, selection, queryParams, queryParamPrefix);
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

  it('should have generate generic query', () => {
    // const query = 'testQuery2'
    // let expected = gql`
    // query
    // {
    //   Test Level 2
    //   {
    //     testQuery2
    //     {
    //       regionCode
    //       englishFullName
    //       countryId
    //     }
    //   }
    // }
    // `
    // let generated = service.generateQueryTest(Country, query)
    // expect(generated).toBe(expected);
  });
});
