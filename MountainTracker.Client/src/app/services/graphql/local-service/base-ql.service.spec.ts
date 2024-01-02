import { TestBed } from '@angular/core/testing';
import { BaseQlService } from './base-ql.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { QlField, QlIdField, QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { ClientConfig } from '../../../configuration';
import { Observable, forkJoin } from 'rxjs';

const clientConfigMockFactory = ()=>({
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

export class MockClass2
{
    @QlIdField()
    @QlField()
    public id?:number
    @QlField()
    public field1?:string
}

class BaseQlServiceTest extends BaseQlService {
  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
  }

  public get getMoutainTrackerApi()
  {
    return this.moutainTrackerApi
  }

  public generateQueryStringTest(query: QlQueryMeta<any>)
  {
    return this.generateQueryString(query)
  }

  public generateMergedQueryStringTest(query: QlQueryMeta<any>[])
  {
    return this.generateMergedQueryString(query)
  }

  public generateMergedQueryTest(queries: QlQueryMeta<any>[]): TypedDocumentNode<any, any>
  {
    return this.generateMergedQuery(queries);
  }

  public generateQueryMetaTest<T extends {
    new (): any;
  }>(classToField: T,query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParams: QlQueryParams[] = [], queryParamPrefix: string | null = null): Observable<QlQueryMeta<T>>
   {
    return this.generateQueryMeta(classToField.prototype.constructor, query, selection, queryParams, queryParamPrefix);
  }

}

describe('BaseQlService', () => {
  const api =  'MountainTracker';
  let service: BaseQlServiceTest;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: BaseQlServiceTest, useFactory:()=> new BaseQlServiceTest(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(BaseQlServiceTest);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have api too have been created', () => {
    expect(service.getMoutainTrackerApi).toBeTruthy();
  });

  it('should have generate generic query meta data on generateQueryMeta call', (done) => {
    const query = 'testQuery';
    const expectedParams: QlQueryParams[] = [];
    const expectedPrefix = 'MockClass';
    const expectedFields = `${query}\n{\nid\nfield1\nfield2\n}`;

    let generated = service.generateQueryMetaTest(MockClass, query)

    generated.subscribe(result=>{
      expect(result.query).toBe(query);
      expect(result.selection).toBe(expectedFields);
      expect(result.queryParamPrefix).toBe(expectedPrefix);
      expect(result.queryParams).toEqual(expectedParams);
      done();
    });
  });

  it('should have generate generic query string data on generateQueryString call', (done) => {
    const query = 'testQuery';
    const expectedQueryString = `query\n{\n${query}\n{\nid\nfield1\nfield2\n}\n}`;

    let generated = service.generateQueryMetaTest(MockClass, query)

    generated.subscribe(result=>{
      let query = service.generateQueryStringTest(result);
      expect(query).toBe(expectedQueryString);
      done();
    });
  });

  it('should have generate generic query meta data on generateQueryMeta call with params', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const expectedPrefix = 'MockClass';
    const expectedFields = `${query}(${Params[0].param}: $${expectedPrefix}_${Params[0].param})\n{\nid\nfield1\nfield2\n}`;
    

    let generated = service.generateQueryMetaTest(MockClass, query, undefined, Params)

    generated.subscribe(result=>{
      expect(result.query).toBe(query);
      expect(result.selection).toBe(expectedFields);
      expect(result.queryParamPrefix).toBe(expectedPrefix);
      expect(result.queryParams).toEqual(Params);
      done();
    });
  });

  it('should have generate generic query string data on generateQueryString call with params', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const expectedPrefix = 'MockClass';
    const expectedQueryString = `query($${expectedPrefix}_${Params[0].param}: ${Params[0].qlType})\n{\n${query}(${Params[0].param}: $${expectedPrefix}_${Params[0].param})\n{\nid\nfield1\nfield2\n}\n}`;
    let generated = service.generateQueryMetaTest(MockClass, query, undefined, Params)

    generated.subscribe(result=>{
      let query = service.generateQueryStringTest(result);
      expect(query).toBe(expectedQueryString);
      done();
    });
  });

  it('should have generate generic query meta data on generateQueryMeta call with Prefix override', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const Prefix = 'Override';
    const expectedFields = `${query}(${Params[0].param}: $${Prefix}_${Params[0].param})\n{\nid\nfield1\nfield2\n}`;
    

    let generated = service.generateQueryMetaTest(MockClass, query, undefined, Params, Prefix)

    generated.subscribe(result=>{
      expect(result.query).toBe(query);
      expect(result.selection).toBe(expectedFields);
      expect(result.queryParamPrefix).toBe(Prefix);
      expect(result.queryParams).toEqual(Params);
      done();
    });
  });

  it('should have generate generic query string data on generateQueryString call with Prefix override', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const Prefix = 'Override';
    const expectedQueryString = `query($${Prefix}_${Params[0].param}: ${Params[0].qlType})\n{\n${query}(${Params[0].param}: $${Prefix}_${Params[0].param})\n{\nid\nfield1\nfield2\n}\n}`;
    let generated = service.generateQueryMetaTest(MockClass, query, undefined, Params, Prefix)

    generated.subscribe(result=>{
      let query = service.generateQueryStringTest(result);
      expect(query).toBe(expectedQueryString);
      done();
    });
  });

  it('should have generate generic query meta data on generateQueryMeta call with field select override ', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const fieldSelect = {
      fields: ['id', 'field1']
    } as QlSelectionSetTyped<undefined, MockClass>
    const expectedPrefix = 'MockClass';
    const expectedFields = `${query}(${Params[0].param}: $${expectedPrefix}_${Params[0].param})\n{\nid\nfield1\n}`;
    

    let generated = service.generateQueryMetaTest(MockClass, query, fieldSelect, Params)

    generated.subscribe(result=>{
      expect(result.query).toBe(query);
      expect(result.selection).toBe(expectedFields);
      expect(result.queryParamPrefix).toBe(expectedPrefix);
      expect(result.queryParams).toEqual(Params);
      done();
    });
  });

  it('should have generate generic query string data on generateQueryString call with field select override ', (done) => {
    const query = 'testQuery';
    const Params: QlQueryParams[] = [{
      param: "test",
      qlType: "Int!"
    }];
    const fieldSelect = {
      fields: ['id', 'field1']
    } as QlSelectionSetTyped<undefined, MockClass>
    const expectedPrefix = 'MockClass';
    const expectedQueryString = `query($${expectedPrefix}_${Params[0].param}: ${Params[0].qlType})\n{\n${query}(${Params[0].param}: $${expectedPrefix}_${Params[0].param})\n{\nid\nfield1\n}\n}`;
    

    let generated = service.generateQueryMetaTest(MockClass, query, fieldSelect, Params)

    generated.subscribe(result=>{
      let query = service.generateQueryStringTest(result);
      expect(query).toBe(expectedQueryString);
      done();
    });
  });

  //this is one know issue that I'm leaving alone for now where id the QlQueryParams and classes/prefixes are the same it probably will not work with the merge adding the variable to the query entity twice. For now I'm its out of scope as I have intention to avoid this and thus will consider it to be out of scope.
  it('should have generate generic merged query string data on generateQueryString call', (done) => {
    const query1 = 'testQuery';
    const query2 = 'testQuery2';
    const Params1: QlQueryParams[] = [{
      param: "id",
      qlType: "Int!"
    }];
    const Params2: QlQueryParams[] = [{
      param: "id",
      qlType: "Int!"
    }];
    const expectedPrefix1 = 'MockClass';
    const expectedPrefix2 = 'MockClass2';
    const expectedQueryString = `query($${expectedPrefix1}_${Params1[0].param}: ${Params1[0].qlType},$${expectedPrefix2}_${Params2[0].param}: ${Params2[0].qlType})\n{\n${query1}(${Params1[0].param}: $${expectedPrefix1}_${Params1[0].param})\n{\nid\nfield1\nfield2\n}\n${query2}(${Params2[0].param}: $${expectedPrefix2}_${Params2[0].param})\n{\nid\nfield1\n}\n}`;
    

    let generated = forkJoin(
      service.generateQueryMetaTest(MockClass, query1, undefined, Params1),
      service.generateQueryMetaTest(MockClass2, query2, undefined, Params2)
    )

    generated.subscribe(result=>{
      let query = service.generateMergedQueryStringTest(result);
      expect(query).toBe(expectedQueryString);
      done();
    });
  });

  //see above tests comment for know issues considered out of scope for now.
  it('should have generate anf issue generic merged query string data on generateQueryString call', (done) => {
    const expectedResult = {
      testQuery:{
        id: 1,
        field1: "test field 1",
        field2: "test field 2"
      },
      testQuery2: {
        id: 2,
        field1: "test field 1",
      }
    };
    const query1: string = 'testQuery';
    const query2: string = 'testQuery2';
    const Params1: QlQueryParams[] = [{
      param: "id",
      qlType: "Int!"
    }];
    const Params2: QlQueryParams[] = [{
      param: "id",
      qlType: "Int!"
    }];

    let generated = forkJoin({
      [query1]: service.generateQueryMetaTest(MockClass, query1, undefined, Params1),
      [query2]: service.generateQueryMetaTest(MockClass2, query2, undefined, Params2)
    })

    generated.subscribe(generatedResult=>{
      const variables = {
        [generatedResult[query1].getParamSelector(generatedResult[query1].queryParams[0].param)]: 1,
        [generatedResult[query1].getParamSelector(generatedResult[query1].queryParams[0].param)]: 2
      }
      const query = service.generateMergedQueryTest(Object.keys(generatedResult).map(x=>generatedResult[x]));
      const qlIssuedQuery = service.getMergedQuery(generatedResult, variables);
      

      qlIssuedQuery.subscribe(queriedResult => {
        expect(Object.keys(queriedResult.queries).length).toEqual(2);
        expect(queriedResult.queries[query1]).toEqual(generatedResult[query1]);
        expect(queriedResult.queries[query2]).toEqual(generatedResult[query2]);
        expect(queriedResult.result.data).toEqual(expectedResult);
        done();
      });

      const op = controller.expectOne(query);
      expect(op.operation.clientName).toEqual(api);

      op.flushData(
        expectedResult 
      )

    });
  });
});
