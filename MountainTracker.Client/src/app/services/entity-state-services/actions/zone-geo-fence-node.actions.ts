import { createAction, props } from '@ngrx/store';
import { ZoneGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'ZoneGeoFenceNode'

export const loadZoneGeoFenceNodes = createAction(`[${services}/${service}] Load ZoneGeoFenceNodes`);
export const loadZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Load ZoneGeoFenceNodes Success`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const loadZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Load ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setZoneGeoFenceNode = createAction(`[${services}/${service}] Set ZoneGeoFenceNode`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const setZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Set ZoneGeoFenceNode Success`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const setZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Set ZoneGeoFenceNode Failure`, props<{ error: string }>());

export const setZoneGeoFenceNodes = createAction(`[${services}/${service}] Set ZoneGeoFenceNodes`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const setZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Set ZoneGeoFenceNodes Success`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const setZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Set ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addZoneGeoFenceNode = createAction(`[${services}/${service}] Add ZoneGeoFenceNode`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const addZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Add ZoneGeoFenceNode Success`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const addZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Add ZoneGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertZoneGeoFenceNode = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNode`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const upsertZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNode Success`, props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const upsertZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addZoneGeoFenceNodes = createAction(`[${services}/${service}] Add ZoneGeoFenceNodes`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const addZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Add ZoneGeoFenceNodes Success`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const addZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Add ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertZoneGeoFenceNodes = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNodes`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const upsertZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNodes Success`, props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const upsertZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Upsert ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateZoneGeoFenceNode = createAction(`[${services}/${service}] Update ZoneGeoFenceNode`, props<{ update: Update<ZoneGeoFenceNode> }>());
export const updateZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Update ZoneGeoFenceNode Success`, props<{ update: Update<ZoneGeoFenceNode> }>());
export const updateZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Update ZoneGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateZoneGeoFenceNodes = createAction(`[${services}/${service}] Update ZoneGeoFenceNodes`, props<{ updates: Update<ZoneGeoFenceNode>[] }>());
export const updateZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Update ZoneGeoFenceNodes Success`, props<{ updates: Update<ZoneGeoFenceNode>[] }>());
export const updateZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Update ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapZoneGeoFenceNode = createAction(`[${services}/${service}] Map ZoneGeoFenceNode`, props<{ entityMap: EntityMapOne<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Map ZoneGeoFenceNode Success`, props<{ entityMap: EntityMapOne<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Map ZoneGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapZoneGeoFenceNodes = createAction(`[${services}/${service}] Map ZoneGeoFenceNodes`, props<{ entityMap: EntityMap<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Map ZoneGeoFenceNodes Success`, props<{ entityMap: EntityMap<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Map ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNode = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode`, props<{ id: string }>());
export const deleteZoneGeoFenceNodeSuccess = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode Success`, props<{ id: string }>());
export const deleteZoneGeoFenceNodeFailure = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNodes = createAction(`[${services}/${service}] Delete ZoneGeoFenceNodes`, props<{ ids: string[] }>());
export const deleteZoneGeoFenceNodesSuccess = createAction(`[${services}/${service}] Delete ZoneGeoFenceNodes Success`, props<{ ids: string[] }>());
export const deleteZoneGeoFenceNodesFailure = createAction(`[${services}/${service}] Delete ZoneGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNodeByPredicate = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode By Predicate`, props<{ predicate: Predicate<ZoneGeoFenceNode> }>());
export const deleteZoneGeoFenceNodeByPredicateSuccess = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode By Predicate Success`, props<{ predicate: Predicate<ZoneGeoFenceNode> }>());
export const deleteZoneGeoFenceNodeByPredicateFailure = createAction(`[${services}/${service}] Delete ZoneGeoFenceNode By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearZoneGeoFenceNodes = createAction(`[${services}/${service}] Clear ZoneGeoFenceNodes`);