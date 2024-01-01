import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BaseQlService } from './base-ql.service';
import { Observable, map, switchMap } from 'rxjs';
import { ProvinceOrState } from '../../../models';
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class ProvinceOrStateService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  public getAllprovincesOrStatesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<QlQueryMeta<ProvinceOrState>>
  {
    const query = 'allprovincesOrStates'
    return this.generateQueryMeta(
      ProvinceOrState, query, selection
    )
  }

  public getAllprovincesOrStates(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState[]>
  {
    return this.getAllprovincesOrStatesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ProvinceOrState[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getProvinceOrStateByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<QlQueryMeta<ProvinceOrState>>
  {
    const query = 'provinceOrStateById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Short!'
      }
    ]
    return this.generateQueryMeta(
      ProvinceOrState, query, selection, queryParams
    )
  }

  public getProvinceOrStateById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  {
    return this.getProvinceOrStateByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ProvinceOrState>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getProvinceOrStateByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<QlQueryMeta<ProvinceOrState>>
  {
    const query = 'provinceOrStateByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'regionCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      ProvinceOrState, query, selection, queryParams
    )
  }

  public getProvinceOrStateByCode(regionCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  {
    return this.getProvinceOrStateByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ProvinceOrState>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: regionCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getProvincesOrStatesByCountryMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<QlQueryMeta<ProvinceOrState>>
  {
    const query = 'provincesOrStatesByCountry'
    const queryParams: QlQueryParams[] = [
      {
        param: 'countryId', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      ProvinceOrState, query, selection, queryParams
    )
  }

  public getProvincesOrStatesByCountry(countryId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState[]>
  {
    return this.getProvincesOrStatesByCountryMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<ProvinceOrState[]>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: countryId
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}
