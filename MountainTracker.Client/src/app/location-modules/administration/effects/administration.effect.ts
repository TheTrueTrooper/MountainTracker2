import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, switchMap } from 'rxjs/operators';
import { localApi } from '../../../services/graphql';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';
 
@Injectable()
export class AdministrationEffects {
 
  constructor(
    protected readonly actions$: Actions,
    protected readonly countryService: localApi.CountryService,
    protected readonly provinceOrStateService: localApi.ProvinceOrStateService,
  ) {}

  loadCoutry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCountries),
      exhaustMap(() => this.countryService.getAllCountries().pipe(map(result=>{
        return actions.loadCountriesSuccess({countries: result})
      })))));

  countrySelected$ = createEffect(() =>
      this.actions$.pipe(
        ofType(featureActions.selectCountry),
        exhaustMap(() => this.provinceOrStateService.getProvincesOrStatesByCountry(39).pipe(switchMap(result=>{
          return [
            featureActions.selectCountrySuccess(), 
            actions.loadProvincesOrStatesSuccess({provincesOrStates: result}), 
          ]
        })))));
  
}