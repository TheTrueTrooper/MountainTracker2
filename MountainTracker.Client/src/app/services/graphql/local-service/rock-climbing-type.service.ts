import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { RockClimbingType } from '../../../models';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingTypeService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllRockClimbingTypesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<QlQueryMeta<RockClimbingType>>
  {
    const query = 'allRockClimbingTypes'
    return this.generateQueryMeta(
      RockClimbingType, query, selection
    )
  }

 public getAllRockClimbingTypes(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<RockClimbingType[]>
 {
    return this.getAllRockClimbingTypesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingType[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingTypeByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<QlQueryMeta<RockClimbingType>>
  {
    const query = 'rockClimbingTypeById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingType, query, selection, queryParams
    )
  }

  public getRockClimbingTypeById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingType>): Observable<RockClimbingType>
  {
    return this.getRockClimbingTypeByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingType[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}
