import { createAction, props } from '@ngrx/store';
import { ZoneGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Load ZoneGeoFenceNodes');
export const loadZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Load ZoneGeoFenceNodes Success', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const loadZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Load ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const setZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNode', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const setZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNode Success', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const setZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNode Failure', props<{ error: string }>());

export const setZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNodes', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const setZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNodes Success', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const setZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Set ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNode', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const addZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNode Success', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const addZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNode', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const upsertZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNode Success', props<{ zoneGeoFenceNode: ZoneGeoFenceNode }>());
export const upsertZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const addZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNodes', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const addZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNodes Success', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const addZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Add ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNodes', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const upsertZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNodes Success', props<{ zoneGeoFenceNodes: ZoneGeoFenceNode[] }>());
export const upsertZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Upsert ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNode', props<{ update: Update<ZoneGeoFenceNode> }>());
export const updateZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNode Success', props<{ update: Update<ZoneGeoFenceNode> }>());
export const updateZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNodes', props<{ updates: Update<ZoneGeoFenceNode>[] }>());
export const updateZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNodes Success', props<{ updates: Update<ZoneGeoFenceNode>[] }>());
export const updateZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Update ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNode', props<{ entityMap: EntityMapOne<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNode Success', props<{ entityMap: EntityMapOne<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNodes', props<{ entityMap: EntityMap<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNodes Success', props<{ entityMap: EntityMap<ZoneGeoFenceNode> }>());
export const mapZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Map ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNode = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode', props<{ id: string }>());
export const deleteZoneGeoFenceNodeSuccess = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode Success', props<{ id: string }>());
export const deleteZoneGeoFenceNodeFailure = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNodes', props<{ ids: string[] }>());
export const deleteZoneGeoFenceNodesSuccess = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNodes Success', props<{ ids: string[] }>());
export const deleteZoneGeoFenceNodesFailure = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteZoneGeoFenceNodeByPredicate = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode By Predicate', props<{ predicate: Predicate<ZoneGeoFenceNode> }>());
export const deleteZoneGeoFenceNodeByPredicateSuccess = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode By Predicate Success', props<{ predicate: Predicate<ZoneGeoFenceNode> }>());
export const deleteZoneGeoFenceNodeByPredicateFailure = createAction('[ZoneGeoFenceNode/API] Delete ZoneGeoFenceNode By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearZoneGeoFenceNodes = createAction('[ZoneGeoFenceNode/API] Clear ZoneGeoFenceNodes');