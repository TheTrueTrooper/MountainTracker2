import {
    createSelector,
} from '@ngrx/store';
import * as fromZone from '../reducers/zone.reducer';
import { selectZoneState } from '../entity.selector';
 
export const selectZoneIds = createSelector(
  selectZoneState,
  fromZone.selectZoneIds
);
export const selectZoneEntities = createSelector(
  selectZoneState,
  fromZone.selectZoneEntities
);
export const selectAllZones = createSelector(
  selectZoneState,
  fromZone.selectAllZones
);
export const selectZoneTotal = createSelector(
  selectZoneState,
  fromZone.selectZoneTotal
);