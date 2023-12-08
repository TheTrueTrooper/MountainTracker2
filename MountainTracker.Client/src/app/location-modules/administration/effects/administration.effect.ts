import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, switchMap } from 'rxjs/operators';
import { localApi } from '../../../services/graphql';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';
import * as featureSelectors from '../selectors';
import { Store } from '@ngrx/store';
import { QlSelectionSetTyped, ensureQlFields } from '../../../graphql-helpers';
import { Region, RegionGeoFenceNode } from '../../../models';
import { normalize, schema } from 'normalizr';
 
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
      return this.regionService.getRegionsByProvinceOrState(id, {
        fields: [ensureQlFields(Region)],
        subSet: [
          {
            name: 'geoFenceNodes',
            fields: [ensureQlFields(RegionGeoFenceNode)],
          }
        ]
      }).pipe(switchMap(result=>{
        const regionGeoFenceNodeSchema = new schema.Entity('geoFenceNodes')
        const regionSchema = new schema.Entity('region', {
          geoFenceNodes: [regionGeoFenceNodeSchema]
        })
        const entities = normalize(result, [regionSchema])
        let regions: Region[] = entities.entities['region'] as any;
        let regionGeoFenceNodes: RegionGeoFenceNode[] = entities.entities['geoFenceNodes'] as any;
        regions = regions ? Object.keys(regions).map(id=>(regions as any)[id]) : [];
        regionGeoFenceNodes = regionGeoFenceNodes ? Object.keys(regionGeoFenceNodes).map(id=>(regionGeoFenceNodes as any)[id]) : [];
        return [
          featureActions.selectProvinceOrStateSuccess(), 
          actions.loadRegionsSuccess({regions: regions}), 
          actions.loadRegionGeoFenceNodesSuccess({regionGeoFenceNodes: regionGeoFenceNodes}), 
        ]
    }));
  })));
  
}