import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { actions } from '../../../services/entity-state-services';
import * as featureActions from '../actions';

export const AdministrationFeature = "administration"

export interface AdministrationState {
    selectedCountryId: number | null;
    selectedProvinceOrStateId: number | null;
    selectedRegionId: number | null;
    selectedDistrictId: number | null;
    error: string | null;
    lastError: string | null;
}

const initialState: AdministrationState = {
    selectedCountryId: null,
    selectedProvinceOrStateId: null,
    selectedRegionId: null,
    selectedDistrictId: null,
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
            selectedRegionId: null, 
            selectedDistrictId: null,
        };
    }),
    on(featureActions.selectCountry, (state, { id }) => {
      return {
          ...state,
          selectedCountryId: id,
          selectedProvinceOrStateId: null, 
          selectedRegionId: null, 
          selectedDistrictId: null,
      };
    }),
    on(featureActions.selectProvinceOrState, (state, { id }) => {
        return {
            ...state,
            selectedProvinceOrStateId: id, 
            selectedRegionId: null, 
            selectedDistrictId: null,
        };
    }),
    on(featureActions.selectRegion, (state, { id }) => {
        return {
            ...state,
            selectedRegionId: id, 
            selectedDistrictId: null,
        };
    }),
    on(featureActions.selectDistrict, (state, { id }) => {
        return {
            ...state,
            selectedDistrictId: id
        };
    }),
    on(
        featureActions.selectDistrictFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return {
              ...state, 
              selectedDistrictId: null,
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
        featureActions.selectRegionFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return {
              ...state, 
              selectedDistrictId: null,
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
            selectedDistrictId: null,
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
            selectedDistrictId: null,
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
export const selectSelectedDistrictId = createSelector(selectAdministration, state=>state.selectedDistrictId);
  