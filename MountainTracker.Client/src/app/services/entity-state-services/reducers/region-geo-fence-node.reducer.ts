import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RegionGeoFenceNode } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/region-geo-fence-node";
import { createReducer, on } from "@ngrx/store";
import * as RegionGeoFenceNodeActions from '../actions/region-geo-fence-node.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RegionGeoFenceNodeState extends EntityState<RegionGeoFenceNode> {
    error: string | null;
    lastError: string | null;
}

const regionGeoFenceNodeAdapter: EntityAdapter<RegionGeoFenceNode> = createEntityAdapter<RegionGeoFenceNode>({
    selectId: (obj)=>selectQlIdFieldValue(RegionGeoFenceNode, obj) as number,
    sortComparer: genericSort,
  });

const regionGeoFenceNodeInitialState: RegionGeoFenceNodeState = regionGeoFenceNodeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const regionGeoFenceNodeReducer = createReducer(
    regionGeoFenceNodeInitialState,
    on(RegionGeoFenceNodeActions.addRegionGeoFenceNodeSuccess, (state, { regionGeoFenceNode }) => {
        return regionGeoFenceNodeAdapter.addOne(regionGeoFenceNode, { ...state, error: null })
    }),
    on(RegionGeoFenceNodeActions.setRegionGeoFenceNodeSuccess, (state, { regionGeoFenceNode }) => {
        return regionGeoFenceNodeAdapter.setOne(regionGeoFenceNode, { ...state, error: null })
    }),
    on(RegionGeoFenceNodeActions.upsertRegionGeoFenceNodeSuccess, (state, { regionGeoFenceNode }) => {
        return regionGeoFenceNodeAdapter.upsertOne(regionGeoFenceNode, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.addRegionGeoFenceNodesSuccess, (state, { regionGeoFenceNodes }) => {
        return regionGeoFenceNodeAdapter.addMany(regionGeoFenceNodes, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.upsertRegionGeoFenceNodesSuccess, (state, { regionGeoFenceNodes }) => {
        return regionGeoFenceNodeAdapter.upsertMany(regionGeoFenceNodes, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.updateRegionGeoFenceNodeSuccess, (state, { update }) => {
        return regionGeoFenceNodeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.updateRegionGeoFenceNodesSuccess, (state, { updates }) => {
        return regionGeoFenceNodeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.mapRegionGeoFenceNodeSuccess, (state, { entityMap }) => {
        return regionGeoFenceNodeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.mapRegionGeoFenceNodesSuccess, (state, { entityMap }) => {
        return regionGeoFenceNodeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.deleteRegionGeoFenceNodeSuccess, (state, { id }) => {
        return regionGeoFenceNodeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.deleteRegionGeoFenceNodesSuccess, (state, { ids }) => {
        return regionGeoFenceNodeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.deleteRegionGeoFenceNodeByPredicateSuccess, (state, { predicate }) => {
        return regionGeoFenceNodeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.loadRegionGeoFenceNodesSuccess, (state, { regionGeoFenceNodes }) => {
        return regionGeoFenceNodeAdapter.setAll(regionGeoFenceNodes, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.setRegionGeoFenceNodesSuccess, (state, { regionGeoFenceNodes }) => {
        return regionGeoFenceNodeAdapter.setMany(regionGeoFenceNodes, { ...state, error: null });
    }),
    on(RegionGeoFenceNodeActions.clearRegionGeoFenceNodes, state => {
        return regionGeoFenceNodeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RegionGeoFenceNodeActions.addRegionGeoFenceNodesFailure,
        RegionGeoFenceNodeActions.addRegionGeoFenceNodeFailure,
        RegionGeoFenceNodeActions.deleteRegionGeoFenceNodesFailure,
        RegionGeoFenceNodeActions.deleteRegionGeoFenceNodeByPredicateFailure, 
        RegionGeoFenceNodeActions.deleteRegionGeoFenceNodeFailure, 
        RegionGeoFenceNodeActions.loadRegionGeoFenceNodesFailure, 
        RegionGeoFenceNodeActions.mapRegionGeoFenceNodesFailure, 
        RegionGeoFenceNodeActions.mapRegionGeoFenceNodeFailure, 
        RegionGeoFenceNodeActions.updateRegionGeoFenceNodesFailure,
        RegionGeoFenceNodeActions.updateRegionGeoFenceNodeFailure,
        RegionGeoFenceNodeActions.upsertRegionGeoFenceNodesFailure,
        RegionGeoFenceNodeActions.upsertRegionGeoFenceNodeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return regionGeoFenceNodeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = regionGeoFenceNodeAdapter.getSelectors();

export const selectRegionGeoFenceNodeIds = selectIds;
 
export const selectRegionGeoFenceNodeEntities = selectEntities;
 
export const selectAllRegionGeoFenceNodes = selectAll;
 
export const selectRegionGeoFenceNodeTotal = selectTotal;