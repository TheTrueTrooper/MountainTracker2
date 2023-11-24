import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ClientConfig } from '../../configuration';
import { BaseService } from './base.service';
import { Observable, map } from 'rxjs';
import { Country } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService {

  constructor(protected override readonly clientConfig: ClientConfig,
              protected override apolloProvider: Apollo) {
    super(clientConfig, apolloProvider)
   }

   public getAllCountries(): Observable<Country>
   {
    return this.moutainTrackerApi.query<Country>({
      query: gql`
      query
      {
        countryQuery
        {
          allCountries
          {
            id
            countryCode
            englishFullName
          }
        }
      }
      `,
    }).pipe(map(result => result.data));
   }
}
