import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BaseQlService } from './base-ql.service';
import { Observable, map, switchMap } from 'rxjs';
import { Country } from '../../../models';
import { QlQueryMeta, QlQueryParams, QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
  }
  //#region queries
  public getAllCountriesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlQueryMeta<Country>>
  {
    const query = 'allCountries'
    return this.generateQueryMeta(
      Country, query, selection
    )
  }

  public getAllCountries(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country[]>
  {
    return this.getAllCountriesMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Country[]>({
            query: this.generateQuery(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getCountryByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlQueryMeta<Country>>
  {
    const query = 'countryById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        qlType: 'Byte!'
      }
    ]
    return this.generateQueryMeta(
      Country, query, selection, queryParams
    )
  }

  public getCountryById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    return this.getCountryByIdMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Country>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }

  public getCountryByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlQueryMeta<Country>>
  {
    const query = 'countryByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'countryCode', 
        qlType: 'String!'
      }
    ]
    return this.generateQueryMeta(
      Country, query, selection, queryParams
    )
  }

  public getCountryByCode(countryCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    return this.getCountryByCodeMeta(selection).pipe(
      switchMap(
        query=>{
          return this.moutainTrackerApi.query<Country>({
            query: this.generateQuery(query),
            variables:{
                  [query.getParamSelector(query.queryParams[0].param)]: countryCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
  }
  //#endregion
}
