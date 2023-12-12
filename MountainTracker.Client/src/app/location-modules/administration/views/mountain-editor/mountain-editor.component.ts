import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from '../../../../services/entity-state-services';
import * as featureActions from '../../actions';
import * as featureSelectors from '../../selectors';
import { Observable } from 'rxjs';
import { AdminArea, AdminCountry, AdminDistrict, AdminProvinceOrState, AdminRegion, AdminRockClimbingRoute, AdminRockClimbingWall, AdminZone, RegionGeoFenceNode, RockClimbingWallGeoFenceNode } from '../../../../models';
import { faFlag, faEarth, faMap, faMountainCity, faObjectGroup, faVectorSquare, faMountainSun, faRoute } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mountain-editor',
  templateUrl: './mountain-editor.component.html',
  styleUrl: './mountain-editor.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MountainEditorComponent {
  protected selectionCountry$: Observable<AdminCountry[]>;
  protected selectionProvinceOrState$: Observable<AdminProvinceOrState[]>;
  protected selectionRegion$: Observable<AdminDistrict[]>;
  protected selectionDistrict$: Observable<AdminDistrict[]>;
  protected selectionZone$: Observable<AdminZone[]>;
  protected selectionArea$: Observable<AdminArea[]>;
  protected selectionRockClimbingWall$: Observable<AdminRockClimbingWall[]>;
  protected selectionRockClimbingRoute$: Observable<AdminRockClimbingRoute[]>;

  protected selectedCountryId$: Observable<number | null>;
  protected selectedProvinceOrStateId$: Observable<number | null>;
  protected selectedRegionId$: Observable<number | null>;
  protected selectedDistrictId$: Observable<number | null>;
  protected selectedZoneId$: Observable<number | null>;
  protected selectedAreaId$: Observable<number | null>;
  protected selectedRockClimbingWallId$: Observable<number | null>;
  protected selectedRockClimbingRouteId$: Observable<number | null>;

  protected countries$: Observable<AdminCountry[]>;
  protected provincesOrStates$: Observable<AdminProvinceOrState[]>;
  protected regions$: Observable<AdminRegion[]>;
  protected districts$: Observable<AdminDistrict[]>;
  protected zones$: Observable<AdminZone[]>;
  protected areas$: Observable<AdminArea[]>;
  protected rockClimbingWalls$: Observable<AdminRockClimbingWall[]>;
  protected rockClimbingRoutes$: Observable<AdminRockClimbingRoute[]>;

  protected regionGeoFenceNodes$: Observable<RegionGeoFenceNode[]>;
  protected districtGeoFenceNodes$: Observable<RegionGeoFenceNode[]>;
  protected zoneGeoFenceNodes$: Observable<RegionGeoFenceNode[]>;
  protected areaGeoFenceNodes$: Observable<RegionGeoFenceNode[]>;
  protected rockClimbingWallGeoFenceNodes$: Observable<RockClimbingWallGeoFenceNode[]>;

  protected faFlag = faFlag;
  protected faEarth = faEarth;
  protected faMap = faMap;
  protected faMountainCity = faMountainCity;
  protected faObjectGroup = faObjectGroup;
  protected faVectorSquare = faVectorSquare;
  protected faMountainSun = faMountainSun;
  protected faRoute = faRoute;

  constructor(private store: Store)
  {
    this.selectedCountryId$ = this.store.select(featureSelectors.selectSelectedCountryId);
    this.selectedProvinceOrStateId$ = this.store.select(featureSelectors.selectSelectedProvinceOrStateId);
    this.selectedRegionId$ = this.store.select(featureSelectors.selectSelectedRegionId);
    this.selectedDistrictId$ = this.store.select(featureSelectors.selectSelectedDistrictId);
    this.selectedZoneId$ = this.store.select(featureSelectors.selectSelectedZoneId);
    this.selectedAreaId$ = this.store.select(featureSelectors.selectSelectedAreaId);
    this.selectedRockClimbingWallId$ = this.store.select(featureSelectors.selectSelectedRockClimbingWallId);
    this.selectedRockClimbingRouteId$ = this.store.select(featureSelectors.selectSelectedRockClimbingRouteId);


    this.countries$ = this.store.select(featureSelectors.selectCountries);
    this.provincesOrStates$ = this.store.select(featureSelectors.selectProvincesOrStates);
    this.regions$ = this.store.select(featureSelectors.selectRegions);
    this.districts$ = this.store.select(featureSelectors.selectDistricts);
    this.zones$ = this.store.select(featureSelectors.selectZones);
    this.areas$ = this.store.select(featureSelectors.selectAreas);
    this.rockClimbingWalls$ = this.store.select(featureSelectors.selectRockClimbingWalls);
    this.rockClimbingRoutes$ = this.store.select(featureSelectors.selectRockClimbingRoutes);

    this.selectionCountry$ = this.store.select(featureSelectors.selectCountrySelection);
    this.selectionProvinceOrState$ = this.store.select(featureSelectors.selectProvinceOrStateSelection);
    this.selectionRegion$ = this.store.select(featureSelectors.selectRegionSelection);
    this.selectionDistrict$ = this.store.select(featureSelectors.selectDistrictSelection);
    this.selectionZone$ = this.store.select(featureSelectors.selectZoneSelection);
    this.selectionArea$ = this.store.select(featureSelectors.selectAreaSelection);
    this.selectionRockClimbingWall$ = this.store.select(featureSelectors.selectRockClimbingWallSelection);
    this.selectionRockClimbingRoute$ = this.store.select(featureSelectors.selectRockClimbingRouteSelection);

    this.regionGeoFenceNodes$ = this.store.select(featureSelectors.selectRegionGeoFenceNodes);
    this.districtGeoFenceNodes$ = this.store.select(featureSelectors.selectDistrictGeoFenceNodes);
    this.zoneGeoFenceNodes$ = this.store.select(featureSelectors.selectZoneGeoFenceNodes);
    this.areaGeoFenceNodes$ = this.store.select(featureSelectors.selectAreaGeoFenceNodes);
    this.rockClimbingWallGeoFenceNodes$ = this.store.select(featureSelectors.selectRockClimbingWallGeoFenceNodes);

    this.store.dispatch(featureActions.initLoad());
  }

  selectCountrySelected(id: number | null): void {
    this.store.dispatch(featureActions.selectCountry({id: id}));
  }

  provinceOrStateSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectProvinceOrState({id: id}));
  }

  regionSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectRegion({id: id}));
  }

  districtSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectDistrict({id: id}));
  }

  zoneSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectZone({id: id}));
  }

  areaSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectArea({id: id}));
  }

  rockClimbingWallSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectRockClimbingWall({id: id}));
  }

  rockClimbingRouteSelected(id: number | null)
  {
    this.store.dispatch(featureActions.selectRockClimbingWall({id: id}));
  }
}
