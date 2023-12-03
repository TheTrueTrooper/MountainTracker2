import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Zone } from "../../../models";
import { genericSort, selectZoneId } from "../../../models/service-models/service-model-functions/zone";
import { createReducer, on } from "@ngrx/store";
import * as ZoneActions from '../actions/zone.actions';

export interface ZoneState extends EntityState<Zone> {
    error: string | null;
    lastError: string | null;
}

const zoneAdapter: EntityAdapter<Zone> = createEntityAdapter<Zone>({
    selectId: selectZoneId,
    sortComparer: genericSort,
  });

const zoneInitialState: ZoneState = zoneAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const zoneReducer = createReducer(
    zoneInitialState,
    on(ZoneActions.addZoneSuccess, (state, { zone }) => {
        return zoneAdapter.addOne(zone, { ...state, error: null })
    }),
    on(ZoneActions.setZoneSuccess, (state, { zone }) => {
        return zoneAdapter.setOne(zone, { ...state, error: null })
    }),
    on(ZoneActions.upsertZoneSuccess, (state, { zone }) => {
        return zoneAdapter.upsertOne(zone, { ...state, error: null });
    }),
    on(ZoneActions.addZonesSuccess, (state, { zones }) => {
        return zoneAdapter.addMany(zones, { ...state, error: null });
    }),
    on(ZoneActions.upsertZonesSuccess, (state, { zones }) => {
        return zoneAdapter.upsertMany(zones, { ...state, error: null });
    }),
    on(ZoneActions.updateZoneSuccess, (state, { update }) => {
        return zoneAdapter.updateOne(update, { ...state, error: null });
    }),
    on(ZoneActions.updateZonesSuccess, (state, { updates }) => {
        return zoneAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(ZoneActions.mapZoneSuccess, (state, { entityMap }) => {
        return zoneAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(ZoneActions.mapZonesSuccess, (state, { entityMap }) => {
        return zoneAdapter.map(entityMap, { ...state, error: null });
    }),
    on(ZoneActions.deleteZoneSuccess, (state, { id }) => {
        return zoneAdapter.removeOne(id, { ...state, error: null });
    }),
    on(ZoneActions.deleteZonesSuccess, (state, { ids }) => {
        return zoneAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(ZoneActions.deleteZoneByPredicateSuccess, (state, { predicate }) => {
        return zoneAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(ZoneActions.loadZonesSuccess, (state, { zones }) => {
        return zoneAdapter.setAll(zones, { ...state, error: null });
    }),
    on(ZoneActions.setZonesSuccess, (state, { zones }) => {
        return zoneAdapter.setMany(zones, { ...state, error: null });
    }),
    on(ZoneActions.clearZones, state => {
        return zoneAdapter.removeAll({ ...state, error: null });
    }),
    on(
        ZoneActions.addZonesFailure,
        ZoneActions.addZoneFailure,
        ZoneActions.deleteZonesFailure,
        ZoneActions.deleteZoneByPredicateFailure, 
        ZoneActions.deleteZoneFailure, 
        ZoneActions.loadZonesFailure, 
        ZoneActions.mapZonesFailure, 
        ZoneActions.mapZoneFailure, 
        ZoneActions.updateZonesFailure,
        ZoneActions.updateZoneFailure,
        ZoneActions.upsertZonesFailure,
        ZoneActions.upsertZoneFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return zoneAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = zoneAdapter.getSelectors();

export const selectZoneIds = selectIds;
 
export const selectZoneEntities = selectEntities;
 
export const selectAllZones = selectAll;
 
export const selectZoneTotal = selectTotal;