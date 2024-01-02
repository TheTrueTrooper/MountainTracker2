import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { Region } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  public getAllRegionsMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<QlQueryMeta<Region>>
  {
    const query = 'allRegions'
    return this.generateQueryMeta(
      Region, query, selection
    )
  }

  public getAllRegions(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region[]>
  {
    return this.getAllRegionsMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Region[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRegionByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<QlQueryMeta<Region>>
  {
    const query = 'regionById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Int!'
      }
    ]
    return this.generateQueryMeta(
      Region, query, selection, queryParams
    )
  }

  public getRegionById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region>
  {
    return this.getRegionByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Region>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRegionByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<QlQueryMeta<Region>>
  {
    const query = 'regionByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'regionCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      Region, query, selection, queryParams
    )
  }

  public getRegionByCode(regionCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region>
  {
    return this.getRegionByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Region>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: regionCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getRegionsByProvinceOrStateMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<QlQueryMeta<Region>>
  {
    const query = 'regionsByProvinceOrState'
    const queryParams: QlQueryParams[] = [
      {
        param: 'provinceOrStateId', 
        qlType: 'Short!'
      }
    ]
    return this.generateQueryMeta(
      Region, query, selection, queryParams
    )
  }

  public getRegionsByProvinceOrState(provinceOrStateId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region[]>
  {
    return this.getRegionsByProvinceOrStateMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Region[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: provinceOrStateId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}