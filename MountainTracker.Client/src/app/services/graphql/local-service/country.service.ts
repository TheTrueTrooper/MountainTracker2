import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BaseQlService, QlMetaQuery, QlQueryParams } from './base-ql.service';
import { Observable, map, switchMap } from 'rxjs';
import { Country } from '../../../models';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
  public getAllCountriesMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlMetaQuery<Country>>
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
            query: this.generateQuery2(query),                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
    // return this.moutainTrackerApi.query<Country[]>({
    //   query: this.generateQuery(Country, query, selection),                                                                                                                                                                                                                                
    // }).pipe(map((result: any) => result.data[query]))
  }

  public getCountryByIdMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlMetaQuery<Country>>
  {
    const query = 'countryById'
    const queryParams: QlQueryParams[] = [
      {
        param: 'id', 
        //input: 'id', 
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
          return this.moutainTrackerApi.query<Country[]>({
            query: this.generateQuery2(query),
            variables:{
                  [query.getParamSelector("id")]: id
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
    // const queryVar = '($id: Byte!)'
    // const query = 'countryById'
    // const queryParam = '(id: $id)'
    // return this.moutainTrackerApi.query<Country>({
    //   query: this.generateQuery(Country, query, selection, queryVar, queryParam),
    //   variables:{
    //     id: id
    //   }                                                                                                                                                                                                                                
    // }).pipe(map((result: any) => result.data[query]))
  }

  public getCountryByCodeMeta(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<QlMetaQuery<Country>>
  {
    const query = 'countryByCode'
    const queryParams: QlQueryParams[] = [
      {
        param: 'countryCode', 
        //input: 'countryCode', 
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
          return this.moutainTrackerApi.query<Country[]>({
            query: this.generateQuery2(query),
            variables:{
                  [query.getParamSelector("countryCode")]: countryCode
                 }                                                                                                                                                                                                                                
          }).pipe(map((result: any) => result.data[query.query]))
        }
      )
    )
    // const queryVar = '($countryCode: String!)'
    // const query = 'countryByCode'
    // const queryParam = '(countryCode: $countryCode)'
    // return this.moutainTrackerApi.query<Country>({
    //   query: this.generateQuery(Country, query, selection, queryVar, queryParam),
    //   variables:{
    //     countryCode: countryCode
    //   }                                                                                                                                                                                                                                
    // }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}
