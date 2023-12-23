import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { BusyRating } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BusyRatingService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllBusyRatings(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<BusyRating[]>
   {
    const query = 'allBusyRatings'
    return this.moutainTrackerApi.query<BusyRating[]>({
      query: this.generateQuery(BusyRating, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getBusyRatingById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<BusyRating>
  {
    const queryVar = '($id: Byte!)'
    const query = 'busyRatingById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<BusyRating>({
      query: this.generateQuery(BusyRating, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}

