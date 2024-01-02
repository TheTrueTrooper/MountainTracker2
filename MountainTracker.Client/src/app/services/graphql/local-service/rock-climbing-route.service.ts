import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { RockClimbingRoute } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingRouteService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  public getAllRockClimbingRoutesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<QlQueryMeta<RockClimbingRoute>>
  {
    const query = 'allRockClimbingRoutes'
    return this.generateQueryMeta(
      RockClimbingRoute, query, selection
    )
  }

  public getAllRockClimbingRoutes(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute[]>
  {
    return this.getAllRockClimbingRoutesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingRoute[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingRouteByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<QlQueryMeta<RockClimbingRoute>>
  {
    const query = 'rockClimbingRouteById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingRoute, query, selection, queryParams
    )
  }

  public getRockClimbingRouteById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute>
  {
    return this.getRockClimbingRouteByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingRoute>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingRouteByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<QlQueryMeta<RockClimbingRoute>>
  {
    const query = 'rockClimbingRouteByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'routeCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingRoute, query, selection, queryParams
    )
  }

  public getRockClimbingRouteByCode(routeCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute>
  {
    return this.getRockClimbingRouteByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingRoute>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: routeCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingRoutesByRockClimbingWallMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<QlQueryMeta<RockClimbingRoute>>
  {
    const query = 'rockClimbingRoutesByRockClimbingWall'
    const queryParams: QlQueryParams[] = [
      {
        param: 'climbingWallId', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingRoute, query, selection, queryParams
    )
  }

  public getRockClimbingRoutesByRockClimbingWall(climbingWallId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute[]>
  {
    return this.getRockClimbingRoutesByRockClimbingWallMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingRoute[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: climbingWallId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}