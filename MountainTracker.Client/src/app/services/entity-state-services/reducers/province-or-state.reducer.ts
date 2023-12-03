import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ProvinceOrState } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/province-or-state";
import { createReducer, on } from "@ngrx/store";
import * as ProvinceOrStateActions from '../actions/province-or-state.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface ProvinceOrStateState extends EntityState<ProvinceOrState> {
    error: string | null;
    lastError: string | null;
}

const provinceOrStateAdapter: EntityAdapter<ProvinceOrState> = createEntityAdapter<ProvinceOrState>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const provinceOrStateInitialState: ProvinceOrStateState = provinceOrStateAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const provinceOrStateReducer = createReducer(
    provinceOrStateInitialState,
    on(ProvinceOrStateActions.addProvinceOrStateSuccess, (state, { provinceOrState }) => {
        return provinceOrStateAdapter.addOne(provinceOrState, { ...state, error: null })
    }),
    on(ProvinceOrStateActions.setProvinceOrStateSuccess, (state, { provinceOrState }) => {
        return provinceOrStateAdapter.setOne(provinceOrState, { ...state, error: null })
    }),
    on(ProvinceOrStateActions.upsertProvinceOrStateSuccess, (state, { provinceOrState }) => {
        return provinceOrStateAdapter.upsertOne(provinceOrState, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.addProvincesOrStatesSuccess, (state, { provincesOrStates }) => {
        return provinceOrStateAdapter.addMany(provincesOrStates, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.upsertProvincesOrStatesSuccess, (state, { provincesOrStates }) => {
        return provinceOrStateAdapter.upsertMany(provincesOrStates, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.updateProvinceOrStateSuccess, (state, { update }) => {
        return provinceOrStateAdapter.updateOne(update, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.updateProvincesOrStatesSuccess, (state, { updates }) => {
        return provinceOrStateAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.mapProvinceOrStateSuccess, (state, { entityMap }) => {
        return provinceOrStateAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.mapProvincesOrStatesSuccess, (state, { entityMap }) => {
        return provinceOrStateAdapter.map(entityMap, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.deleteProvinceOrStateSuccess, (state, { id }) => {
        return provinceOrStateAdapter.removeOne(id, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.deleteProvincesOrStatesSuccess, (state, { ids }) => {
        return provinceOrStateAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.deleteProvinceOrStateByPredicateSuccess, (state, { predicate }) => {
        return provinceOrStateAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.loadProvincesOrStatesSuccess, (state, { provincesOrStates }) => {
        return provinceOrStateAdapter.setAll(provincesOrStates, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.setProvincesOrStatesSuccess, (state, { provincesOrStates }) => {
        return provinceOrStateAdapter.setMany(provincesOrStates, { ...state, error: null });
    }),
    on(ProvinceOrStateActions.clearProvincesOrStates, state => {
        return provinceOrStateAdapter.removeAll({ ...state, error: null });
    }),
    on(
        ProvinceOrStateActions.addProvincesOrStatesFailure,
        ProvinceOrStateActions.addProvinceOrStateFailure,
        ProvinceOrStateActions.deleteProvincesOrStatesFailure,
        ProvinceOrStateActions.deleteProvinceOrStateByPredicateFailure, 
        ProvinceOrStateActions.deleteProvinceOrStateFailure, 
        ProvinceOrStateActions.loadProvincesOrStatesFailure, 
        ProvinceOrStateActions.mapProvincesOrStatesFailure, 
        ProvinceOrStateActions.mapProvinceOrStateFailure, 
        ProvinceOrStateActions.updateProvincesOrStatesFailure,
        ProvinceOrStateActions.updateProvinceOrStateFailure,
        ProvinceOrStateActions.upsertProvincesOrStatesFailure,
        ProvinceOrStateActions.upsertProvinceOrStateFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return provinceOrStateAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = provinceOrStateAdapter.getSelectors();

export const selectProvinceOrStateIds = selectIds;
 
export const selectProvinceOrStateEntities = selectEntities;
 
export const selectAllProvincesOrStates = selectAll;
 
export const selectProvinceOrStateTotal = selectTotal;