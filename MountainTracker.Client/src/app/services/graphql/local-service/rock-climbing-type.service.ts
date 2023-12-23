import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { RockClimbingType } from '../../../models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingTypeService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllRockClimbingTypes(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<RockClimbingType[]>
   {
    const query = 'allRockClimbingTypes'
    return this.moutainTrackerApi.query<RockClimbingType[]>({
      query: this.generateQuery(RockClimbingType, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getRockClimbingTypeById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<RockClimbingType>
  {
    const queryVar = '($id: Byte!)'
    const query = 'rockClimbingTypeById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<RockClimbingType>({
      query: this.generateQuery(RockClimbingType, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}
