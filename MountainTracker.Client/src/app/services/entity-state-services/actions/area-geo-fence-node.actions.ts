import { createAction, props } from '@ngrx/store';
import { AreaGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from "./shared-action-constants";

const service = 'AreaGeoFenceNode'

export const loadAreaGeoFenceNodes = createAction(`[${services}/${service}] Load AreaGeoFenceNode`);
export const loadAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Load AreaGeoFenceNode Success`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const loadAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Load AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setAreaGeoFenceNode = createAction(`[${services}/${service}] Set AreaGeoFenceNode`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const setAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Set AreaGeoFenceNode Success`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const setAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Set AreaGeoFenceNode Failure`, props<{ error: string }>());

export const setAreaGeoFenceNodes = createAction(`[${services}/${service}] Set AreaGeoFenceNodes`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const setAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Set AreaGeoFenceNodes Success`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const setAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Set AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addAreaGeoFenceNode = createAction(`[${services}/${service}] Add AreaGeoFenceNode`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const addAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Add AreaGeoFenceNode Success`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const addAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Add AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertAreaGeoFenceNode = createAction(`[${services}] Upsert AreaGeoFenceNode`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const upsertAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Upsert AreaGeoFenceNode Success`, props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const upsertAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Upsert AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addAreaGeoFenceNodes = createAction(`[${services}/${service}] Add AreaGeoFenceNodes`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const addAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Add AreaGeoFenceNodes Success`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const addAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Add AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertAreaGeoFenceNodes = createAction(`[${services}/${service}] Upsert AreaGeoFenceNodes`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const upsertAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Upsert AreaGeoFenceNodes Success`, props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const upsertAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Upsert AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateAreaGeoFenceNode = createAction(`[${services}/${service}] Update AreaGeoFenceNode`, props<{ update: Update<AreaGeoFenceNode> }>());
export const updateAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Update AreaGeoFenceNode Success`, props<{ update: Update<AreaGeoFenceNode> }>());
export const updateAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Update AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateAreaGeoFenceNodes = createAction(`[${services}/${service}] Update AreaGeoFenceNodes`, props<{ updates: Update<AreaGeoFenceNode>[] }>());
export const updateAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Update AreaGeoFenceNodes Success`, props<{ updates: Update<AreaGeoFenceNode>[] }>());
export const updateAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Update AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapAreaGeoFenceNode = createAction(`[${services}/${service}] Map AreaGeoFenceNode`, props<{ entityMap: EntityMapOne<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Map AreaGeoFenceNode Success`, props<{ entityMap: EntityMapOne<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Map AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapAreaGeoFenceNodes = createAction(`[${services}/${service}] Map AreaGeoFenceNodes`, props<{ entityMap: EntityMap<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Map AreaGeoFenceNodes Success`, props<{ entityMap: EntityMap<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Map AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNode = createAction(`[${services}/${service}] Delete AreaGeoFenceNode`, props<{ id: string }>());
export const deleteAreaGeoFenceNodeSuccess = createAction(`[${services}/${service}] Delete AreaGeoFenceNode Success`, props<{ id: string }>());
export const deleteAreaGeoFenceNodeFailure = createAction(`[${services}/${service}] Delete AreaGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNodes = createAction(`[${services}/${service}] Delete AreaGeoFenceNodes`, props<{ ids: string[] }>());
export const deleteAreaGeoFenceNodesSuccess = createAction(`[${services}/${service}] Delete AreaGeoFenceNodes Success`, props<{ ids: string[] }>());
export const deleteAreaGeoFenceNodesFailure = createAction(`[${services}/${service}] Delete AreaGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNodeByPredicate = createAction(`[${services}/${service}] Delete AreaGeoFenceNode By Predicate`, props<{ predicate: Predicate<AreaGeoFenceNode> }>());
export const deleteAreaGeoFenceNodeByPredicateSuccess = createAction(`[${services}/${service}] Delete AreaGeoFenceNode By Predicate Success`, props<{ predicate: Predicate<AreaGeoFenceNode> }>());
export const deleteAreaGeoFenceNodeByPredicateFailure = createAction(`[${services}/${service}] Delete AreaGeoFenceNode By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearAreaGeoFenceNodes = createAction(`[${services}/${service}] Clear AreaGeoFenceNode`);