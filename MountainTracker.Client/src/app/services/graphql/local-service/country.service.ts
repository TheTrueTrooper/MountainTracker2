import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ClientConfig } from '../../../configuration';
import { BaseQlService } from './base-ql.service';
import { Observable, map } from 'rxjs';
import { Country } from '../../../models';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseQlService {

  constructor(protected override readonly clientConfig: ClientConfig,
              protected override apolloProvider: Apollo) {
    super(clientConfig, apolloProvider)
   }

   protected override queryObj: string = "countryQuery"

   public getAllCountries(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country[]>
   {
    const query = 'allCountries'
    return this.moutainTrackerApi.query<Country[]>({
      query: this.generateQuery(Country, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
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
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
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
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
}
