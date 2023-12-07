import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';

export const AdministrationFeature = "administration"

export interface AdministrationState {
    selectedCountryId: number | null;
    selectedProvinceOrStateId: number | null;
    error: string | null;
    lastError: string | null;
}

const initialState: AdministrationState = {
    selectedCountryId: null,
    selectedProvinceOrStateId: null,
    error: null,
    lastError: null
  };

export const administrationFeatureReducer = createReducer(
    initialState,
    on(actions.loadCountries, (state, {}) => {
        return {
            ...state,
            selectedCountryId: null
        };
    }),
    on(featureActions.selectCountry, (state, { id }) => {
      return {
          ...state,
          selectedCountryId: id
      };
    }),
    on(featureActions.selectCountryFailure, (state) => {
      return {
          ...state,
          selectedCountryId: null
      };
    }),
    on(
      featureActions.selectCountryFailure,
      (state, { clearOnfail, error }) => {
      if(clearOnfail)
      {
          return { ...state, selectedCountryId: null , ProvinceOrState: null, error: error, lastError: error };
      }
      return { ...state, error: error, lastError: error };
  }));

const selectAdministration = createFeatureSelector<AdministrationState>(AdministrationFeature);

export const selectSelectedCountryId = createSelector(selectAdministration, state=>state.selectedCountryId);
  