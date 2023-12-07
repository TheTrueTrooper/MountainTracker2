import { createAction, props } from '@ngrx/store';
import { DistrictGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'DistrictGeoFenceNode'

export const loadDistrictGeoFenceNodes = createAction(`[${services}/${service}] Load DistrictGeoFenceNode`);
export const loadDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Load DistrictGeoFenceNode Success`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const loadDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Load DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setDistrictGeoFenceNode = createAction(`[${services}/${service}] Set DistrictGeoFenceNode`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const setDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Set DistrictGeoFenceNode Success`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const setDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Set DistrictGeoFenceNode Failure`, props<{ error: string }>());

export const setDistrictGeoFenceNodes = createAction(`[${services}/${service}] Set DistrictGeoFenceNodes`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const setDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Set DistrictGeoFenceNodes Success`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const setDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Set DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addDistrictGeoFenceNode = createAction(`[${services}/${service}] Add DistrictGeoFenceNode`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const addDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Add DistrictGeoFenceNode Success`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const addDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Add DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrictGeoFenceNode = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNode`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const upsertDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNode Success`, props<{ districtGeoFenceNode: DistrictGeoFenceNode }>());
export const upsertDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addDistrictGeoFenceNodes = createAction(`[${services}/${service}] Add DistrictGeoFenceNodes`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const addDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Add DistrictGeoFenceNodes Success`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const addDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Add DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrictGeoFenceNodes = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNodes`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const upsertDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNodes Success`, props<{ districtGeoFenceNodes: DistrictGeoFenceNode[] }>());
export const upsertDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Upsert DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateDistrictGeoFenceNode = createAction(`[${services}/${service}] Update DistrictGeoFenceNode`, props<{ update: Update<DistrictGeoFenceNode> }>());
export const updateDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Update DistrictGeoFenceNode Success`, props<{ update: Update<DistrictGeoFenceNode> }>());
export const updateDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Update DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateDistrictGeoFenceNodes = createAction(`[${services}/${service}] Update DistrictGeoFenceNodes`, props<{ updates: Update<DistrictGeoFenceNode>[] }>());
export const updateDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Update DistrictGeoFenceNodes Success`, props<{ updates: Update<DistrictGeoFenceNode>[] }>());
export const updateDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Update DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapDistrictGeoFenceNode = createAction(`[${services}/${service}] Map DistrictGeoFenceNode`, props<{ entityMap: EntityMapOne<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Map DistrictGeoFenceNode Success`, props<{ entityMap: EntityMapOne<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Map DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapDistrictGeoFenceNodes = createAction(`[${services}/${service}] Map DistrictGeoFenceNodes`, props<{ entityMap: EntityMap<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Map DistrictGeoFenceNodes Success`, props<{ entityMap: EntityMap<DistrictGeoFenceNode> }>());
export const mapDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Map DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNode = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode`, props<{ id: string }>());
export const deleteDistrictGeoFenceNodeSuccess = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode Success`, props<{ id: string }>());
export const deleteDistrictGeoFenceNodeFailure = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNodes = createAction(`[${services}/${service}] Delete DistrictGeoFenceNodes`, props<{ ids: string[] }>());
export const deleteDistrictGeoFenceNodesSuccess = createAction(`[${services}/${service}] Delete DistrictGeoFenceNodes Success`, props<{ ids: string[] }>());
export const deleteDistrictGeoFenceNodesFailure = createAction(`[${services}/${service}] Delete DistrictGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictGeoFenceNodeByPredicate = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode By Predicate`, props<{ predicate: Predicate<DistrictGeoFenceNode> }>());
export const deleteDistrictGeoFenceNodeByPredicateSuccess = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode By Predicate Success`, props<{ predicate: Predicate<DistrictGeoFenceNode> }>());
export const deleteDistrictGeoFenceNodeByPredicateFailure = createAction(`[${services}/${service}] Delete DistrictGeoFenceNode By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearDistrictGeoFenceNodes = createAction(`[${services}/${service}] Clear DistrictGeoFenceNode`);