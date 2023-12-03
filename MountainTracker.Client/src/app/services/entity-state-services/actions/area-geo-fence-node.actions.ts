import { createAction, props } from '@ngrx/store';
import { AreaGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Load AreaGeoFenceNode');
export const loadAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Load AreaGeoFenceNode Success', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const loadAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Load AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const setAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNode', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const setAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNode Success', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const setAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNode Failure', props<{ error: string }>());

export const setAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNodes', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const setAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNodes Success', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const setAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Set AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNode', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const addAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNode Success', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const addAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNode', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const upsertAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNode Success', props<{ areaGeoFenceNode: AreaGeoFenceNode }>());
export const upsertAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const addAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNodes', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const addAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNodes Success', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const addAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Add AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNodes', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const upsertAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNodes Success', props<{ areaGeoFenceNodes: AreaGeoFenceNode[] }>());
export const upsertAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Upsert AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNode', props<{ update: Update<AreaGeoFenceNode> }>());
export const updateAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNode Success', props<{ update: Update<AreaGeoFenceNode> }>());
export const updateAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNodes', props<{ updates: Update<AreaGeoFenceNode>[] }>());
export const updateAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNodes Success', props<{ updates: Update<AreaGeoFenceNode>[] }>());
export const updateAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Update AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNode', props<{ entityMap: EntityMapOne<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNode Success', props<{ entityMap: EntityMapOne<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNodes', props<{ entityMap: EntityMap<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNodes', props<{ entityMap: EntityMap<AreaGeoFenceNode> }>());
export const mapAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Map AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNode = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode', props<{ id: string }>());
export const deleteAreaGeoFenceNodeSuccess = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode Success', props<{ id: string }>());
export const deleteAreaGeoFenceNodeFailure = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNodes', props<{ ids: string[] }>());
export const deleteAreaGeoFenceNodesSuccess = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNodes Success', props<{ ids: string[] }>());
export const deleteAreaGeoFenceNodesFailure = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaGeoFenceNodeByPredicate = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode By Predicate', props<{ predicate: Predicate<AreaGeoFenceNode> }>());
export const deleteAreaGeoFenceNodeByPredicateSuccess = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode By Predicate Success', props<{ predicate: Predicate<AreaGeoFenceNode> }>());
export const deleteAreaGeoFenceNodeByPredicateFailure = createAction('[AreaGeoFenceNode/API] Delete AreaGeoFenceNode By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearAreaGeoFenceNodes = createAction('[AreaGeoFenceNode/API] Clear AreaGeoFenceNode');