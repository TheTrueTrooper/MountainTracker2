import { createAction, props } from '@ngrx/store';
import { Zone } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadZones = createAction('[Zone/API] Load Zones');
export const loadZonesSuccess = createAction('[Zone/API] Load Zones Success', props<{ zones: Zone[] }>());
export const loadZonesFailure = createAction('[Zone/API] Load Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const setZone = createAction('[Zone/API] Set Zone', props<{ zone: Zone }>());
export const setZoneSuccess = createAction('[Zone/API] Set Zone Success', props<{ zone: Zone }>());
export const setZoneFailure = createAction('[Zone/API] Set Zone Failure', props<{ error: string }>());

export const setZones = createAction('[Zone/API] Set Zones', props<{ zones: Zone[] }>());
export const setZonesSuccess = createAction('[Zone/API] Set Zones Success', props<{ zones: Zone[] }>());
export const setZonesFailure = createAction('[Zone/API] Set Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const addZone = createAction('[Zone/API] Add Zone', props<{ zone: Zone }>());
export const addZoneSuccess = createAction('[Zone/API] Add Zone Success', props<{ zone: Zone }>());
export const addZoneFailure = createAction('[Zone/API] Add Zone Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertZone = createAction('[Zone/API] Upsert Zone', props<{ zone: Zone }>());
export const upsertZoneSuccess = createAction('[Zone/API] Upsert Zone Success', props<{ zone: Zone }>());
export const upsertZoneFailure = createAction('[Zone/API] Upsert Zone Failure', props<{ clearOnfail:boolean, error: string }>());

export const addZones = createAction('[Zone/API] Add Zones', props<{ zones: Zone[] }>());
export const addZonesSuccess = createAction('[Zone/API] Add Zones Success', props<{ zones: Zone[] }>());
export const addZonesFailure = createAction('[Zone/API] Add Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertZones = createAction('[Zone/API] Upsert Zones', props<{ zones: Zone[] }>());
export const upsertZonesSuccess = createAction('[Zone/API] Upsert Zones Success', props<{ zones: Zone[] }>());
export const upsertZonesFailure = createAction('[Zone/API] Upsert Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateZone = createAction('[Zone/API] Update Zone', props<{ update: Update<Zone> }>());
export const updateZoneSuccess = createAction('[Zone/API] Update Zone Success', props<{ update: Update<Zone> }>());
export const updateZoneFailure = createAction('[Zone/API] Update Zone Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateZones = createAction('[Zone/API] Update Zones', props<{ updates: Update<Zone>[] }>());
export const updateZonesSuccess = createAction('[Zone/API] Update Zones Success', props<{ updates: Update<Zone>[] }>());
export const updateZonesFailure = createAction('[Zone/API] Update Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapZone = createAction('[Zone/API] Map Zone', props<{ entityMap: EntityMapOne<Zone> }>());
export const mapZoneSuccess = createAction('[Zone/API] Map Zone Success', props<{ entityMap: EntityMapOne<Zone> }>());
export const mapZoneFailure = createAction('[Zone/API] Map Zone Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapZones = createAction('[Zone/API] Map Zones', props<{ entityMap: EntityMap<Zone> }>());
export const mapZonesSuccess = createAction('[Zone/API] Map Zones Success', props<{ entityMap: EntityMap<Zone> }>());
export const mapZonesFailure = createAction('[Zone/API] Map Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZone = createAction('[Zone/API] Delete Zone', props<{ id: string }>());
export const deleteZoneSuccess = createAction('[Zone/API] Delete Zone Success', props<{ id: string }>());
export const deleteZoneFailure = createAction('[Zone/API] Delete Zone Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZones = createAction('[Zone/API] Delete Zones', props<{ ids: string[] }>());
export const deleteZonesSuccess = createAction('[Zone/API] Delete Zones Success', props<{ ids: string[] }>());
export const deleteZonesFailure = createAction('[Zone/API] Delete Zones Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneByPredicate = createAction('[Zone/API] Delete Zone By Predicate', props<{ predicate: Predicate<Zone> }>());
export const deleteZoneByPredicateSuccess = createAction('[Zone/API] Delete Zone By Predicate Success', props<{ predicate: Predicate<Zone> }>());
export const deleteZoneByPredicateFailure = createAction('[Zone/API] Delete Zone By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearZones = createAction('[Zone/API] Clear Zones');