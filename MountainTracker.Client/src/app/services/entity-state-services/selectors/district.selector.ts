import {
    createSelector,
} from '@ngrx/store';
import * as fromDistrict from '../reducers/district.reducer';
import { selectDistrictState } from '../entity.selector';
 
export const selectDistrictIds = createSelector(
  selectDistrictState,
  fromDistrict.selectDistrictIds
);
export const selectDistrictEntities = createSelector(
  selectDistrictState,
  fromDistrict.selectDistrictEntities
);
export const selectAllDistricts = createSelector(
  selectDistrictState,
  fromDistrict.selectAllDistricts
);
export const selectDistrictTotal = createSelector(
  selectDistrictState,
  fromDistrict.selectDistrictTotal
);