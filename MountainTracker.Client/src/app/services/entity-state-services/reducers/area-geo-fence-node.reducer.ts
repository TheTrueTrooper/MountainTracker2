import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { AreaGeoFenceNode } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/area-geo-fence-node";
import { createReducer, on } from "@ngrx/store";
import * as AreaGeoFenceNodeActions from '../actions/area-geo-fence-node.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface AreaGeoFenceNodeState extends EntityState<AreaGeoFenceNode> {
    error: string | null;
    lastError: string | null;
}

const areaGeoFenceNodeAdapter: EntityAdapter<AreaGeoFenceNode> = createEntityAdapter<AreaGeoFenceNode>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const areaGeoFenceNodeInitialState: AreaGeoFenceNodeState = areaGeoFenceNodeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const areaGeoFenceNodeReducer = createReducer(
    areaGeoFenceNodeInitialState,
    on(AreaGeoFenceNodeActions.addAreaGeoFenceNodeSuccess, (state, { areaGeoFenceNode }) => {
        return areaGeoFenceNodeAdapter.addOne(areaGeoFenceNode, { ...state, error: null })
    }),
    on(AreaGeoFenceNodeActions.setAreaGeoFenceNodeSuccess, (state, { areaGeoFenceNode }) => {
        return areaGeoFenceNodeAdapter.setOne(areaGeoFenceNode, { ...state, error: null })
    }),
    on(AreaGeoFenceNodeActions.upsertAreaGeoFenceNodeSuccess, (state, { areaGeoFenceNode }) => {
        return areaGeoFenceNodeAdapter.upsertOne(areaGeoFenceNode, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.addAreaGeoFenceNodesSuccess, (state, { areaGeoFenceNodes }) => {
        return areaGeoFenceNodeAdapter.addMany(areaGeoFenceNodes, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.upsertAreaGeoFenceNodesSuccess, (state, { areaGeoFenceNodes }) => {
        return areaGeoFenceNodeAdapter.upsertMany(areaGeoFenceNodes, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.updateAreaGeoFenceNodeSuccess, (state, { update }) => {
        return areaGeoFenceNodeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.updateAreaGeoFenceNodesSuccess, (state, { updates }) => {
        return areaGeoFenceNodeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.mapAreaGeoFenceNodeSuccess, (state, { entityMap }) => {
        return areaGeoFenceNodeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.mapAreaGeoFenceNodesSuccess, (state, { entityMap }) => {
        return areaGeoFenceNodeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.deleteAreaGeoFenceNodeSuccess, (state, { id }) => {
        return areaGeoFenceNodeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.deleteAreaGeoFenceNodesSuccess, (state, { ids }) => {
        return areaGeoFenceNodeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.deleteAreaGeoFenceNodeByPredicateSuccess, (state, { predicate }) => {
        return areaGeoFenceNodeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.loadAreaGeoFenceNodesSuccess, (state, { areaGeoFenceNodes }) => {
        return areaGeoFenceNodeAdapter.setAll(areaGeoFenceNodes, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.setAreaGeoFenceNodesSuccess, (state, { areaGeoFenceNodes }) => {
        return areaGeoFenceNodeAdapter.setMany(areaGeoFenceNodes, { ...state, error: null });
    }),
    on(AreaGeoFenceNodeActions.clearAreaGeoFenceNodes, state => {
        return areaGeoFenceNodeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        AreaGeoFenceNodeActions.addAreaGeoFenceNodesFailure,
        AreaGeoFenceNodeActions.addAreaGeoFenceNodeFailure,
        AreaGeoFenceNodeActions.deleteAreaGeoFenceNodesFailure,
        AreaGeoFenceNodeActions.deleteAreaGeoFenceNodeByPredicateFailure, 
        AreaGeoFenceNodeActions.deleteAreaGeoFenceNodeFailure, 
        AreaGeoFenceNodeActions.loadAreaGeoFenceNodesFailure, 
        AreaGeoFenceNodeActions.mapAreaGeoFenceNodesFailure, 
        AreaGeoFenceNodeActions.mapAreaGeoFenceNodeFailure, 
        AreaGeoFenceNodeActions.updateAreaGeoFenceNodesFailure,
        AreaGeoFenceNodeActions.updateAreaGeoFenceNodeFailure,
        AreaGeoFenceNodeActions.upsertAreaGeoFenceNodesFailure,
        AreaGeoFenceNodeActions.upsertAreaGeoFenceNodeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return areaGeoFenceNodeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = areaGeoFenceNodeAdapter.getSelectors();

export const selectAreaGeoFenceNodeIds = selectIds;
 
export const selectAreaGeoFenceNodeEntities = selectEntities;
 
export const selectAllAreaGeoFenceNodes = selectAll;
 
export const selectAreaGeoFenceNodeTotal = selectTotal;