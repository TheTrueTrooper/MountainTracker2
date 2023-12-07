import { createAction, props } from '@ngrx/store';
import { Zone } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'Zone'

export const loadZones = createAction(`[${services}/${service}] Load Zones`);
export const loadZonesSuccess = createAction(`[${services}/${service}] Load Zones Success`, props<{ zones: Zone[] }>());
export const loadZonesFailure = createAction(`[${services}/${service}] Load Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setZone = createAction(`[${services}/${service}] Set Zone`, props<{ zone: Zone }>());
export const setZoneSuccess = createAction(`[${services}/${service}] Set Zone Success`, props<{ zone: Zone }>());
export const setZoneFailure = createAction(`[${services}/${service}] Set Zone Failure`, props<{ error: string }>());

export const setZones = createAction(`[${services}/${service}] Set Zones`, props<{ zones: Zone[] }>());
export const setZonesSuccess = createAction(`[${services}/${service}] Set Zones Success`, props<{ zones: Zone[] }>());
export const setZonesFailure = createAction(`[${services}/${service}] Set Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addZone = createAction(`[${services}/${service}] Add Zone`, props<{ zone: Zone }>());
export const addZoneSuccess = createAction(`[${services}/${service}] Add Zone Success`, props<{ zone: Zone }>());
export const addZoneFailure = createAction(`[${services}/${service}] Add Zone Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertZone = createAction(`[${services}/${service}] Upsert Zone`, props<{ zone: Zone }>());
export const upsertZoneSuccess = createAction(`[${services}/${service}] Upsert Zone Success`, props<{ zone: Zone }>());
export const upsertZoneFailure = createAction(`[${services}/${service}] Upsert Zone Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addZones = createAction(`[${services}/${service}] Add Zones`, props<{ zones: Zone[] }>());
export const addZonesSuccess = createAction(`[${services}/${service}] Add Zones Success`, props<{ zones: Zone[] }>());
export const addZonesFailure = createAction(`[${services}/${service}] Add Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertZones = createAction(`[${services}/${service}] Upsert Zones`, props<{ zones: Zone[] }>());
export const upsertZonesSuccess = createAction(`[${services}/${service}] Upsert Zones Success`, props<{ zones: Zone[] }>());
export const upsertZonesFailure = createAction(`[${services}/${service}] Upsert Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateZone = createAction(`[${services}/${service}] Update Zone`, props<{ update: Update<Zone> }>());
export const updateZoneSuccess = createAction(`[${services}/${service}] Update Zone Success`, props<{ update: Update<Zone> }>());
export const updateZoneFailure = createAction(`[${services}/${service}] Update Zone Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateZones = createAction(`[${services}/${service}] Update Zones`, props<{ updates: Update<Zone>[] }>());
export const updateZonesSuccess = createAction(`[${services}/${service}] Update Zones Success`, props<{ updates: Update<Zone>[] }>());
export const updateZonesFailure = createAction(`[${services}/${service}] Update Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapZone = createAction(`[${services}/${service}] Map Zone`, props<{ entityMap: EntityMapOne<Zone> }>());
export const mapZoneSuccess = createAction(`[${services}/${service}] Map Zone Success`, props<{ entityMap: EntityMapOne<Zone> }>());
export const mapZoneFailure = createAction(`[${services}/${service}] Map Zone Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapZones = createAction(`[${services}/${service}] Map Zones`, props<{ entityMap: EntityMap<Zone> }>());
export const mapZonesSuccess = createAction(`[${services}/${service}] Map Zones Success`, props<{ entityMap: EntityMap<Zone> }>());
export const mapZonesFailure = createAction(`[${services}/${service}] Map Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZone = createAction(`[${services}/${service}] Delete Zone`, props<{ id: string }>());
export const deleteZoneSuccess = createAction(`[${services}/${service}] Delete Zone Success`, props<{ id: string }>());
export const deleteZoneFailure = createAction(`[${services}/${service}] Delete Zone Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZones = createAction(`[${services}/${service}] Delete Zones`, props<{ ids: string[] }>());
export const deleteZonesSuccess = createAction(`[${services}/${service}] Delete Zones Success`, props<{ ids: string[] }>());
export const deleteZonesFailure = createAction(`[${services}/${service}] Delete Zones Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneByPredicate = createAction(`[${services}/${service}] Delete Zone By Predicate`, props<{ predicate: Predicate<Zone> }>());
export const deleteZoneByPredicateSuccess = createAction(`[${services}/${service}] Delete Zone By Predicate Success`, props<{ predicate: Predicate<Zone> }>());
export const deleteZoneByPredicateFailure = createAction(`[${services}/${service}] Delete Zone By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearZones = createAction(`[${services}/${service}] Clear Zones`);