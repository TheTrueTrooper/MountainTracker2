import { TestBed } from '@angular/core/testing';

import { RockClimbingRouteService } from './rock-climbing-route.service';
import { ClientConfig } from '../../../configuration';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { QlQueryParams } from '../../../graphql-helpers';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { RockClimbingRoute } from '../../../models';

describe('RockClimbingRouteService', () => {
  const api =  'MountainTracker';
  let service: RockClimbingRouteService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(RockClimbingRouteService);
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
  it('should be able to generate meta query data for allRockClimbingRoutes', (done) => {
    const expectedQuery = 'allRockClimbingRoutes';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingRoute';

    service.getAllRockClimbingRoutesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingRouteById', (done) => {
    const expectedQuery = 'rockClimbingRouteById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';

    service.getRockClimbingRouteByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingRouteByCode', (done) => {
    const expectedQuery = 'rockClimbingRouteByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'routeCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';

    service.getRockClimbingRouteByCodeMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingRoutesByRockClimbingWall', (done) => {
    const expectedQuery = 'rockClimbingRoutesByRockClimbingWall';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'climbingWallId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';

    service.getRockClimbingRoutesByRockClimbingWallMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allRockClimbingRoutes', (done) => {
    const expectedQuery = 'allRockClimbingRoutes';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingRoute';

    const expectedResult = {
      [expectedQuery]: [
        {
          climbingWallId: 1,
          id: 1,
          routeCode: 'AT1',
          englishFullName: 'Testing RockClimbingRoute 1',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute,
        {
          climbingWallId: 1,
          id: 2,
          routeCode: 'AT2',
          englishFullName: 'Testing RockClimbingRoute 2',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute
      ] as RockClimbingRoute[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllRockClimbingRoutesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllRockClimbingRoutes().subscribe(result=>
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

  it('should be able to issue query data for rockClimbingRouteById', (done) => {
    const expectedQuery = 'rockClimbingRouteById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          climbingWallId: 1,
          id: expectedId,
          routeCode: 'AT1',
          englishFullName: 'Testing RockClimbingRoute 1',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingRouteByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingRouteById(expectedId).subscribe(result=>
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

  it('should be able to issue query data for rockClimbingRouteByCode', (done) => {
    const expectedQuery = 'rockClimbingRouteByCode';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'routeCode',
        qlType: 'String!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';
    const expectedCode = 'AT1';

    const expectedResult = {
      [expectedQuery]:
        {
          climbingWallId: 1,
          id: 1,
          routeCode: expectedCode,
          englishFullName: 'Testing RockClimbingRoute 1',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingRouteByCodeMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingRouteByCode(expectedCode).subscribe(result=>
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

  it('should be able to issue query data for rockClimbingRoutesByRockClimbingWall', (done) => {
    const expectedQuery = 'rockClimbingRoutesByRockClimbingWall';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'climbingWallId',
        qlType: 'Int!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingRoute';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]: [
        {
          climbingWallId: expectedId,
          id: 1,
          routeCode: 'AT1',
          englishFullName: 'Testing RockClimbingRoute 1',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute,
        {
          climbingWallId: expectedId,
          id: 2,
          routeCode: 'AT2',
          englishFullName: 'Testing RockClimbingRoute 2',
          info: null,
          thumbPictureBytes:  null,
          rating: 1,
          heightInMeters: 1,
          heightInFeet: 3.2808399,
          numberOfPitchs: 1,
          firstAscent: 'That Testing Guy',
          firstFreeAscent: 'That Guy Coding Guy',
          sunAm: false,
          sunPm: false,
          filteredSun: false,
          sunny: false,
          shady: false,
          driesFast: false,
          dryInRain: false,
          climbAnglesHaveSlabs: false,
          climbAnglesHaveVerticals: false,
          climbAnglesHaveOverHangs: false,
          climbAnglesHaveRoofs: false,
          rockFalls: false,
          seepage: false,
          reachy: false,
          dyno: false,
          pumpy: false,
          techy: false,
          power: false,
          crimpy: false,
          pockSlashHole: false,
          seatStart: false,
          runout: false,
          stickClip: false,
          typeId: 2,
          difficultyId: 2
        } as RockClimbingRoute
      ] as RockClimbingRoute[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingRoutesByRockClimbingWallMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingRoutesByRockClimbingWall(expectedId).subscribe(result=>
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
