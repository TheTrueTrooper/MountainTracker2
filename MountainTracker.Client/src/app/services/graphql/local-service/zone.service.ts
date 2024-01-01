import { Injectable } from '@angular/core';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { Zone } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }

  //#region queries
  public getAllZonesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<QlQueryMeta<Zone>>
  {
    const query = 'allZones'
    return this.generateQueryMeta(
      Zone, query, selection
    )
  }

  public getAllZones(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone[]>
  {
    return this.getAllZonesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Zone[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getZoneByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<QlQueryMeta<Zone>>
  {
    const query = 'zoneById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      Zone, query, selection, queryParams
    )
  }

  public getZoneById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
  {
    return this.getZoneByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Zone>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getZoneByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<QlQueryMeta<Zone>>
  {
    const query = 'zoneByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'zoneCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      Zone, query, selection, queryParams
    )
  }

  public getZoneByCode(zoneCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
  {
    return this.getZoneByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Zone>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: zoneCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getZonesByDistrictMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<QlQueryMeta<Zone>>
  {
    const query = 'zonesByDistrict'
    const queryParams: QlQueryParams[] = [
      {
        param: 'districtId', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      Zone, query, selection, queryParams
    )
  }

  public getZonesByDistrict(districtId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone[]>
  {
    return this.getZonesByDistrictMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Zone[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: districtId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}