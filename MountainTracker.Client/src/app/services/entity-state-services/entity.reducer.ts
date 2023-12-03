import { combineReducers } from '@ngrx/store';
import * as fromAreaGeoFenceNode from './reducers/area-geo-fence-node.reducer';
import * as fromArea from './reducers/area.reducer';
import * as fromBusyRating from './reducers/busy-rating.reducer';
import * as fromClimbingQualityRating from './reducers/climbing-quality-rating.reducer';
import * as fromCountry from './reducers/country.reducer';
import * as fromDistrictGeoFenceNode from './reducers/district-geo-fence-node.reducer';
import * as fromDistrict from './reducers/district.reducer';
import * as fromProvinceOrState from './reducers/province-or-state.reducer';
import * as fromRegionGeoFenceNode from './reducers/region-geo-fence-node.reducer';
import * as fromRegion from './reducers/region.reducer';
import * as fromRockClimbingRoute from './reducers/rock-climbing-route.reducer';
import * as fromRockClimbingType from './reducers/rock-climbing-type.reducer';
import * as fromRockClimbingWallGeoFenceNode from './reducers/rock-climbing-wall-geo-fence-node.reducer';
import * as fromRockClimbingWall from './reducers/rock-climbing-route.reducer';
import * as fromZoneGeoFenceNode from './reducers/zone-geo-fence-node.reducer';
import * as fromZone from './reducers/zone.reducer';

export interface EntityState {
    areaGeoFenceNode: fromAreaGeoFenceNode.AreaGeoFenceNodeState
    area: fromArea.AreaState,
    busyRating: fromBusyRating.BusyRatingState,
    climbingQualityRating: fromClimbingQualityRating.ClimbingQualityRatingState,
    country: fromCountry.CountryState,
    districtGeoFenceNode: fromDistrictGeoFenceNode.DistrictGeoFenceNodeState,
    district: fromDistrict.DistrictState,
    provinceOrState: fromProvinceOrState.ProvinceOrStateState,
    regionGeoFenceNode: fromRegionGeoFenceNode.RegionGeoFenceNodeState,
    region: fromRegion.RegionState,
    rockClimbingRoute: fromRockClimbingRoute.RockClimbingRouteState,
    rockClimbingType: fromRockClimbingType.RockClimbingTypeState,
    rockClimbingWallGeoFenceNode: fromRockClimbingWallGeoFenceNode.RockClimbingWallGeoFenceNodeState,
    rockClimbingWall: fromRockClimbingWall.RockClimbingRouteState,
    zoneGeoFenceNode: fromZoneGeoFenceNode.ZoneGeoFenceNodeState,
    zone: fromZone.ZoneState,
  }

export const entityReducer = combineReducers({
    areaGeoFenceNode: fromAreaGeoFenceNode.areaGeoFenceNodeReducer,
    area: fromArea.areaReducer,
    busyRating: fromBusyRating.busyRatingReducer,
    climbingQualityRating: fromClimbingQualityRating.climbingQualityRatingReducer,
    country: fromCountry.countryReducer,
    districtGeoFenceNode: fromDistrictGeoFenceNode.districtGeoFenceNodeReducer,
    district: fromDistrict.districtReducer,
    provinceOrState: fromProvinceOrState.provinceOrStateReducer,
    regionGeoFenceNode: fromRegionGeoFenceNode.regionGeoFenceNodeReducer,
    region: fromRegion.regionReducer,
    rockClimbingRoute: fromRockClimbingRoute.rockClimbingRouteReducer,
    rockClimbingType: fromRockClimbingType.rockClimbingTypeReducer,
    rockClimbingWallGeoFenceNode: fromRockClimbingWallGeoFenceNode.rockClimbingWallGeoFenceNodeReducer,
    rockClimbingWall: fromRockClimbingWall.rockClimbingRouteReducer,
    zoneGeoFenceNode: fromZoneGeoFenceNode.zoneGeoFenceNodeReducer,
    zone: fromZone.zoneReducer,
  });