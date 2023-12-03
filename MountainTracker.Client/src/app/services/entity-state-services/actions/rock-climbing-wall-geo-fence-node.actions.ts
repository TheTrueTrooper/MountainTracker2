import { createAction, props } from '@ngrx/store';
import { RockClimbingWallGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Load RockClimbingWallGeoFenceNodes');
export const loadRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Load RockClimbingWallGeoFenceNodes Success', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const loadRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Load RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNode', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const setRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNode Success', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const setRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNode Failure', props<{ error: string }>());

export const setRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNodes', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const setRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNodes Success', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const setRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Set RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNode', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const addRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNode Success', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const addRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNode', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const upsertRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNode Success', props<{ rockClimbingWallGeoFenceNode: RockClimbingWallGeoFenceNode }>());
export const upsertRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNodes', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const addRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNodes Success', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const addRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Add RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNodes', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const upsertRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNodes Success', props<{ rockClimbingWallGeoFenceNodes: RockClimbingWallGeoFenceNode[] }>());
export const upsertRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Upsert RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNode', props<{ update: Update<RockClimbingWallGeoFenceNode> }>());
export const updateRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNode Success', props<{ update: Update<RockClimbingWallGeoFenceNode> }>());
export const updateRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNodes', props<{ updates: Update<RockClimbingWallGeoFenceNode>[] }>());
export const updateRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNodes Success', props<{ updates: Update<RockClimbingWallGeoFenceNode>[] }>());
export const updateRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Update RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNode', props<{ entityMap: EntityMapOne<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNode Success', props<{ entityMap: EntityMapOne<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNodes', props<{ entityMap: EntityMap<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNodes Success', props<{ entityMap: EntityMap<RockClimbingWallGeoFenceNode> }>());
export const mapRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Map RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNode = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode', props<{ id: string }>());
export const deleteRockClimbingWallGeoFenceNodeSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode Success', props<{ id: string }>());
export const deleteRockClimbingWallGeoFenceNodeFailure = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNodes', props<{ ids: string[] }>());
export const deleteRockClimbingWallGeoFenceNodesSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNodes Success', props<{ ids: string[] }>());
export const deleteRockClimbingWallGeoFenceNodesFailure = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallGeoFenceNodeByPredicate = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode By Predicate', props<{ predicate: Predicate<RockClimbingWallGeoFenceNode> }>());
export const deleteRockClimbingWallGeoFenceNodeByPredicateSuccess = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode By Predicate Success', props<{ predicate: Predicate<RockClimbingWallGeoFenceNode> }>());
export const deleteRockClimbingWallGeoFenceNodeByPredicateFailure = createAction('[RockClimbingWallGeoFenceNode/API] Delete RockClimbingWallGeoFenceNode By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingWallGeoFenceNodes = createAction('[RockClimbingWallGeoFenceNode/API] Clear RockClimbingWallGeoFenceNodes');