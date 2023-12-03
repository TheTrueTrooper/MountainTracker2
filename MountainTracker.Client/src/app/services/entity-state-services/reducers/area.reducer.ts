import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Area } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/area";
import { createReducer, on } from "@ngrx/store";
import * as AreaActions from '../actions/area.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface AreaState extends EntityState<Area> {
    error: string | null;
    lastError: string | null;
}

const areaAdapter: EntityAdapter<Area> = createEntityAdapter<Area>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const areaInitialState: AreaState = areaAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const areaReducer = createReducer(
    areaInitialState,
    on(AreaActions.addAreaSuccess, (state, { area }) => {
        return areaAdapter.addOne(area, { ...state, error: null })
    }),
    on(AreaActions.setAreaSuccess, (state, { area }) => {
        return areaAdapter.setOne(area, { ...state, error: null })
    }),
    on(AreaActions.upsertAreaSuccess, (state, { area }) => {
        return areaAdapter.upsertOne(area, { ...state, error: null });
    }),
    on(AreaActions.addAreasSuccess, (state, { areas }) => {
        return areaAdapter.addMany(areas, { ...state, error: null });
    }),
    on(AreaActions.upsertAreasSuccess, (state, { areas }) => {
        return areaAdapter.upsertMany(areas, { ...state, error: null });
    }),
    on(AreaActions.updateAreaSuccess, (state, { update }) => {
        return areaAdapter.updateOne(update, { ...state, error: null });
    }),
    on(AreaActions.updateAreasSuccess, (state, { updates }) => {
        return areaAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(AreaActions.mapAreaSuccess, (state, { entityMap }) => {
        return areaAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(AreaActions.mapAreasSuccess, (state, { entityMap }) => {
        return areaAdapter.map(entityMap, { ...state, error: null });
    }),
    on(AreaActions.deleteAreaSuccess, (state, { id }) => {
        return areaAdapter.removeOne(id, { ...state, error: null });
    }),
    on(AreaActions.deleteAreasSuccess, (state, { ids }) => {
        return areaAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(AreaActions.deleteAreaByPredicateSuccess, (state, { predicate }) => {
        return areaAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(AreaActions.loadAreasSuccess, (state, { areas }) => {
        return areaAdapter.setAll(areas, { ...state, error: null });
    }),
    on(AreaActions.setAreasSuccess, (state, { areas }) => {
        return areaAdapter.setMany(areas, { ...state, error: null });
    }),
    on(AreaActions.clearAreas, state => {
        return areaAdapter.removeAll({ ...state, error: null });
    }),
    on(
        AreaActions.addAreasFailure,
        AreaActions.addAreaFailure,
        AreaActions.deleteAreasFailure,
        AreaActions.deleteAreaByPredicateFailure, 
        AreaActions.deleteAreaFailure, 
        AreaActions.loadAreasFailure, 
        AreaActions.mapAreasFailure, 
        AreaActions.mapAreaFailure, 
        AreaActions.updateAreasFailure,
        AreaActions.updateAreaFailure,
        AreaActions.upsertAreasFailure,
        AreaActions.upsertAreaFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return areaAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = areaAdapter.getSelectors();

export const selectAreaIds = selectIds;
 
export const selectAreaEntities = selectEntities;
 
export const selectAllAreas = selectAll;
 
export const selectAreaTotal = selectTotal;