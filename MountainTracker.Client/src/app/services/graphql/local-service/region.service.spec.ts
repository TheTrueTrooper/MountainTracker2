import { TestBed } from '@angular/core/testing';

import { RegionService } from './region.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { Region } from '../../../models';

describe('RegionService', () => {
  const api =  'MountainTracker';
  let service: RegionService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(RegionService);
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
  it('should be able to generate meta query data for allRegions', (done) => {
    const expectedQuery = 'allRegions';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Region';

    service.getAllRegionsMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for regionById', (done) => {
    const expectedQuery = 'regionById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Region';

    service.getRegionByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for regionByCode', (done) => {
    const expectedQuery = 'regionByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Region';

    service.getRegionByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for regionsByProvinceOrState', (done) => {
    const expectedQuery = 'regionsByProvinceOrState';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'provinceOrStateId',
        qlType: 'Short!'
      }
    ];
    const expectedParamPrefix = 'Region';

    service.getRegionsByProvinceOrStateMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allRegions', (done) => {
    const expectedQuery = 'allRegions';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Region';

    const expectedResult = {
      [expectedQuery]: [
        {
          zoneId: 1,
          id: 1,
          regionCode: 'AT1',
          englishFullName: 'Testing Region 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region,
        {
          zoneId: 1,
          id: 2,
          regionCode: 'AT2',
          englishFullName: 'Testing Region 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region
      ] as Region[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllRegionsMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllRegions().subscribe(result=>
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

  it('should be able to issue query data for regionById', (done) => {
    const expectedQuery = 'regionById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Region';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: expectedId,
          regionCode: 'AT1',
          englishFullName: 'Testing Region 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRegionByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRegionById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for regionByCode', (done) => {
    const expectedQuery = 'regionByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Region';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: 1,
          regionCode: expectedCode,
          englishFullName: 'Testing Region 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRegionByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRegionByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for regionsByProvinceOrState', (done) => {
    const expectedQuery = 'regionsByProvinceOrState';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'provinceOrStateId',
        qlType: 'Short!'
      }
    ];
    const expectedParamPrefix = 'Region';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          regionId: expectedId,
          id: 1,
          regionCode: 'AT1',
          englishFullName: 'Testing Region 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region,
        {
          regionId: expectedId,
          id: 2,
          regionCode: 'AT2',
          englishFullName: 'Testing Region 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Region
      ] as Region[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRegionsByProvinceOrStateMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRegionsByProvinceOrState(expectedId).subscribe(result=>
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

