import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { RockClimbingRoute } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingRouteService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  protected override queryObj: string = "rockClimbingRouteQuery"

  public getAllRockClimbingRoutes(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute[]>
  {
    const query = 'allRockClimbingRoutes'
      return this.moutainTrackerApi.query<RockClimbingRoute[]>({
      query: this.generateQuery(RockClimbingRoute, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRockClimbingRouteById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute>
  {
    const queryVar = '($id: Int!)'
    const query = 'rockClimbingRouteById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<RockClimbingRoute>({
      query: this.generateQuery(RockClimbingRoute, query, selection, queryVar, queryParam),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRockClimbingRouteByCode(routeCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute>
  {
    const queryVar = '($routeCode: String!)'
    const query = 'rockClimbingRouteByCode'
    const queryParam = '(routeCode: $routeCode)'
    return this.moutainTrackerApi.query<RockClimbingRoute>({
      query: this.generateQuery(RockClimbingRoute, query, selection, queryVar, queryParam),
      variables:{
        routeCode: routeCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRockClimbingRoutesByRockClimbingWall(climbingWallId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingRoute>): Observable<RockClimbingRoute[]>
  {
    const queryVar = '($climbingWallId: Int!)'
    const query = 'rockClimbingRoutesByRockClimbingWall'
    const queryParam = '(climbingWallId: $climbingWallId)'
    return this.moutainTrackerApi.query<RockClimbingRoute[]>({
      query: this.generateQuery(RockClimbingRoute, query, selection, queryVar, queryParam),
      variables:{
        climbingWallId: climbingWallId
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}