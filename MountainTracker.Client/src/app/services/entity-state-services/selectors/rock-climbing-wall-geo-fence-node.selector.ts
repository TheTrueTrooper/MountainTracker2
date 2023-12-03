import {
    createSelector,
} from '@ngrx/store';
import * as fromRockClimbingWallGeoFenceNode from '../reducers/rock-climbing-wall-geo-fence-node.reducer';
import { selectRockClimbingWallGeoFenceNodeState } from '../entity.selector';
 
export const selectRockClimbingWallGeoFenceNodeIds = createSelector(
  selectRockClimbingWallGeoFenceNodeState,
  fromRockClimbingWallGeoFenceNode.selectRockClimbingWallGeoFenceNodeIds
);
export const selectRockClimbingWallGeoFenceNodeEntities = createSelector(
  selectRockClimbingWallGeoFenceNodeState,
  fromRockClimbingWallGeoFenceNode.selectRockClimbingWallGeoFenceNodeEntities
);
export const selectAllRockClimbingWallGeoFenceNodes = createSelector(
  selectRockClimbingWallGeoFenceNodeState,
  fromRockClimbingWallGeoFenceNode.selectAllRockClimbingWallGeoFenceNodes
);
export const selectRockClimbingWallGeoFenceNodeTotal = createSelector(
  selectRockClimbingWallGeoFenceNodeState,
  fromRockClimbingWallGeoFenceNode.selectRockClimbingWallGeoFenceNodeTotal
);