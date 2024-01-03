import { TestBed } from '@angular/core/testing';

import { RockClimbingTypeService } from './rock-climbing-type.service';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ClientConfig } from '../../../configuration';
import { TestingBaseQlServiceController, clientConfigMockFactory } from './base-ql.service.spec';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { QlQueryParams } from '../../../graphql-helpers';
import { RockClimbingType } from '../../../models';


describe('RockClimbingTypeService', () => {
  const api =  'MountainTracker';
  let service: RockClimbingTypeService;
  let baseServiceController: TestingBaseQlServiceController;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ClientConfig, useFactory:clientConfigMockFactory},
        {provide: TestingBaseQlServiceController, useFactory:()=> new TestingBaseQlServiceController(TestBed.inject(Apollo))}],
      imports: [ApolloTestingModule.withClients([api])]});
    service = TestBed.inject(RockClimbingTypeService);
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
  it('should be able to generate meta query data for allRockClimbingTypes', (done) => {
    const expectedQuery = 'allRockClimbingTypes';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingType';

    service.getAllRockClimbingTypesMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to generate meta query data for rockClimbingTypeById', (done) => {
    const expectedQuery = 'rockClimbingTypeById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingType';

    service.getRockClimbingTypeByIdMeta().subscribe(result=>
      {
        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        done();
      })
  });

  it('should be able to issue query data for allRockClimbingTypes', (done) => {
    const expectedQuery = 'allRockClimbingTypes';
    const expectedParams: QlQueryParams[] = [];
    const expectedParamPrefix = 'RockClimbingType';

    const expectedResult = {
      [expectedQuery]: [
        {
          id: 1,
          englishName: 'Testing RockClimbingType 1',
        } as RockClimbingType,
        {
          id: 2,
          englishName: 'Testing RockClimbingType 2',
        } as RockClimbingType
      ] as RockClimbingType[]
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getAllRockClimbingTypesMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getAllRockClimbingTypes().subscribe(result=>
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

  it('should be able to issue query data for rockClimbingTypeById', (done) => {
    const expectedQuery = 'rockClimbingTypeById';
    const expectedParams: QlQueryParams[] = [
      {
        param: 'id',
        qlType: 'Byte!'
      }
    ];
    const expectedParamPrefix = 'RockClimbingType';
    const expectedId = 1;

    const expectedResult = {
      [expectedQuery]:
        {
          id: expectedId,
          englishName: 'Testing RockClimbingType 1',
        } as RockClimbingType
    };

    let generatedQuery: TypedDocumentNode<any, any>;

    service.getRockClimbingTypeByIdMeta().subscribe(result=>{
        generatedQuery = baseServiceController.generateQueryTest(result);

        expect(result.query).toBe(expectedQuery)
        expect(result.queryParams).toEqual(expectedParams)
        expect(result.queryParamPrefix).toBe(expectedParamPrefix);
        
        service.getRockClimbingTypeById(expectedId).subscribe(result=>
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