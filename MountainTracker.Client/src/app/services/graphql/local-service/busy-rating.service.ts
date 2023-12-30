import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { BusyRating } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class BusyRatingService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllBusyRatingsMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<QlQueryMeta<BusyRating>>
  {
    const query = 'allBusyRatings'
    return this.generateQueryMeta(
      BusyRating, query, selection
    )
  }

  public getAllBusyRatings(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<BusyRating[]>
  {
    return this.getAllBusyRatingsMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<BusyRating[]>({
            query: this.generateQuery2(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getBusyRatingByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<QlQueryMeta<BusyRating>>
  {
    const query = 'busyRatingById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      BusyRating, query, selection, queryParams
    )
  }

  public getBusyRatingById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, BusyRating>): Observable<BusyRating>
  {
    return this.getBusyRatingByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<BusyRating[]>({
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

