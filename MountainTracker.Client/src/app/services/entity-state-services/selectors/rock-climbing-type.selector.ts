import {
    createSelector,
} from '@ngrx/store';
import * as fromRockClimbingType from '../reducers/rock-climbing-type.reducer';
import { selectRockClimbingTypeState } from '../entity.selector';
 
export const selectRockClimbingTypeIds = createSelector(
  selectRockClimbingTypeState,
  fromRockClimbingType.selectRockClimbingTypeIds
);
export const selectRockClimbingTypeEntities = createSelector(
  selectRockClimbingTypeState,
  fromRockClimbingType.selectRockClimbingTypeEntities
);
export const selectAllRockClimbingTypes = createSelector(
  selectRockClimbingTypeState,
  fromRockClimbingType.selectAllRockClimbingTypes
);
export const selectRockClimbingTypeTotal = createSelector(
  selectRockClimbingTypeState,
  fromRockClimbingType.selectRockClimbingTypeTotal
);