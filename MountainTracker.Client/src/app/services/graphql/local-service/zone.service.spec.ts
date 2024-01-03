import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { Zone } from '../../../models';

describe('ZoneService', () => {
  const api =  'MountainTracker';
  let service: ZoneService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(ZoneService);
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
  it('should be able to generate meta query data for allZones', (done) => {
    const expectedQuery = 'allZones';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Zone';

    service.getAllZonesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for zoneById', (done) => {
    const expectedQuery = 'zoneById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Zone';

    service.getZoneByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for zoneByCode', (done) => {
    const expectedQuery = 'zoneByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'zoneCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Zone';

    service.getZoneByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for zonesByDistrict', (done) => {
    const expectedQuery = 'zonesByDistrict';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'districtId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Zone';

    service.getZonesByDistrictMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allZones', (done) => {
    const expectedQuery = 'allZones';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Zone';

    const expectedResult = {
      [expectedQuery]: [
        {
          zoneId: 1,
          id: 1,
          zoneCode: 'AT1',
          englishFullName: 'Testing Zone 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone,
        {
          zoneId: 1,
          id: 2,
          zoneCode: 'AT2',
          englishFullName: 'Testing Zone 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone
      ] as Zone[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllZonesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllZones().subscribe(result=>
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

  it('should be able to issue query data for zoneById', (done) => {
    const expectedQuery = 'zoneById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Zone';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: expectedId,
          zoneCode: 'AT1',
          englishFullName: 'Testing Zone 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getZoneByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getZoneById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for zoneByCode', (done) => {
    const expectedQuery = 'zoneByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'zoneCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Zone';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: 1,
          zoneCode: expectedCode,
          englishFullName: 'Testing Zone 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getZoneByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getZoneByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for zonesByDistrict', (done) => {
    const expectedQuery = 'zonesByDistrict';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'districtId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Zone';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          districtId: expectedId,
          id: 1,
          zoneCode: 'AT1',
          englishFullName: 'Testing Zone 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone,
        {
          districtId: expectedId,
          id: 2,
          zoneCode: 'AT2',
          englishFullName: 'Testing Zone 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Zone
      ] as Zone[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getZonesByDistrictMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getZonesByDistrict(expectedId).subscribe(result=>
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

