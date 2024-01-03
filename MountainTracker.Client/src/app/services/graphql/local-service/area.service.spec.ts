import { TestBed } from '@angular/core/testing';

import { AreaService } from './area.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { Area } from '../../../models';

describe('AreaService', () => {
  const api =  'MountainTracker';
  let service: AreaService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(AreaService);
    baseServiceController = TestBed.inject(TestingBaseQlServiceController);
    apolloController = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //allthough, technly tested already this will be good for debugging your tests
  it('should have api too have been created', () => {
    expect(baseServiceController.getMoutainTrackerApi).toBeTruthy();
  });

  //note for testing the fields override is tested in the base class, there for I do not believe that they are need here
  //Also as before the merge is not meant to be used by same object queries. So I will also leave that out of scope here.
  it('should be generate meta query data for allAreas', (done) => {
    const expectedQuery = 'allAreas';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Area';

    service.getAllAreasMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be generate meta query data for areaById', (done) => {
    const expectedQuery = 'areaById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Area';

    service.getAreaByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be generate meta query data for areaByCode', (done) => {
    const expectedQuery = 'areaByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'areaCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Area';

    service.getAreaByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be generate meta query data for areasByZone', (done) => {
    const expectedQuery = 'areasByZone';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'zoneId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Area';

    service.getAreasByZoneMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allAreas', (done) => {
    const expectedQuery = 'allAreas';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'Area';

    const expectedResult = {
      [expectedQuery]: [
        {
          zoneId: 1,
          id: 1,
          areaCode: 'AT1',
          englishFullName: 'Testing Area 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area,
        {
          zoneId: 1,
          id: 2,
          areaCode: 'AT2',
          englishFullName: 'Testing Area 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area
      ] as Area[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllAreasMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllAreas().subscribe(result=>
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

  it('should be able to issue query data for areaById', (done) => {
    const expectedQuery = 'areaById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Area';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: expectedId,
          areaCode: 'AT1',
          englishFullName: 'Testing Area 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAreaByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAreaById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for areaByCode', (done) => {
    const expectedQuery = 'areaByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'areaCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'Area';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          zoneId: 1,
          id: 1,
          areaCode: expectedCode,
          englishFullName: 'Testing Area 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAreaByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAreaByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for areasByZone', (done) => {
    const expectedQuery = 'areasByZone';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'zoneId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'Area';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          zoneId: expectedId,
          id: 1,
          areaCode: 'AT1',
          englishFullName: 'Testing Area 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area,
        {
          zoneId: expectedId,
          id: 2,
          areaCode: 'AT2',
          englishFullName: 'Testing Area 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
        } as Area
      ] as Area[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAreasByZoneMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAreasByZone(expectedId).subscribe(result=>
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
