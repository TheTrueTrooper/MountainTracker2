import { TestBed } from '@angular/core/testing';

import { BusyRatingService } from './busy-rating.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { QlQueryParams } from '../../../graphql-helpers';
import { BusyRating } from '../../../models';


describe('BusyRatingService', () => {
  const api =  'MountainTracker';
  let service: BusyRatingService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(BusyRatingService);
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
  it('should be able to generate meta query data for allBusyRatings', (done) => {
    const expectedQuery = 'allBusyRatings';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'BusyRating';

    service.getAllBusyRatingsMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for busyRatingById', (done) => {
    const expectedQuery = 'busyRatingById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'BusyRating';

    service.getBusyRatingByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allBusyRatings', (done) => {
    const expectedQuery = 'allBusyRatings';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'BusyRating';

    const expectedResult = {
      [expectedQuery]: [
        {
          id: 1,
          englishName: 'Testing BusyRating 1',
        } as BusyRating,
        {
          id: 2,
          englishName: 'Testing BusyRating 2',
        } as BusyRating
      ] as BusyRating[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllBusyRatingsMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllBusyRatings().subscribe(result=>
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

  it('should be able to issue query data for busyRatingById', (done) => {
    const expectedQuery = 'busyRatingById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'BusyRating';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          id: expectedId,
          englishName: 'Testing BusyRating 1',
        } as BusyRating
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getBusyRatingByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getBusyRatingById(expectedId).subscribe(result=>
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
