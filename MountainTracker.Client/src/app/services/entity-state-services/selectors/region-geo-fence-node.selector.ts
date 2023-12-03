import {
    createSelector,
} from '@ngrx/store';
import * as fromRegionGeoFenceNode from '../reducers/region-geo-fence-node.reducer';
import { selectRegionGeoFenceNodeState } from '../entity.selector';
 
export const selectRegionGeoFenceNodeIds = createSelector(
  selectRegionGeoFenceNodeState,
  fromRegionGeoFenceNode.selectRegionGeoFenceNodeIds
);
export const selectRegionGeoFenceNodeEntities = createSelector(
  selectRegionGeoFenceNodeState,
  fromRegionGeoFenceNode.selectRegionGeoFenceNodeEntities
);
export const selectAllRegionGeoFenceNodes = createSelector(
  selectRegionGeoFenceNodeState,
  fromRegionGeoFenceNode.selectAllRegionGeoFenceNodes
);
export const selectRegionGeoFenceNodeTotal = createSelector(
  selectRegionGeoFenceNodeState,
  fromRegionGeoFenceNode.selectRegionGeoFenceNodeTotal
);