import {
    createSelector,
} from '@ngrx/store';
import * as fromZoneGeoFenceNode from '../reducers/zone-geo-fence-node.reducer';
import { selectZoneGeoFenceNodeState } from '../entity.selector';
 
export const selectZoneGeoFenceNodeIds = createSelector(
  selectZoneGeoFenceNodeState,
  fromZoneGeoFenceNode.selectZoneGeoFenceNodeIds
);
export const selectZoneGeoFenceNodeEntities = createSelector(
  selectZoneGeoFenceNodeState,
  fromZoneGeoFenceNode.selectZoneGeoFenceNodeEntities
);
export const selectAllZoneGeoFenceNodes = createSelector(
  selectZoneGeoFenceNodeState,
  fromZoneGeoFenceNode.selectAllZoneGeoFenceNodes
);
export const selectZoneGeoFenceNodeTotal = createSelector(
  selectZoneGeoFenceNodeState,
  fromZoneGeoFenceNode.selectZoneGeoFenceNodeTotal
);