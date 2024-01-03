import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { QlQueryParams } from '../../../graphql-helpers';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { Country } from '../../../models';

describe('CountryService', () => {
  const api =  'MountainTracker';
  let service: CountryService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(CountryService);
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
  it('should be able to generate meta query data for allCountries', (done) => {
    const expectedQuery = 'allCountries';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Country';

    service.getAllCountriesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for countryById', (done) => {
    const expectedQuery = 'countryById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'Country';

    service.getCountryByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for countryByCode', (done) => {
    const expectedQuery = 'countryByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'countryCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Country';

    service.getCountryByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allCountries', (done) => {
    const expectedQuery = 'allCountries';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Country';

    const expectedResult = {
      [expectedQuery]: [
        {
          id: 1,
          countryCode: 'AT1',
          englishFullName: 'Testing Country 1',
        } as Country,
        {
          id: 2,
          countryCode: 'AT2',
          englishFullName: 'Testing Country 2',
        } as Country
      ] as Country[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllCountriesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllCountries().subscribe(result=>
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

  it('should be able to issue query data for countryById', (done) => {
    const expectedQuery = 'countryById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'Country';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          id: expectedId,
          countryCode: 'AT1',
          englishFullName: 'Testing Country 1',
        } as Country
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getCountryByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getCountryById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for countryByCode', (done) => {
    const expectedQuery = 'countryByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'countryCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Country';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          id: 1,
          countryCode: expectedCode,
          englishFullName: 'Testing Country 1',
        } as Country
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getCountryByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getCountryByCode(expectedCode).subscribe(result=>
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
