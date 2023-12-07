import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, switchMap } from 'rxjs/operators';
import { localApi } from '../../../services/graphql';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';
import * as featureSelectors from '../selectors';
import { Store } from '@ngrx/store';
 
@Injectable()
export class AdministrationEffects {
 
  constructor(
    protected readonly store: Store,
    protected readonly actions$: Actions,
    protected readonly countryService: localApi.CountryService,
    protected readonly provinceOrStateService: localApi.ProvinceOrStateService,
    protected readonly regionService: localApi.RegionService,
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
        exhaustMap(({id}) => {
          if(id === null)
          {
            return [
              featureActions.selectCountrySuccess(), 
              actions.loadProvincesOrStatesSuccess({provincesOrStates: []}), 
            ]
          }
          return this.provinceOrStateService.getProvincesOrStatesByCountry(id).pipe(switchMap(result=>{
            return [
              featureActions.selectCountrySuccess(), 
              actions.loadProvincesOrStatesSuccess({provincesOrStates: result}), 
            ]
        }));
      })));

  provinceOrStateSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectProvinceOrState),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectProvinceOrStateSuccess(), 
          actions.loadRegionsSuccess({regions: []}), 
        ]
      }
      return this.regionService.getRegionsByProvinceOrState(id).pipe(switchMap(result=>{
        return [
          featureActions.selectProvinceOrStateSuccess(), 
          actions.loadRegionsSuccess({regions: result}), 
        ]
    }));
  })));
  
}