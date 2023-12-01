import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { localApi } from '../../graphql';
import * as CountryActions from '../actions/country.actions';
import * as Utility from '../actions/utility.actions';
 
@Injectable()
export class CountryEffects {
 
  loadCoutry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      exhaustMap(() => this.countryService.getAllCountries()
        .pipe(
          map(countries => {
            return CountryActions.loadCountriesSuccess({countries: countries})
          }),
          // catchError((error) => [
          //   CountryActions.loadCountriesFailure({clearOnfail: true, error:error}),
          //   Utility.onError({ apiName: CountryActions.loadCountries.name, error: error})
          // ])
        )
      )
    )
  );
 
  constructor(
    protected readonly actions$: Actions,
    protected readonly countryService: localApi.CountryService
  ) {}
}