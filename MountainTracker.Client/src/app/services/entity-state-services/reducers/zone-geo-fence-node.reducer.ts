import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ZoneGeoFenceNode } from "../../../models";
import { genericSort, selectZoneGeoFenceNodeId } from "../../../models/service-models/service-model-functions/zone-geo-fence-node";
import { createReducer, on } from "@ngrx/store";
import * as ZoneGeoFenceNodeActions from '../actions/zone-geo-fence-node.actions';

export interface ZoneGeoFenceNodeState extends EntityState<ZoneGeoFenceNode> {
    error: string | null;
    lastError: string | null;
}

const zoneGeoFenceNodeAdapter: EntityAdapter<ZoneGeoFenceNode> = createEntityAdapter<ZoneGeoFenceNode>({
    selectId: selectZoneGeoFenceNodeId,
    sortComparer: genericSort,
  });

const zoneGeoFenceNodeInitialState: ZoneGeoFenceNodeState = zoneGeoFenceNodeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const zoneGeoFenceNodeReducer = createReducer(
    zoneGeoFenceNodeInitialState,
    on(ZoneGeoFenceNodeActions.addZoneGeoFenceNodeSuccess, (state, { zoneGeoFenceNode }) => {
        return zoneGeoFenceNodeAdapter.addOne(zoneGeoFenceNode, { ...state, error: null })
    }),
    on(ZoneGeoFenceNodeActions.setZoneGeoFenceNodeSuccess, (state, { zoneGeoFenceNode }) => {
        return zoneGeoFenceNodeAdapter.setOne(zoneGeoFenceNode, { ...state, error: null })
    }),
    on(ZoneGeoFenceNodeActions.upsertZoneGeoFenceNodeSuccess, (state, { zoneGeoFenceNode }) => {
        return zoneGeoFenceNodeAdapter.upsertOne(zoneGeoFenceNode, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.addZoneGeoFenceNodesSuccess, (state, { zoneGeoFenceNodes }) => {
        return zoneGeoFenceNodeAdapter.addMany(zoneGeoFenceNodes, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.upsertZoneGeoFenceNodesSuccess, (state, { zoneGeoFenceNodes }) => {
        return zoneGeoFenceNodeAdapter.upsertMany(zoneGeoFenceNodes, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.updateZoneGeoFenceNodeSuccess, (state, { update }) => {
        return zoneGeoFenceNodeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.updateZoneGeoFenceNodesSuccess, (state, { updates }) => {
        return zoneGeoFenceNodeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.mapZoneGeoFenceNodeSuccess, (state, { entityMap }) => {
        return zoneGeoFenceNodeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.mapZoneGeoFenceNodesSuccess, (state, { entityMap }) => {
        return zoneGeoFenceNodeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodeSuccess, (state, { id }) => {
        return zoneGeoFenceNodeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodesSuccess, (state, { ids }) => {
        return zoneGeoFenceNodeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodeByPredicateSuccess, (state, { predicate }) => {
        return zoneGeoFenceNodeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.loadZoneGeoFenceNodesSuccess, (state, { zoneGeoFenceNodes }) => {
        return zoneGeoFenceNodeAdapter.setAll(zoneGeoFenceNodes, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.setZoneGeoFenceNodesSuccess, (state, { zoneGeoFenceNodes }) => {
        return zoneGeoFenceNodeAdapter.setMany(zoneGeoFenceNodes, { ...state, error: null });
    }),
    on(ZoneGeoFenceNodeActions.clearZoneGeoFenceNodes, state => {
        return zoneGeoFenceNodeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        ZoneGeoFenceNodeActions.addZoneGeoFenceNodesFailure,
        ZoneGeoFenceNodeActions.addZoneGeoFenceNodeFailure,
        ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodesFailure,
        ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodeByPredicateFailure, 
        ZoneGeoFenceNodeActions.deleteZoneGeoFenceNodeFailure, 
        ZoneGeoFenceNodeActions.loadZoneGeoFenceNodesFailure, 
        ZoneGeoFenceNodeActions.mapZoneGeoFenceNodesFailure, 
        ZoneGeoFenceNodeActions.mapZoneGeoFenceNodeFailure, 
        ZoneGeoFenceNodeActions.updateZoneGeoFenceNodesFailure,
        ZoneGeoFenceNodeActions.updateZoneGeoFenceNodeFailure,
        ZoneGeoFenceNodeActions.upsertZoneGeoFenceNodesFailure,
        ZoneGeoFenceNodeActions.upsertZoneGeoFenceNodeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return zoneGeoFenceNodeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = zoneGeoFenceNodeAdapter.getSelectors();

export const selectZoneGeoFenceNodeIds = selectIds;
 
export const selectZoneGeoFenceNodeEntities = selectEntities;
 
export const selectAllZoneGeoFenceNodes = selectAll;
 
export const selectZoneGeoFenceNodeTotal = selectTotal;