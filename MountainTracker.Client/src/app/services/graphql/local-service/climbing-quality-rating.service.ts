import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { ClimbingQualityRating } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class ClimbingQualityRatingService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllClimbingQualityRatings(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<ClimbingQualityRating[]>
   {
    const query = 'allClimbingQualityRatings'
    return this.moutainTrackerApi.query<ClimbingQualityRating[]>({
      query: this.generateQuery(ClimbingQualityRating, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getClimbingQualityRatingById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ClimbingQualityRating>): Observable<ClimbingQualityRating>
  {
    const queryVar = '($id: Byte!)'
    const query = 'climbingQualityRatingById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<ClimbingQualityRating>({
      query: this.generateQuery(ClimbingQualityRating, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}

