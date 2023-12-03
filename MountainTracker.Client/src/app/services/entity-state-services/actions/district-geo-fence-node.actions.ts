import { createAction, props } from '@ngrx/store';
import { DistrictGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Load DistrictGeoFenceNode');
export const loadDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Load DistrictGeoFenceNode Success', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const loadDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Load DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const setDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNode', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const setDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNode Success', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const setDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNode Failure', props<{ error: string }>());

export const setDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNodes', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const setDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNodes Success', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const setDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Set DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNode', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const addDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNode Success', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const addDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNode', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const upsertDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNode Success', props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const upsertDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const addDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNodes', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const addDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNodes Success', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const addDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Add DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNodes', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const upsertDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNodes Success', props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const upsertDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Upsert DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNode', props<{ update: Update<DistrictGeoFenceNode> }>());
export const updateDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNode Success', props<{ update: Update<DistrictGeoFenceNode> }>());
export const updateDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNodes', props<{ updates: Update<DistrictGeoFenceNode>[] }>());
export const updateDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNodes Success', props<{ updates: Update<DistrictGeoFenceNode>[] }>());
export const updateDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Update DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNode', props<{ entityMap: EntityMapOne<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNode Success', props<{ entityMap: EntityMapOne<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNodes', props<{ entityMap: EntityMap<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNodes Success', props<{ entityMap: EntityMap<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Map DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNode = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode', props<{ id: string }>());
export const deleteDistrictGeoFenceNodeSuccess = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode Success', props<{ id: string }>());
export const deleteDistrictGeoFenceNodeFailure = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNodes', props<{ ids: string[] }>());
export const deleteDistrictGeoFenceNodesSuccess = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNodes Success', props<{ ids: string[] }>());
export const deleteDistrictGeoFenceNodesFailure = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNodeByPredicate = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode By Predicate', props<{ predicate: Predicate<DistrictGeoFenceNode> }>());
export const deleteDistrictGeoFenceNodeByPredicateSuccess = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode By Predicate Success', props<{ predicate: Predicate<DistrictGeoFenceNode> }>());
export const deleteDistrictGeoFenceNodeByPredicateFailure = createAction('[DistrictGeoFenceNode/API] Delete DistrictGeoFenceNode By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearDistrictGeoFenceNodes = createAction('[DistrictGeoFenceNode/API] Clear DistrictGeoFenceNode');