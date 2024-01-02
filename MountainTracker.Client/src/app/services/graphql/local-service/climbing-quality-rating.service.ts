import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { ClimbingQualityRating } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class ClimbingQualityRatingService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllClimbingQualityRatingsMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<QlQueryMeta<ClimbingQualityRating>>
  {
    const query = 'allClimbingQualityRatings'
    return this.generateQueryMeta(
      ClimbingQualityRating, query, selection
    )
  }

  public getAllClimbingQualityRatings(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<ClimbingQualityRating[]>
  {
    return this.getAllClimbingQualityRatingsMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ClimbingQualityRating[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getClimbingQualityRatingByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<QlQueryMeta<ClimbingQualityRating>>
  {
    const query = 'climbingQualityRatingById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      ClimbingQualityRating, query, selection, queryParams
    )
  }

  public getClimbingQualityRatingById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<ClimbingQualityRating>
  {
    return this.getClimbingQualityRatingByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ClimbingQualityRating>({
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

