import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { actions } from '../../../services/entity-state-services';

export const AdministrationFeature = "administration"

export interface AdministrationState {
    selectedCountryId: number | null;
}

const initialState: AdministrationState = {
    selectedCountryId: null
  };

export const administrationFeatureReducer = createReducer(
    initialState,
    on(actions.loadCountries, (state, {}) => {
        return {
            ...state,
            selectedCountryId: null
        };
    }),
  );

const selectAdministration = createFeatureSelector<AdministrationState>(AdministrationFeature);

export const selectSelectedCountryId = createSelector(selectAdministration, state=>state.selectedCountryId);
  