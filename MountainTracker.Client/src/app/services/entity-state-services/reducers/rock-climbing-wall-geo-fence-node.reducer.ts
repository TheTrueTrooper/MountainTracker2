import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RockClimbingWallGeoFenceNode } from "../../../models";
import { genericSort, selectRockClimbingWallGeoFenceNodeId } from "../../../models/service-models/service-model-functions/rock-climbing-wall-geo-fence-node";
import { createReducer, on } from "@ngrx/store";
import * as RockClimbingWallGeoFenceNodeActions from '../actions/rock-climbing-wall-geo-fence-node.actions';

export interface RockClimbingWallGeoFenceNodeState extends EntityState<RockClimbingWallGeoFenceNode> {
    error: string | null;
    lastError: string | null;
}

const rockClimbingWallGeoFenceNodeAdapter: EntityAdapter<RockClimbingWallGeoFenceNode> = createEntityAdapter<RockClimbingWallGeoFenceNode>({
    selectId: selectRockClimbingWallGeoFenceNodeId,
    sortComparer: genericSort,
  });

const rockClimbingWallGeoFenceNodeInitialState: RockClimbingWallGeoFenceNodeState = rockClimbingWallGeoFenceNodeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const rockClimbingWallGeoFenceNodeReducer = createReducer(
    rockClimbingWallGeoFenceNodeInitialState,
    on(RockClimbingWallGeoFenceNodeActions.addRockClimbingWallGeoFenceNodeSuccess, (state, { rockClimbingWallGeoFenceNode }) => {
        return rockClimbingWallGeoFenceNodeAdapter.addOne(rockClimbingWallGeoFenceNode, { ...state, error: null })
    }),
    on(RockClimbingWallGeoFenceNodeActions.setRockClimbingWallGeoFenceNodeSuccess, (state, { rockClimbingWallGeoFenceNode }) => {
        return rockClimbingWallGeoFenceNodeAdapter.setOne(rockClimbingWallGeoFenceNode, { ...state, error: null })
    }),
    on(RockClimbingWallGeoFenceNodeActions.upsertRockClimbingWallGeoFenceNodeSuccess, (state, { rockClimbingWallGeoFenceNode }) => {
        return rockClimbingWallGeoFenceNodeAdapter.upsertOne(rockClimbingWallGeoFenceNode, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.addRockClimbingWallGeoFenceNodesSuccess, (state, { rockClimbingWallGeoFenceNodes }) => {
        return rockClimbingWallGeoFenceNodeAdapter.addMany(rockClimbingWallGeoFenceNodes, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.upsertRockClimbingWallGeoFenceNodesSuccess, (state, { rockClimbingWallGeoFenceNodes }) => {
        return rockClimbingWallGeoFenceNodeAdapter.upsertMany(rockClimbingWallGeoFenceNodes, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.updateRockClimbingWallGeoFenceNodeSuccess, (state, { update }) => {
        return rockClimbingWallGeoFenceNodeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.updateRockClimbingWallGeoFenceNodesSuccess, (state, { updates }) => {
        return rockClimbingWallGeoFenceNodeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.mapRockClimbingWallGeoFenceNodeSuccess, (state, { entityMap }) => {
        return rockClimbingWallGeoFenceNodeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.mapRockClimbingWallGeoFenceNodesSuccess, (state, { entityMap }) => {
        return rockClimbingWallGeoFenceNodeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodeSuccess, (state, { id }) => {
        return rockClimbingWallGeoFenceNodeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodesSuccess, (state, { ids }) => {
        return rockClimbingWallGeoFenceNodeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodeByPredicateSuccess, (state, { predicate }) => {
        return rockClimbingWallGeoFenceNodeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.loadRockClimbingWallGeoFenceNodesSuccess, (state, { rockClimbingWallGeoFenceNodes }) => {
        return rockClimbingWallGeoFenceNodeAdapter.setAll(rockClimbingWallGeoFenceNodes, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.setRockClimbingWallGeoFenceNodesSuccess, (state, { rockClimbingWallGeoFenceNodes }) => {
        return rockClimbingWallGeoFenceNodeAdapter.setMany(rockClimbingWallGeoFenceNodes, { ...state, error: null });
    }),
    on(RockClimbingWallGeoFenceNodeActions.clearRockClimbingWallGeoFenceNodes, state => {
        return rockClimbingWallGeoFenceNodeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RockClimbingWallGeoFenceNodeActions.addRockClimbingWallGeoFenceNodesFailure,
        RockClimbingWallGeoFenceNodeActions.addRockClimbingWallGeoFenceNodeFailure,
        RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodesFailure,
        RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodeByPredicateFailure, 
        RockClimbingWallGeoFenceNodeActions.deleteRockClimbingWallGeoFenceNodeFailure, 
        RockClimbingWallGeoFenceNodeActions.loadRockClimbingWallGeoFenceNodesFailure, 
        RockClimbingWallGeoFenceNodeActions.mapRockClimbingWallGeoFenceNodesFailure, 
        RockClimbingWallGeoFenceNodeActions.mapRockClimbingWallGeoFenceNodeFailure, 
        RockClimbingWallGeoFenceNodeActions.updateRockClimbingWallGeoFenceNodesFailure,
        RockClimbingWallGeoFenceNodeActions.updateRockClimbingWallGeoFenceNodeFailure,
        RockClimbingWallGeoFenceNodeActions.upsertRockClimbingWallGeoFenceNodesFailure,
        RockClimbingWallGeoFenceNodeActions.upsertRockClimbingWallGeoFenceNodeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return rockClimbingWallGeoFenceNodeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = rockClimbingWallGeoFenceNodeAdapter.getSelectors();

export const selectRockClimbingWallGeoFenceNodeIds = selectIds;
 
export const selectRockClimbingWallGeoFenceNodeEntities = selectEntities;
 
export const selectAllRockClimbingWallGeoFenceNodes = selectAll;
 
export const selectRockClimbingWallGeoFenceNodeTotal = selectTotal;