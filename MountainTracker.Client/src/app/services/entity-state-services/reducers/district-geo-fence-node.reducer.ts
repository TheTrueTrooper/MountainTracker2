import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { DistrictGeoFenceNode } from "../../../models";
import { genericSort, selectDistrictGeoFenceNodeId } from "../../../models/service-models/service-model-functions/district-geo-fence-node";
import { createReducer, on } from "@ngrx/store";
import * as DistrictGeoFenceNodeActions from '../actions/district-geo-fence-node.actions';

export interface DistrictGeoFenceNodeState extends EntityState<DistrictGeoFenceNode> {
    error: string | null;
    lastError: string | null;
}

const districtGeoFenceNodeAdapter: EntityAdapter<DistrictGeoFenceNode> = createEntityAdapter<DistrictGeoFenceNode>({
    selectId: selectDistrictGeoFenceNodeId,
    sortComparer: genericSort,
  });

const districtGeoFenceNodeInitialState: DistrictGeoFenceNodeState = districtGeoFenceNodeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const districtGeoFenceNodeReducer = createReducer(
    districtGeoFenceNodeInitialState,
    on(DistrictGeoFenceNodeActions.addDistrictGeoFenceNodeSuccess, (state, { districtGeoFenceNode }) => {
        return districtGeoFenceNodeAdapter.addOne(districtGeoFenceNode, { ...state, error: null })
    }),
    on(DistrictGeoFenceNodeActions.setDistrictGeoFenceNodeSuccess, (state, { districtGeoFenceNode }) => {
        return districtGeoFenceNodeAdapter.setOne(districtGeoFenceNode, { ...state, error: null })
    }),
    on(DistrictGeoFenceNodeActions.upsertDistrictGeoFenceNodeSuccess, (state, { districtGeoFenceNode }) => {
        return districtGeoFenceNodeAdapter.upsertOne(districtGeoFenceNode, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.addDistrictGeoFenceNodesSuccess, (state, { districtGeoFenceNodes }) => {
        return districtGeoFenceNodeAdapter.addMany(districtGeoFenceNodes, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.upsertDistrictGeoFenceNodesSuccess, (state, { districtGeoFenceNodes }) => {
        return districtGeoFenceNodeAdapter.upsertMany(districtGeoFenceNodes, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.updateDistrictGeoFenceNodeSuccess, (state, { update }) => {
        return districtGeoFenceNodeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.updateDistrictGeoFenceNodesSuccess, (state, { updates }) => {
        return districtGeoFenceNodeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.mapDistrictGeoFenceNodeSuccess, (state, { entityMap }) => {
        return districtGeoFenceNodeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.mapDistrictGeoFenceNodesSuccess, (state, { entityMap }) => {
        return districtGeoFenceNodeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodeSuccess, (state, { id }) => {
        return districtGeoFenceNodeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodesSuccess, (state, { ids }) => {
        return districtGeoFenceNodeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodeByPredicateSuccess, (state, { predicate }) => {
        return districtGeoFenceNodeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.loadDistrictGeoFenceNodesSuccess, (state, { districtGeoFenceNodes }) => {
        return districtGeoFenceNodeAdapter.setAll(districtGeoFenceNodes, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.setDistrictGeoFenceNodesSuccess, (state, { districtGeoFenceNodes }) => {
        return districtGeoFenceNodeAdapter.setMany(districtGeoFenceNodes, { ...state, error: null });
    }),
    on(DistrictGeoFenceNodeActions.clearDistrictGeoFenceNodes, state => {
        return districtGeoFenceNodeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        DistrictGeoFenceNodeActions.addDistrictGeoFenceNodesFailure,
        DistrictGeoFenceNodeActions.addDistrictGeoFenceNodeFailure,
        DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodesFailure,
        DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodeByPredicateFailure, 
        DistrictGeoFenceNodeActions.deleteDistrictGeoFenceNodeFailure, 
        DistrictGeoFenceNodeActions.loadDistrictGeoFenceNodesFailure, 
        DistrictGeoFenceNodeActions.mapDistrictGeoFenceNodesFailure, 
        DistrictGeoFenceNodeActions.mapDistrictGeoFenceNodeFailure, 
        DistrictGeoFenceNodeActions.updateDistrictGeoFenceNodesFailure,
        DistrictGeoFenceNodeActions.updateDistrictGeoFenceNodeFailure,
        DistrictGeoFenceNodeActions.upsertDistrictGeoFenceNodesFailure,
        DistrictGeoFenceNodeActions.upsertDistrictGeoFenceNodeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return districtGeoFenceNodeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = districtGeoFenceNodeAdapter.getSelectors();

export const selectDistrictGeoFenceNodeIds = selectIds;
 
export const selectDistrictGeoFenceNodeEntities = selectEntities;
 
export const selectAllDistrictGeoFenceNodes = selectAll;
 
export const selectDistrictGeoFenceNodeTotal = selectTotal;