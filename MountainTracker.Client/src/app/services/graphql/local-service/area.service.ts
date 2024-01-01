import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { Area } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllAreasMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<QlQueryMeta<Area>>
  {
    const query = 'allAreas'
    return this.generateQueryMeta(
      Area, query, selection
    )
  }

  public getAllAreas(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area[]>
  {
    return this.getAllAreasMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Area[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getAreaByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<QlQueryMeta<Area>>
  {
    const query = 'areaById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      Area, query, selection, queryParams
    )
  }

  public getAreaById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area>
  {
    return this.getAreaByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Area>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getAreaByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<QlQueryMeta<Area>>
  {
    const query = 'areaByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'areaCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      Area, query, selection, queryParams
    )
  }

  public getAreaByCode(areaCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area>
  {
    return this.getAreaByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Area>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: areaCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getAreaByZoneMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<QlQueryMeta<Area>>
  {
    const query = 'areaByZone'
    const queryParams: QlQueryParams[] = [
      {
        param: 'zoneId', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      Area, query, selection, queryParams
    )
  }

  public getAreaByZone(zoneId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area[]>
  {
    return this.getAreaByZoneMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Area[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: zoneId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}