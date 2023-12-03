import {
    createSelector,
  } from '@ngrx/store';
import * as fromProvinceOrState from '../reducers/province-or-state.reducer';
import { selectProvinceOrStateState } from '../entity.selector';
 
export const selectProvinceOrStateIds = createSelector(
  selectProvinceOrStateState,
  fromProvinceOrState.selectProvinceOrStateIds
);
export const selectProvinceOrStateEntities = createSelector(
  selectProvinceOrStateState,
  fromProvinceOrState.selectProvinceOrStateEntities
);
export const selectAllProvincesOrStates = createSelector(
  selectProvinceOrStateState,
  fromProvinceOrState.selectAllProvincesOrStates
);
export const selectProvinceOrStateTotal = createSelector(
  selectProvinceOrStateState,
  fromProvinceOrState.selectProvinceOrStateTotal
);