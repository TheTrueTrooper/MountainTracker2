import { TestBed } from '@angular/core/testing';

import { DistrictService } from './district.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { District } from '../../../models';

describe('DistrictService', () => {
  const api =  'MountainTracker';
  let service: DistrictService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(DistrictService);
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
  it('should be able to generate meta query data for allDistricts', (done) => {
    const expectedQuery = 'allDistricts';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'District';

    service.getAllDistrictsMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for districtById', (done) => {
    const expectedQuery = 'districtById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'District';

    service.getDistrictByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for districtByCode', (done) => {
    const expectedQuery = 'districtByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'districtCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'District';

    service.getDistrictByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for districtsByRegion', (done) => {
    const expectedQuery = 'districtsByRegion';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'District';

    service.getDistrictsByRegionMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allDistricts', (done) => {
    const expectedQuery = 'allDistricts';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'District';

    const expectedResult = {
      [expectedQuery]: [
        {
          zoneId: 1,
          id: 1,
          districtCode: 'AT1',
          englishFullName: 'Testing District 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District,
        {
          zoneId: 1,
          id: 2,
          districtCode: 'AT2',
          englishFullName: 'Testing District 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District
      ] as District[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllDistrictsMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllDistricts().subscribe(result=>
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

  it('should be able to issue query data for districtById', (done) => {
    const expectedQuery = 'districtById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'District';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: expectedId,
          districtCode: 'AT1',
          englishFullName: 'Testing District 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getDistrictByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getDistrictById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for districtByCode', (done) => {
    const expectedQuery = 'districtByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'districtCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'District';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: 1,
          districtCode: expectedCode,
          englishFullName: 'Testing District 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getDistrictByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getDistrictByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for districtsByRegion', (done) => {
    const expectedQuery = 'districtsByRegion';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'regionId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'District';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          regionId: expectedId,
          id: 1,
          districtCode: 'AT1',
          englishFullName: 'Testing District 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District,
        {
          regionId: expectedId,
          id: 2,
          districtCode: 'AT2',
          englishFullName: 'Testing District 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as District
      ] as District[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getDistrictsByRegionMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getDistrictsByRegion(expectedId).subscribe(result=>
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
