import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { RockClimbingWall } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingWallService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }

  //#region queries
  public getAllRockClimbingWallsMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<QlQueryMeta<RockClimbingWall>>
  {
    const query = 'allRockClimbingWalls'
    return this.generateQueryMeta(
      RockClimbingWall, query, selection
    )
  }

  public getAllRockClimbingWalls(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall[]>
  {
    return this.getAllRockClimbingWallsMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingWall[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  
  public getRockClimbingWallByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<QlQueryMeta<RockClimbingWall>>
  {
    const query = 'rockClimbingWallById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingWall, query, selection, queryParams
    )
  }

  public getRockClimbingWallById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall>
  {
    return this.getRockClimbingWallByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingWall>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingWallByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<QlQueryMeta<RockClimbingWall>>
  {
    const query = 'rockClimbingWallByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'wallCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingWall, query, selection, queryParams
    )
  }

  public getRockClimbingRouteByCode(wallCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall>
  {
    return this.getRockClimbingWallByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingWall>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: wallCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRockClimbingWallsByAreaMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<QlQueryMeta<RockClimbingWall>>
  {
    const query = 'rockClimbingWallsByArea'
    const queryParams: QlQueryParams[] = [
      {
        param: 'areaId', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      RockClimbingWall, query, selection, queryParams
    )
  }

  public getRockClimbingWallsByArea(areaId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall[]>
  {
    return this.getRockClimbingWallsByAreaMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<RockClimbingWall[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: areaId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}
