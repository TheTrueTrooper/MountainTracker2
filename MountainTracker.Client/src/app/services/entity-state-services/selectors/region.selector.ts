import {
    createSelector,
} from '@ngrx/store';
import * as fromRegion from '../reducers/region.reducer';
import { selectRegionState } from '../entity.selector';
 
export const selectRegionIds = createSelector(
  selectRegionState,
  fromRegion.selectRegionIds
);
export const selectRegionEntities = createSelector(
  selectRegionState,
  fromRegion.selectRegionEntities
);
export const selectAllRegions = createSelector(
  selectRegionState,
  fromRegion.selectAllRegions
);
export const selectRegionTotal = createSelector(
  selectRegionState,
  fromRegion.selectRegionTotal
);