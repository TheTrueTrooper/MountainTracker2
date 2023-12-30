import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { RockClimbingDifficulty } from '../../../models';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingDifficultyService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllRockClimbingDifficultiesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<QlQueryMeta<RockClimbingDifficulty>>
  {
    const query = 'allRockClimbingDifficulties'
    return this.generateQueryMeta(
      RockClimbingDifficulty, query, selection
    )
  }

  public getAllRockClimbingDifficulties(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<RockClimbingDifficulty[]>
  {
    return this.getAllRockClimbingDifficultiesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingDifficulty[]>({
              query: this.generateQuery2(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingDifficultyByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<QlQueryMeta<RockClimbingDifficulty>>
  {
    const query = 'rockClimbingDifficultyById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingDifficulty, query, selection, queryParams
    )
  }

  public getRockClimbingDifficultyById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<RockClimbingDifficulty>
  {
    return this.getRockClimbingDifficultyByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingDifficulty[]>({
            query: this.generateQuery2(query),
            variables:{
                  [query.getParamSelector("id")]: id
                }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}
