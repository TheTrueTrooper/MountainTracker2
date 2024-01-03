
import { TestBed } from '@angular/core/testing';

import { RockClimbingDifficultyService } from './rock-climbing-difficulty.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { QlQueryParams } from '../../../graphql-helpers';
import { RockClimbingDifficulty } from '../../../models';


describe('RockClimbingDifficultyService', () => {
  const api =  'MountainTracker';
  let service: RockClimbingDifficultyService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(RockClimbingDifficultyService);
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
  it('should be able to generate meta query data for allRockClimbingDifficultys', (done) => {
    const expectedQuery = 'allRockClimbingDifficulties';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingDifficulty';

    service.getAllRockClimbingDifficultiesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingDifficultyById', (done) => {
    const expectedQuery = 'rockClimbingDifficultyById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingDifficulty';

    service.getRockClimbingDifficultyByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allRockClimbingDifficultys', (done) => {
    const expectedQuery = 'allRockClimbingDifficulties';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingDifficulty';

    const expectedResult = {
      [expectedQuery]: [
        {
          id: 1,
          englishName: 'Testing RockClimbingDifficulty 1',
        } as RockClimbingDifficulty,
        {
          id: 2,
          englishName: 'Testing RockClimbingDifficulty 2',
        } as RockClimbingDifficulty
      ] as RockClimbingDifficulty[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllRockClimbingDifficultiesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllRockClimbingDifficulties().subscribe(result=>
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

  it('should be able to issue query data for rockClimbingDifficultyById', (done) => {
    const expectedQuery = 'rockClimbingDifficultyById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingDifficulty';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          id: expectedId,
          englishName: 'Testing RockClimbingDifficulty 1',
        } as RockClimbingDifficulty
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingDifficultyByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingDifficultyById(expectedId).subscribe(result=>
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