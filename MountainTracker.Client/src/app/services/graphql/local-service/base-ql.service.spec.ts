import { TestBed } from '@angular/core/testing';
import { BaseQlService } from './base-ql.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo } from 'apollo-angular';
import { QlField, QlIdField, QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
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

export class MockClass
{
    @QlIdField()
    @QlField()
    public id?:number
    @QlField()
    public field1?:string
    @QlField()
    public field2?:string
}

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

  it('should have generate generic query meta data on generateQueryMetaTest call', (done) => {
    const query = 'testQuery'
    const expectedFields = 'id\nfield1\nfield2'
    const expectedPrefix = 'MockClass'

    let generated = service.generateQueryMetaTest(MockClass, query)
    
    generated.subscribe(result=>{
      expect(result.query).toBe(query);
      expect(result.selection).toBe(expectedFields);
      expect(result.queryParamPrefix).toBe(expectedPrefix);
      expect(result.queryParams).toBe([]);
      done();
    });
    
  });
});
