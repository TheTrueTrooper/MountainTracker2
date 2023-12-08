import { createAction, props } from '@ngrx/store';
import { RockClimbingWallGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RockClimbingWallGeoFenceNode'

export const loadRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Load RockClimbingWallGeoFenceNodes`);
export const loadRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Load RockClimbingWallGeoFenceNodes Success`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const loadRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Load RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNode`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const setRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNode Success`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const setRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNode Failure`, props<{ error: string }>());

export const setRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNodes`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const setRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNodes Success`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const setRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Set RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNode`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const addRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNode Success`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const addRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNode`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const upsertRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNode Success`, props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const upsertRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNodes`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const addRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNodes Success`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const addRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Add RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNodes`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const upsertRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNodes Success`, props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const upsertRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Upsert RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNode`, props<{ update: Update<RockClimbingWallGeoFenceNode> }>());
export const updateRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNode Success`, props<{ update: Update<RockClimbingWallGeoFenceNode> }>());
export const updateRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNodes`, props<{ updates: Update<RockClimbingWallGeoFenceNode>[] }>());
export const updateRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNodes Success`, props<{ updates: Update<RockClimbingWallGeoFenceNode>[] }>());
export const updateRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Update RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNode`, props<{ entityMap: EntityMapOne<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNode Success`, props<{ entityMap: EntityMapOne<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNodes`, props<{ entityMap: EntityMap<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNodes Success`, props<{ entityMap: EntityMap<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Map RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNode = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode`, props<{ id: string }>());
export const deleteRockClimbingWallGeoFenceNodeSuccess = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode Success`, props<{ id: string }>());
export const deleteRockClimbingWallGeoFenceNodeFailure = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNodes`, props<{ ids: string[] }>());
export const deleteRockClimbingWallGeoFenceNodesSuccess = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNodes Success`, props<{ ids: string[] }>());
export const deleteRockClimbingWallGeoFenceNodesFailure = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNodeByPredicate = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode By Predicate`, props<{ predicate: Predicate<RockClimbingWallGeoFenceNode> }>());
export const deleteRockClimbingWallGeoFenceNodeByPredicateSuccess = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode By Predicate Success`, props<{ predicate: Predicate<RockClimbingWallGeoFenceNode> }>());
export const deleteRockClimbingWallGeoFenceNodeByPredicateFailure = createAction(`[${services}/${service}] Delete RockClimbingWallGeoFenceNode By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingWallGeoFenceNodes = createAction(`[${services}/${service}] Clear RockClimbingWallGeoFenceNodes`);