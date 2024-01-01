import { Injectable } from '@angular/core';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map, switchMap } from 'rxjs';
import { BaseQlService, QlQueryMeta, QlQueryParams } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { District } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class DistrictService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllDistrictsMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<QlQueryMeta<District>>
  {
    const query = 'districts'
    return this.generateQueryMeta(
      District, query, selection
    )
  }

  public getAllDistricts(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District[]>
  {
    return this.getAllDistrictsMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<District[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getDistrictByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<QlQueryMeta<District>>
  {
    const query = 'districtById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      District, query, selection, queryParams
    )
  }

  public getDistrictById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District>
  {
    return this.getDistrictByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<District>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getDistrictByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<QlQueryMeta<District>>
  {
    const query = 'districtByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'districtCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      District, query, selection, queryParams
    )
  }

  public getDistrictByCode(districtCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District>
  {
    return this.getDistrictByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<District>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: districtCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getDistrictsByRegionMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<QlQueryMeta<District>>
  {
    const query = 'districtsByRegion'
    const queryParams: QlQueryParams[] = [
      {
        param: 'regionId', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      District, query, selection, queryParams
    )
  }

  public getDistrictsByRegion(regionId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District[]>
  {
    return this.getDistrictsByRegionMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<District[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: regionId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}