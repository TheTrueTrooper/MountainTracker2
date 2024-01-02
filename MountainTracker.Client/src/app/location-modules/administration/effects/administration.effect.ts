import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, switchMap } from 'rxjs/operators';
import { localApi } from '../../../services/graphql';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';
import * as featureSelectors from '../selectors';
import { Store } from '@ngrx/store';
import { ensureQlFields } from '../../../graphql-helpers';
import { Area, AreaGeoFenceNode, Country, District, DistrictGeoFenceNode, Region, RegionGeoFenceNode, RockClimbingRoute, RockClimbingWall, RockClimbingWallGeoFenceNode, Zone, ZoneGeoFenceNode } from '../../../models';
import { normalize, schema } from 'normalizr';
import { forkJoin } from 'rxjs';
 
@Injectable()
export class AdministrationEffects {
 
  constructor(
    protected readonly store: Store,
    protected readonly actions$: Actions,
    protected readonly climbingQualityRatingService: localApi.ClimbingQualityRatingService,
    protected readonly busyRatingService: localApi.BusyRatingService,
    protected readonly rockClimbingDifficultyService: localApi.RockClimbingDifficultyService,
    protected readonly rockClimbingTypeService: localApi.RockClimbingTypeService,
    protected readonly countryService: localApi.CountryService,
    protected readonly provinceOrStateService: localApi.ProvinceOrStateService,
    protected readonly regionService: localApi.RegionService,
    protected readonly districtService: localApi.DistrictService,
    protected readonly zoneService: localApi.ZoneService,
    protected readonly areaService: localApi.AreaService,
    protected readonly rockClimbingWallService: localApi.RockClimbingWallService,
    protected readonly rockClimbingRouteService: localApi.RockClimbingRouteService,
  ) {}

  protected readonly intitCalls$ = forkJoin(
    {
      country: this.countryService.getAllCountriesMeta(),
      climbingQualityRatings: this.climbingQualityRatingService.getAllClimbingQualityRatingsMeta(),
      busyRatings: this.busyRatingService.getAllBusyRatingsMeta(),
      rockClimbingTypes: this.rockClimbingTypeService.getAllRockClimbingTypesMeta(),
      rockClimbingDifficulties: this.rockClimbingDifficultyService.getAllRockClimbingDifficultiesMeta()
    }
  )

  initLoad$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.initLoad),
      exhaustMap(()=>this.intitCalls$.pipe(switchMap(result=>

          this.countryService.getMergedQuery(
            result
          ).pipe(
            switchMap(result=>{
              return[
                actions.loadCountriesSuccess({countries: result.result.data[result.queries["country"].query]}),
                actions.loadClimbingQualityRatingsSuccess({climbingQualityRatings: result.result.data[result.queries["climbingQualityRatings"].query]}),
                actions.loadBusyRatingsSuccess({busyRatings: result.result.data[result.queries["busyRatings"].query]}),
                actions.loadRockClimbingTypesSuccess({rockClimbingTypes: result.result.data[result.queries["rockClimbingTypes"].query]}),
                actions.loadRockClimbingDifficultiesSuccess({rockClimbingDifficulties: result.result.data[result.queries["rockClimbingDifficulties"].query]}),
                featureActions.initLoadSuccess()
              ]
            })
          ), 
      ))))
  );

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
          actions.loadRegionGeoFenceNodesSuccess({regionGeoFenceNodes: []}),
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

  regionSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectRegion),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectRegionSuccess(), 
          actions.loadDistrictsSuccess({districts: []}), 
          actions.loadDistrictGeoFenceNodesSuccess({districtGeoFenceNodes: []})
        ]
      }
      return this.districtService.getDistrictsByRegion(id, {
        fields: [ensureQlFields(District)],
        subSet: [
          {
            name: 'geoFenceNodes',
            fields: [ensureQlFields(DistrictGeoFenceNode)],
          }
        ]
      }).pipe(switchMap(result=>{
        const districtGeoFenceNodeSchema = new schema.Entity('geoFenceNodes')
        const districtSchema = new schema.Entity('district', {
          geoFenceNodes: [districtGeoFenceNodeSchema]
        })
        const entities = normalize(result, [districtSchema])
        let districts: District[] = entities.entities['district'] as any;
        let districtGeoFenceNodes: DistrictGeoFenceNode[] = entities.entities['geoFenceNodes'] as any;
        districts = districts ? Object.keys(districts).map(id=>(districts as any)[id]) : [];
        districtGeoFenceNodes = districtGeoFenceNodes ? Object.keys(districtGeoFenceNodes).map(id=>(districtGeoFenceNodes as any)[id]) : [];
        return [
          featureActions.selectRegionSuccess(), 
          actions.loadDistrictsSuccess({districts: districts}), 
          actions.loadDistrictGeoFenceNodesSuccess({districtGeoFenceNodes: districtGeoFenceNodes}), 
        ]
    }));
  })));
  
  districtSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectDistrict),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectDistrictSuccess(), 
          actions.loadZonesSuccess({zones: []}), 
          actions.loadZoneGeoFenceNodesSuccess({zoneGeoFenceNodes: []})
        ]
      }
      return this.zoneService.getZonesByDistrict(id, {
        fields: [ensureQlFields(Zone)],
        subSet: [
          {
            name: 'geoFenceNodes',
            fields: [ensureQlFields(ZoneGeoFenceNode)],
          }
        ]
      }).pipe(switchMap(result=>{
        const zoneGeoFenceNodeSchema = new schema.Entity('geoFenceNodes')
        const zoneSchema = new schema.Entity('zone', {
          geoFenceNodes: [zoneGeoFenceNodeSchema]
        })
        const entities = normalize(result, [zoneSchema])
        let zones: District[] = entities.entities['zone'] as any;
        let zoneGeoFenceNodes: DistrictGeoFenceNode[] = entities.entities['geoFenceNodes'] as any;
        zones = zones ? Object.keys(zones).map(id=>(zones as any)[id]) : [];
        zoneGeoFenceNodes = zoneGeoFenceNodes ? Object.keys(zoneGeoFenceNodes).map(id=>(zoneGeoFenceNodes as any)[id]) : [];
        return [
          featureActions.selectDistrictSuccess(), 
          actions.loadZonesSuccess({zones: zones}), 
          actions.loadZoneGeoFenceNodesSuccess({zoneGeoFenceNodes: zoneGeoFenceNodes}), 
        ]
    }));
  })));

  zoneSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectZone),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectZoneSuccess(), 
          actions.loadAreasSuccess({areas: []}), 
          actions.loadAreaGeoFenceNodesSuccess({areaGeoFenceNodes: []})
        ]
      }
      return this.areaService.getAreaByZone(id, {
        fields: [ensureQlFields(Area)],
        subSet: [
          {
            name: 'geoFenceNodes',
            fields: [ensureQlFields(AreaGeoFenceNode)],
          }
        ]
      }).pipe(switchMap(result=>{
        const areaGeoFenceNodeSchema = new schema.Entity('geoFenceNodes')
        const areaSchema = new schema.Entity('area', {
          geoFenceNodes: [areaGeoFenceNodeSchema]
        })
        const entities = normalize(result, [areaSchema])
        let areas: District[] = entities.entities['area'] as any;
        let areaGeoFenceNodes: DistrictGeoFenceNode[] = entities.entities['geoFenceNodes'] as any;
        areas = areas ? Object.keys(areas).map(id=>(areas as any)[id]) : [];
        areaGeoFenceNodes = areaGeoFenceNodes ? Object.keys(areaGeoFenceNodes).map(id=>(areaGeoFenceNodes as any)[id]) : [];
        return [
          featureActions.selectZoneSuccess(), 
          actions.loadAreasSuccess({areas: areas}), 
          actions.loadAreaGeoFenceNodesSuccess({areaGeoFenceNodes: areaGeoFenceNodes}), 
        ]
    }));
  })));

  areaSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectArea),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectAreaSuccess(), 
          actions.loadRockClimbingWallsSuccess({rockClimbingWalls: []}), 
          actions.loadRockClimbingWallGeoFenceNodesSuccess({rockClimbingWallGeoFenceNodes: []})
        ]
      }
      return this.rockClimbingWallService.getRockClimbingWallsByArea(id, {
        fields: [ensureQlFields(RockClimbingWall)],
        subSet: [
          {
            name: 'geoFenceNodes',
            fields: [ensureQlFields(RockClimbingWallGeoFenceNode)],
          }
          //do not load busyRatings or climbQualityRatings as we can load this on load. Then reconnect with redux to save resources! and it simplifies the normalization now to save front end resources!
          //by the design pattern of the redux normaized it will lose nothing to do it this way and have selectors reconnect the data!
        ]
      }).pipe(switchMap(result=>{
        const rockClimbingWallGeoFenceNodeSchema = new schema.Entity('geoFenceNodes')
        const rockClimbingWallSchema = new schema.Entity('rockClimbingWall', {
          geoFenceNodes: [rockClimbingWallGeoFenceNodeSchema]
        })
        const entities = normalize(result, [rockClimbingWallSchema])
        let rockClimbingWalls: RockClimbingWall[] = entities.entities['rockClimbingWall'] as any;
        let rockClimbingWallGeoFenceNodes: DistrictGeoFenceNode[] = entities.entities['geoFenceNodes'] as any;
        rockClimbingWalls = rockClimbingWalls ? Object.keys(rockClimbingWalls).map(id=>(rockClimbingWalls as any)[id]) : [];
        rockClimbingWallGeoFenceNodes = rockClimbingWallGeoFenceNodes ? Object.keys(rockClimbingWallGeoFenceNodes).map(id=>(rockClimbingWallGeoFenceNodes as any)[id]) : [];
        return [
          featureActions.selectAreaSuccess(), 
          actions.loadRockClimbingWallsSuccess({rockClimbingWalls: rockClimbingWalls}), 
          actions.loadRockClimbingWallGeoFenceNodesSuccess({rockClimbingWallGeoFenceNodes: rockClimbingWallGeoFenceNodes}), 
        ]
    }));
  })));

  rockClimbingWallSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectRockClimbingWall),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectRockClimbingWallSuccess(), 
          actions.loadRockClimbingRoutesSuccess({rockClimbingRoutes: []}), 
        ]
      }
      return this.rockClimbingRouteService.getRockClimbingRoutesByRockClimbingWall(id).pipe(switchMap(result=>
        [
          featureActions.selectRockClimbingWallSuccess(), 
          actions.loadRockClimbingRoutesSuccess({rockClimbingRoutes: result}), 
        ]
    ));
  })));

  rockClimbingRouteSelected$ = createEffect(() =>
  this.actions$.pipe(
    ofType(featureActions.selectRockClimbingRoute),
    exhaustMap(({id}) => {
      if(id === null)
      {
        return [
          featureActions.selectRockClimbingRouteSuccess(), 
        ]
      }
      return this.rockClimbingRouteService.getRockClimbingRoutesByRockClimbingWall(id).pipe(switchMap(result=>
        [
          featureActions.selectRockClimbingRouteSuccess(), 
        ]
    ));
  })));
}