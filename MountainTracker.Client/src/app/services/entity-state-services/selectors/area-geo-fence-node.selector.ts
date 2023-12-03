import {
    createSelector,
} from '@ngrx/store';
import * as fromAreaGeoFenceNode from '../reducers/area-geo-fence-node.reducer';
import { selectAreaGeoFenceNodeState } from '../entity.selector';
 
export const selectAreaGeoFenceNodeIds = createSelector(
  selectAreaGeoFenceNodeState,
  fromAreaGeoFenceNode.selectAreaGeoFenceNodeIds
);
export const selectAreaGeoFenceNodeEntities = createSelector(
  selectAreaGeoFenceNodeState,
  fromAreaGeoFenceNode.selectAreaGeoFenceNodeEntities
);
export const selectAllAreaGeoFenceNodes = createSelector(
  selectAreaGeoFenceNodeState,
  fromAreaGeoFenceNode.selectAllAreaGeoFenceNodes
);
export const selectAreaGeoFenceNodeTotal = createSelector(
  selectAreaGeoFenceNodeState,
  fromAreaGeoFenceNode.selectAreaGeoFenceNodeTotal
);