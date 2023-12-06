import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, switchMap } from 'rxjs/operators';
import { localApi } from '../../../services/graphql';
import { actions } from '../../../services/entity-state-services';
import { QlSelectionSetTyped, getQlFields } from '../../../graphql-helpers';
import { Country, ProvinceOrState } from '../../../models';
import { normalize, schema } from 'normalizr';
 
@Injectable()
export class AdministrationEffects {
 
  loadCoutry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCountries),
      exhaustMap(() => this.countryService.getAllCountries({
        fields: getQlFields(Country),
        subSet:[
          {
            name: 'provincesOrStates',
            fields: ['id', 'englishFullName', 'regionCode']
          } as QlSelectionSetTyped<Country, ProvinceOrState>
        ]
      }).pipe(map(x=>{
        const provinceSchema = new schema.Entity("provincesOrStates")
        const countrySchema = new schema.Entity("country", 
        {
          provincesOrStates: [provinceSchema]
        })
        const value = normalize(x, [countrySchema])
        return  value;
      }))
      .pipe(
        switchMap(normalizedResult => {
          let entities: { 'country': {[key: string]: Country}, 'provincesOrStates':{[key: string]: ProvinceOrState}} = normalizedResult.entities as { 'country': {[key: string]: Country}, 'provincesOrStates': {[key: string]: ProvinceOrState}};
          return [actions.loadCountriesSuccess({countries: Object.keys(entities.country).map(key=>entities.country[key])}),
          actions.loadProvincesOrStatesSuccess({provincesOrStates: Object.keys(entities.provincesOrStates).map(key=>entities.country[key])})]
        })
      )
      )
    )
  );
 
  constructor(
    protected readonly actions$: Actions,
    protected readonly countryService: localApi.CountryService
  ) {}
}