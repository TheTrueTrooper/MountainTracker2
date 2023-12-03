import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from './entity.reducer';

export const selectEntitiesState = createFeatureSelector<EntityState>('entities');

export const selectAreaGeoFenceNodeState = createSelector(selectEntitiesState, state=>state.areaGeoFenceNode);
export const selectAreaState = createSelector(selectEntitiesState, state=>state.area);
export const selectBusyRatingState = createSelector(selectEntitiesState, state=>state.busyRating);
export const selectClimbingQualityRatingState = createSelector(selectEntitiesState, state=>state.climbingQualityRating);
export const selectCountryState = createSelector(selectEntitiesState, state=>state.country);
export const selectDistrictGeoFenceNodeState = createSelector(selectEntitiesState, state=>state.districtGeoFenceNode);
export const selectDistrictState = createSelector(selectEntitiesState, state=>state.district);
export const selectProvinceOrStateState = createSelector(selectEntitiesState, state=>state.provinceOrState);
export const selectRegionGeoFenceNodeState = createSelector(selectEntitiesState, state=>state.regionGeoFenceNode);
export const selectRegionState = createSelector(selectEntitiesState, state=>state.region);
export const selectRockClimbingWallGeoFenceNodeState = createSelector(selectEntitiesState, state=>state.regionGeoFenceNode);
export const selectRockClimbingWallState = createSelector(selectEntitiesState, state=>state.rockClimbingWall);
export const selectZoneGeoFenceNodeState = createSelector(selectEntitiesState, state=>state.zoneGeoFenceNode);
export const selectZoneState = createSelector(selectEntitiesState, state=>state.zone);