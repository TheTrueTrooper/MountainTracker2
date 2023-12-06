import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { District } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/district";
import { createReducer, on } from "@ngrx/store";
import * as DistrictActions from '../actions/district.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface DistrictState extends EntityState<District> {
    error: string | null;
    lastError: string | null;
}

const districtAdapter: EntityAdapter<District> = createEntityAdapter<District>({
    selectId: (obj)=>selectQlIdFieldValue(District, obj) as number,
    sortComparer: genericSort,
  });

const districtInitialState: DistrictState = districtAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const districtReducer = createReducer(
    districtInitialState,
    on(DistrictActions.addDistrictSuccess, (state, { district }) => {
        return districtAdapter.addOne(district, { ...state, error: null })
    }),
    on(DistrictActions.setDistrictSuccess, (state, { district }) => {
        return districtAdapter.setOne(district, { ...state, error: null })
    }),
    on(DistrictActions.upsertDistrictSuccess, (state, { district }) => {
        return districtAdapter.upsertOne(district, { ...state, error: null });
    }),
    on(DistrictActions.addDistrictsSuccess, (state, { districts }) => {
        return districtAdapter.addMany(districts, { ...state, error: null });
    }),
    on(DistrictActions.upsertDistrictsSuccess, (state, { districts }) => {
        return districtAdapter.upsertMany(districts, { ...state, error: null });
    }),
    on(DistrictActions.updateDistrictSuccess, (state, { update }) => {
        return districtAdapter.updateOne(update, { ...state, error: null });
    }),
    on(DistrictActions.updateDistrictsSuccess, (state, { updates }) => {
        return districtAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(DistrictActions.mapDistrictSuccess, (state, { entityMap }) => {
        return districtAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(DistrictActions.mapDistrictsSuccess, (state, { entityMap }) => {
        return districtAdapter.map(entityMap, { ...state, error: null });
    }),
    on(DistrictActions.deleteDistrictSuccess, (state, { id }) => {
        return districtAdapter.removeOne(id, { ...state, error: null });
    }),
    on(DistrictActions.deleteDistrictsSuccess, (state, { ids }) => {
        return districtAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(DistrictActions.deleteDistrictByPredicateSuccess, (state, { predicate }) => {
        return districtAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(DistrictActions.loadDistrictsSuccess, (state, { districts }) => {
        return districtAdapter.setAll(districts, { ...state, error: null });
    }),
    on(DistrictActions.setDistrictsSuccess, (state, { districts }) => {
        return districtAdapter.setMany(districts, { ...state, error: null });
    }),
    on(DistrictActions.clearDistricts, state => {
        return districtAdapter.removeAll({ ...state, error: null });
    }),
    on(
        DistrictActions.addDistrictsFailure,
        DistrictActions.addDistrictFailure,
        DistrictActions.deleteDistrictsFailure,
        DistrictActions.deleteDistrictByPredicateFailure, 
        DistrictActions.deleteDistrictFailure, 
        DistrictActions.loadDistrictsFailure, 
        DistrictActions.mapDistrictsFailure, 
        DistrictActions.mapDistrictFailure, 
        DistrictActions.updateDistrictsFailure,
        DistrictActions.updateDistrictFailure,
        DistrictActions.upsertDistrictsFailure,
        DistrictActions.upsertDistrictFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return districtAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = districtAdapter.getSelectors();

export const selectDistrictIds = selectIds;
 
export const selectDistrictEntities = selectEntities;
 
export const selectAllDistricts = selectAll;
 
export const selectDistrictTotal = selectTotal;