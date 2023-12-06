import {
    createSelector,
} from '@ngrx/store';
import * as fromDistrictGeoFenceNode from '../reducers/district-geo-fence-node.reducer';
import { selectDistrictGeoFenceNodeState } from '../entity.selector';
 
export const selectDistrictGeoFenceNodeIds = createSelector(
  selectDistrictGeoFenceNodeState,
  fromDistrictGeoFenceNode.selectDistrictGeoFenceNodeIds
);
export const selectDistrictGeoFenceNodeEntities = createSelector(
  selectDistrictGeoFenceNodeState,
  fromDistrictGeoFenceNode.selectDistrictGeoFenceNodeEntities
);
export const selectAllDistrictGeoFenceNodes = createSelector(
  selectDistrictGeoFenceNodeState,
  fromDistrictGeoFenceNode.selectAllDistrictGeoFenceNodes
);
export const selectDistrictGeoFenceNodeTotal = createSelector(
  selectDistrictGeoFenceNodeState,
  fromDistrictGeoFenceNode.selectDistrictGeoFenceNodeTotal
);