import {
    createSelector,
} from '@ngrx/store';
import * as fromArea from '../reducers/area.reducer';
import { selectAreaState } from '../entity.selector';
 
export const selectAreaIds = createSelector(
  selectAreaState,
  fromArea.selectAreaIds
);
export const selectAreaEntities = createSelector(
  selectAreaState,
  fromArea.selectAreaEntities
);
export const selectAllAreas = createSelector(
  selectAreaState,
  fromArea.selectAllAreas
);
export const selectAreaTotal = createSelector(
  selectAreaState,
  fromArea.selectAreaTotal
);