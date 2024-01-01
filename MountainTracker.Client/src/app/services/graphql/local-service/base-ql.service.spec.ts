import { TestBed } from '@angular/core/testing';
import { BaseQlService } from './base-ql.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo } from 'apollo-angular';
import { QlField, QlIdField, QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { ClientConfig } from '../../../configuration';
import { Observable } from 'rxjs';

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
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: BaseQlServiceTest, useFactory:()=> new BaseQlServiceTest(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients(['MountainTracker'])]});
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
});
