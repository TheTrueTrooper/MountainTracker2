import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { RockClimbingDifficulty } from '../../../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingDifficultyService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllRockClimbingDifficulties(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<RockClimbingDifficulty[]>
   {
    const query = 'allRockClimbingDifficulties'
    return this.moutainTrackerApi.query<RockClimbingDifficulty[]>({
      query: this.generateQuery(RockClimbingDifficulty, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getRockClimbingDifficultyById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingDifficulty>): Observable<RockClimbingDifficulty>
  {
    const queryVar = '($id: Byte!)'
    const query = 'rockClimbingDifficultyById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<RockClimbingDifficulty>({
      query: this.generateQuery(RockClimbingDifficulty, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}
