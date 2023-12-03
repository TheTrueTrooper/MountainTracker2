import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Region } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/region";
import { createReducer, on } from "@ngrx/store";
import * as RegionActions from '../actions/region.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RegionState extends EntityState<Region> {
    error: string | null;
    lastError: string | null;
}

const regionAdapter: EntityAdapter<Region> = createEntityAdapter<Region>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const regionInitialState: RegionState = regionAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const regionReducer = createReducer(
    regionInitialState,
    on(RegionActions.addRegionSuccess, (state, { region }) => {
        return regionAdapter.addOne(region, { ...state, error: null })
    }),
    on(RegionActions.setRegionSuccess, (state, { region }) => {
        return regionAdapter.setOne(region, { ...state, error: null })
    }),
    on(RegionActions.upsertRegionSuccess, (state, { region }) => {
        return regionAdapter.upsertOne(region, { ...state, error: null });
    }),
    on(RegionActions.addRegionsSuccess, (state, { regions }) => {
        return regionAdapter.addMany(regions, { ...state, error: null });
    }),
    on(RegionActions.upsertRegionsSuccess, (state, { regions }) => {
        return regionAdapter.upsertMany(regions, { ...state, error: null });
    }),
    on(RegionActions.updateRegionSuccess, (state, { update }) => {
        return regionAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RegionActions.updateRegionsSuccess, (state, { updates }) => {
        return regionAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RegionActions.mapRegionSuccess, (state, { entityMap }) => {
        return regionAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RegionActions.mapRegionsSuccess, (state, { entityMap }) => {
        return regionAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RegionActions.deleteRegionSuccess, (state, { id }) => {
        return regionAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RegionActions.deleteRegionsSuccess, (state, { ids }) => {
        return regionAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RegionActions.deleteRegionByPredicateSuccess, (state, { predicate }) => {
        return regionAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RegionActions.loadRegionsSuccess, (state, { regions }) => {
        return regionAdapter.setAll(regions, { ...state, error: null });
    }),
    on(RegionActions.setRegionsSuccess, (state, { regions }) => {
        return regionAdapter.setMany(regions, { ...state, error: null });
    }),
    on(RegionActions.clearRegions, state => {
        return regionAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RegionActions.addRegionsFailure,
        RegionActions.addRegionFailure,
        RegionActions.deleteRegionsFailure,
        RegionActions.deleteRegionByPredicateFailure, 
        RegionActions.deleteRegionFailure, 
        RegionActions.loadRegionsFailure, 
        RegionActions.mapRegionsFailure, 
        RegionActions.mapRegionFailure, 
        RegionActions.updateRegionsFailure,
        RegionActions.updateRegionFailure,
        RegionActions.upsertRegionsFailure,
        RegionActions.upsertRegionFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return regionAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = regionAdapter.getSelectors();

export const selectRegionIds = selectIds;
 
export const selectRegionEntities = selectEntities;
 
export const selectAllRegions = selectAll;
 
export const selectRegionTotal = selectTotal;