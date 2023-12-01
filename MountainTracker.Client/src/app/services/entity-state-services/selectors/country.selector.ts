import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromCountry from '../reducers/country.reducer';
   
  export interface CountryState {
    countries: fromCountry.CountryState;
  }
   
  export const reducers: ActionReducerMap<CountryState> = {
    countries: fromCountry.countryReducer,
  };
   
  export const selectCountriesState = createFeatureSelector<fromCountry.CountryState>('countries');
   
  export const selectCountryIds = createSelector(
    selectCountriesState,
    fromCountry.selectCountryIds
  );
  export const selectCountryEntities = createSelector(
    selectCountriesState,
    fromCountry.selectCountryEntities
  );
  export const selectAllCountries = createSelector(
    selectCountriesState,
    fromCountry.selectAllCountries
  );
  export const selectCountryTotal = createSelector(
    selectCountriesState,
    fromCountry.selectCountryTotal
  );