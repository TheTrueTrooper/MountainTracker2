import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ClientConfig } from '../../../configuration';
import { BaseService } from './base.service';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Country } from '../../../models';
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService {

  constructor(protected override readonly clientConfig: ClientConfig,
              protected override apolloProvider: Apollo) {
    super(clientConfig, apolloProvider)
   }

   public getAllCountries(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Country>): Observable<Country[]>
   {
    return this.moutainTrackerApi.query<Country[]>({
      query: gql`
      query
      {
        countryQuery
        {
          allCountries
          {
            ${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields(Country)}
          }
        }
      }
      `,                                                                                                                                                                                                                                
    }).pipe(
      map((result: any) => result.data.countryQuery.allCountries))
    }
}
