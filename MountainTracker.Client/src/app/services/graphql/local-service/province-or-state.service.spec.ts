import { TestBed } from '@angular/core/testing';

import { ProvinceOrStateService } from './province-or-state.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { ProvinceOrState } from '../../../models';

describe('ProvinceOrStateService', () => {
  const api =  'MountainTracker';
  let service: ProvinceOrStateService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(ProvinceOrStateService);
    baseServiceController = TestBed.inject(TestingBaseQlServiceController);
    apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //allthough, technly tested already this will be good for debugging your tests
  it('should have api too also have been created', () => {
    expect(baseServiceController.getMoutainTrackerApi).toBeTruthy();
  });

  //note for testing the fields override is tested in the base class, there for I do not believe that they are need here
  //Also as before the merge is not meant to be used by same object queries. So I will also leave that out of scope here.
  it('should be able to generate meta query data for allProvincesOrStates', (done) => {
    const expectedQuery = 'allProvincesOrStates';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'ProvinceOrState';

    service.getAllProvincesOrStatesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for provinceOrStateById', (done) => {
    const expectedQuery = 'provinceOrStateById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Short!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';

    service.getProvinceOrStateByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for provinceOrStateByCode', (done) => {
    const expectedQuery = 'provinceOrStateByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';

    service.getProvinceOrStateByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for provincesOrStatesByCountry', (done) => {
    const expectedQuery = 'provincesOrStatesByCountry';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'countryId',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';

    service.getProvincesOrStatesByCountryMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allProvincesOrStates', (done) => {
    const expectedQuery = 'allProvincesOrStates';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'ProvinceOrState';

    const expectedResult = {
      [expectedQuery]: [
        {
          country: 1,
          id: 1,
          provinceOrStateCode: 'AT1',
          englishFullName: 'Testing ProvinceOrState 1',
        } as ProvinceOrState,
        {
          country: 1,
          id: 2,
          provinceOrStateCode: 'AT2',
          englishFullName: 'Testing ProvinceOrState 2',
        } as ProvinceOrState
      ] as ProvinceOrState[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllProvincesOrStatesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllProvincesOrStates().subscribe(result=>
          {
            expect(result).toEqual(expectedResult[expectedQuery])
            expect(op.operation.clientName).toEqual(api);
            done();
          });

        const op = apolloController.expectOne(generatedQuery);
        op.flushData(
            expectedResult 
          );
      });
  });

  it('should be able to issue query data for provinceOrStateById', (done) => {
    const expectedQuery = 'provinceOrStateById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Short!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          countryId: 1,
          id: expectedId,
          regionCode: 'AT1',
          englishFullName: 'Testing ProvinceOrState 1',
        } as ProvinceOrState
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getProvinceOrStateByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getProvinceOrStateById(expectedId).subscribe(result=>
          {
            expect(result).toEqual(expectedResult[expectedQuery])
            expect(op.operation.clientName).toEqual(api);
            done();
          });

        const op = apolloController.expectOne(generatedQuery);
        op.flushData(
            expectedResult 
          );
      });
  });

  it('should be able to issue query data for provinceOrStateByCode', (done) => {
    const expectedQuery = 'provinceOrStateByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          countryId: 1,
          id: 1,
          regionCode: expectedCode,
          englishFullName: 'Testing ProvinceOrState 1',
        } as ProvinceOrState
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getProvinceOrStateByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getProvinceOrStateByCode(expectedCode).subscribe(result=>
          {
            expect(result).toEqual(expectedResult[expectedQuery])
            expect(op.operation.clientName).toEqual(api);
            done();
          });

        const op = apolloController.expectOne(generatedQuery);
        op.flushData(
            expectedResult 
          );
      });
  });

  it('should be able to issue query data for provincesOrStatesByCountry', (done) => {
    const expectedQuery = 'provincesOrStatesByCountry';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'countryId',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'ProvinceOrState';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          countryId: expectedId,
          id: 1,
          regionCode: 'AT1',
          englishFullName: 'Testing ProvinceOrState 1',
        } as ProvinceOrState,
        {
          countryId: expectedId,
          id: 2,
          regionCode: 'AT2',
          englishFullName: 'Testing ProvinceOrState 2',
        } as ProvinceOrState
      ] as ProvinceOrState[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getProvincesOrStatesByCountryMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getProvincesOrStatesByCountry(expectedId).subscribe(result=>
          {
            expect(result).toEqual(expectedResult[expectedQuery])
            expect(op.operation.clientName).toEqual(api);
            done();
          });

        const op = apolloController.expectOne(generatedQuery);
        op.flushData(
            expectedResult 
          );
      });
  });
});
