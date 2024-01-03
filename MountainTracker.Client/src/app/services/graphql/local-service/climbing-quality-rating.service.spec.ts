import { TestBed } from '@angular/core/testing';

import { ClimbingQualityRatingService } from './climbing-quality-rating.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { QlQueryParams } from '../../../graphql-helpers';
import { ClimbingQualityRating } from '../../../models';


describe('ClimbingQualityRatingService', () => {
  const api =  'MountainTracker';
  let service: ClimbingQualityRatingService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(ClimbingQualityRatingService);
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
  it('should be able to generate meta query data for allClimbingQualityRatings', (done) => {
    const expectedQuery = 'allClimbingQualityRatings';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'ClimbingQualityRating';

    service.getAllClimbingQualityRatingsMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for climbingQualityRatingById', (done) => {
    const expectedQuery = 'climbingQualityRatingById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'ClimbingQualityRating';

    service.getClimbingQualityRatingByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allClimbingQualityRatings', (done) => {
    const expectedQuery = 'allClimbingQualityRatings';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'ClimbingQualityRating';

    const expectedResult = {
      [expectedQuery]: [
        {
          id: 1,
          englishName: 'Testing ClimbingQualityRating 1',
        } as ClimbingQualityRating,
        {
          id: 2,
          englishName: 'Testing ClimbingQualityRating 2',
        } as ClimbingQualityRating
      ] as ClimbingQualityRating[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllClimbingQualityRatingsMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllClimbingQualityRatings().subscribe(result=>
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

  it('should be able to issue query data for climbingQualityRatingById', (done) => {
    const expectedQuery = 'climbingQualityRatingById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'ClimbingQualityRating';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          id: expectedId,
          englishName: 'Testing ClimbingQualityRating 1',
        } as ClimbingQualityRating
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getClimbingQualityRatingByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getClimbingQualityRatingById(expectedId).subscribe(result=>
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