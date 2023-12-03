import {
    createSelector,
  } from '@ngrx/store';
import * as fromCountry from '../reducers/country.reducer';
import { selectCountryState } from '../entity.selector';
 
export const selectCountryIds = createSelector(
  selectCountryState,
  fromCountry.selectCountryIds
);
export const selectCountryEntities = createSelector(
  selectCountryState,
  fromCountry.selectCountryEntities
);
export const selectAllCountries = createSelector(
  selectCountryState,
  fromCountry.selectAllCountries
);
export const selectCountryTotal = createSelector(
  selectCountryState,
  fromCountry.selectCountryTotal
);