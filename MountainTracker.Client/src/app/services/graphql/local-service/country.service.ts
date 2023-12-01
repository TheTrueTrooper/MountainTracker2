import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ClientConfig } from '../../../configuration';
import { BaseQlService } from './base-ql.service';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Country } from '../../../models';
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';
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
    }).pipe(map((result: any) => result.data.countryQuery.allCountries))
  }

  public countryById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    const queryParam = '($id: Byte!)'
    const query = 'countryById(id: $id)'
    return this.moutainTrackerApi.query<Country>({
      query: this.generateQuery(Country, query, selection, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data.countryQuery.countryById))
  }

  public countryByCode(countryCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country>
  {
    const queryParam = '($countryCode: String!)'
    const query = 'countryByCode(countryCode: $countryCode)'
    return this.moutainTrackerApi.query<Country>({
      query: this.generateQuery(Country, query, selection, queryParam),
      variables:{
        countryCode: countryCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data.countryQuery.countryByCode))
  }
}
