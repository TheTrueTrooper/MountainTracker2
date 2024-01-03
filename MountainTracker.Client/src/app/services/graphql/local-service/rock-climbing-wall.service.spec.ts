import { TestBed } from '@angular/core/testing';

import { RockClimbingWallService } from './rock-climbing-wall.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { RockClimbingWall } from '../../../models';

describe('RockClimbingWallService', () => {
  const api =  'MountainTracker';
  let service: RockClimbingWallService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(RockClimbingWallService);
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
  it('should be able to generate meta query data for allRockClimbingWalls', (done) => {
    const expectedQuery = 'allRockClimbingWalls';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingWall';

    service.getAllRockClimbingWallsMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingWallById', (done) => {
    const expectedQuery = 'rockClimbingWallById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';

    service.getRockClimbingWallByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingWallByCode', (done) => {
    const expectedQuery = 'rockClimbingWallByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'wallCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';

    service.getRockClimbingWallByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingWallsByArea', (done) => {
    const expectedQuery = 'rockClimbingWallsByArea';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'areaId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';

    service.getRockClimbingWallsByAreaMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allRockClimbingWalls', (done) => {
    const expectedQuery = 'allRockClimbingWalls';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingWall';

    const expectedResult = {
      [expectedQuery]: [
        {
          rockClimbingWallId: 1,
          id: 1,
          rockClimbingWallCode: 'AT1',
          englishFullName: 'Testing RockClimbingWall 1',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall,
        {
          rockClimbingWallId: 1,
          id: 2,
          rockClimbingWallCode: 'AT2',
          englishFullName: 'Testing RockClimbingWall 2',
          info: null,
          latitudeStartOrCenter: null,
          longitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall
      ] as RockClimbingWall[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllRockClimbingWallsMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllRockClimbingWalls().subscribe(result=>
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

  it('should be able to issue query data for rockClimbingWallById', (done) => {
    const expectedQuery = 'rockClimbingWallById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          areaId: 1,
          id: expectedId,
          wallCode: 'W1',
          englishFullName: 'Testing RockClimbingWall 1',
          info: null,
          latitudeParking: null,
          latitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingWallByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingWallById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for rockClimbingWallByCode', (done) => {
    const expectedQuery = 'rockClimbingWallByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'wallCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';
    const expectedCode = 'W1';

    const expectedResult = {
      [expectedQuery]:
        {
          areaId: 1,
          id: 1,
          wallCode: expectedCode,
          englishFullName: 'Testing RockClimbingWall 1',
          info: null,
          latitudeParking: null,
          latitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingWallByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingWallByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for rockClimbingWallsByArea', (done) => {
    const expectedQuery = 'rockClimbingWallsByArea';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'areaId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingWall';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          areaId: expectedId,
          id: 1,
          wallCode: 'W1',
          englishFullName: 'Testing RockClimbingWall 1',
          info: null,
          latitudeParking: null,
          latitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall,
        {
          areaId: expectedId,
          id: 1,
          wallCode: 'W2',
          englishFullName: 'Testing RockClimbingWall 1',
          info: null,
          latitudeParking: null,
          latitudeStartOrCenter: null,
          thumbPictureBytes:  null,
          janSeasonalClimbingQualityRatingId: 1,
          febSeasonalClimbingQualityRatingId: 2,
          marSeasonalClimbingQualityRatingId: 3,
          aprSeasonalClimbingQualityRatingId: 4,
          maySeasonalClimbingQualityRatingId: 5,
          junSeasonalClimbingQualityRatingId: 6,
          julSeasonalClimbingQualityRatingId: 7,
          augSeasonalClimbingQualityRatingId: 8,
          sepSeasonalClimbingQualityRatingId: 9,
          octSeasonalClimbingQualityRatingId: 10,
          novSeasonalClimbingQualityRatingId: 11,
          decSeasonalClimbingQualityRatingId: 12,
          janSeasonalBusyRatingId: 1,
          febSeasonalBusyRatingId: 2,
          marSeasonalBusyRatingId: 3,
          aprSeasonalBusyRatingId: 4,
          maySeasonalBusyRatingId: 5,
          junSeasonalBusyRatingId: 6,
          julSeasonalBusyRatingId: 7,
          augSeasonalBusyRatingId: 8,
          sepSeasonalBusyRatingId: 9,
          octSeasonalBusyRatingId: 10,
          novSeasonalBusyRatingId: 11,
          decSeasonalBusyRatingId: 12,
        } as RockClimbingWall
      ] as RockClimbingWall[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingWallsByAreaMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingWallsByArea(expectedId).subscribe(result=>
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

