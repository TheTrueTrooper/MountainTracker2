import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BaseQlService } from './base-ql.service';
import { Observable, map } from 'rxjs';
import { Country } from '../../../models';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllCountries(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country[]>
   {
    const query = 'allCountries'
    return this.moutainTrackerApi.query<Country[]>({
      query: this.generateQuery(Country, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getCountryById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    const queryVar = '($id: Byte!)'
    const query = 'provinceOrStateServiceById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<Country>({
      query: this.generateQuery(Country, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getCountryByCode(countryCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    const queryVar = '($countryCode: String!)'
    const query = 'countryByCode'
    const queryParam = '(countryCode: $countryCode)'
    return this.moutainTrackerApi.query<Country>({
      query: this.generateQuery(Country, query, selection, queryVar, queryParam),
      variables:{
        countryCode: countryCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}
