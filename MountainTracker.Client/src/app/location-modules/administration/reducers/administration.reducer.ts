import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';

export const AdministrationFeature = "administration"

export interface AdministrationState {
    selectedCountryId: number | null;
    selectedProvinceOrStateId: number | null;
    selectedRegionId: number | null;
    error: string | null;
    lastError: string | null;
}

const initialState: AdministrationState = {
    selectedCountryId: null,
    selectedProvinceOrStateId: null,
    selectedRegionId: null,
    error: null,
    lastError: null
  };

export const administrationFeatureReducer = createReducer(
    initialState,
    on(actions.loadCountries, (state, {}) => {
        return {
            ...state,
            selectedCountryId: null,
            selectedProvinceOrStateId: null, 
            ProvinceOrState: null, 
        };
    }),
    on(featureActions.selectCountry, (state, { id }) => {
      return {
          ...state,
          selectedCountryId: id
      };
    }),
    on(featureActions.selectProvinceOrState, (state, { id }) => {
        return {
            ...state,
            selectedProvinceOrStateId: id
        };
    }),
    on(featureActions.selectRegion, (state, { id }) => {
        return {
            ...state,
            selectedRegionId: id
        };
    }),
    on(
        featureActions.selectRegionFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return {
              ...state, 
              selectedRegionId: null,
              error: error, 
              lastError: error };
        }
        return { 
          ...state, 
          error: error, 
          lastError: error 
      };
    }),
    on(
      featureActions.selectProvinceOrStateFailure,
      (state, { clearOnfail, error }) => {
      if(clearOnfail)
      {
          return {
            ...state, 
            selectedRegionId: null,
            selectedProvinceOrStateId: null, 
            error: error, 
            lastError: error };
      }
      return { 
        ...state, 
        error: error, 
        lastError: error 
      };
    }),
    on(
      featureActions.selectCountryFailure,
      (state, { clearOnfail, error }) => {
      if(clearOnfail)
      {
          return {
             ...state, 
            selectedRegionId: null,
            selectedCountryId: null, 
            selectedProvinceOrStateId: null, 
            error: error, 
            lastError: error };
      }
      return { 
        ...state, 
        error: error, 
        lastError: error 
    };
  }));

const selectAdministration = createFeatureSelector<AdministrationState>(AdministrationFeature);

export const selectSelectedCountryId = createSelector(selectAdministration, state=>state.selectedCountryId);
export const selectSelectedProvinceOrStateId = createSelector(selectAdministration, state=>state.selectedProvinceOrStateId);
export const selectSelectedRegionId = createSelector(selectAdministration, state=>state.selectedRegionId);
  