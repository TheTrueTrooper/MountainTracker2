import { createAction, props } from '@ngrx/store';
import { RegionGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RegionGeoFenceNode'

export const loadRegionGeoFenceNodes = createAction(`[${services}/${service}] Load RegionGeoFenceNodes`);
export const loadRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Load RegionGeoFenceNodes Success`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const loadRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Load RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRegionGeoFenceNode = createAction(`[${services}/${service}] Set RegionGeoFenceNode`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const setRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Set RegionGeoFenceNode Success`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const setRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Set RegionGeoFenceNode Failure`, props<{ error: string }>());

export const setRegionGeoFenceNodes = createAction(`[${services}/${service}] Set RegionGeoFenceNodes`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const setRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Set RegionGeoFenceNodes Success`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const setRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Set RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRegionGeoFenceNode = createAction(`[${services}/${service}] Add RegionGeoFenceNode`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const addRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Add RegionGeoFenceNode Success`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const addRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Add RegionGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRegionGeoFenceNode = createAction(`[${services}/${service}] Upsert RegionGeoFenceNode`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const upsertRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Upsert RegionGeoFenceNode Success`, props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const upsertRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Upsert RegionGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRegionGeoFenceNodes = createAction(`[${services}/${service}] Add RegionGeoFenceNodes`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const addRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Add RegionGeoFenceNodes Success`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const addRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Add RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRegionGeoFenceNodes = createAction(`[${services}/${service}] Upsert RegionGeoFenceNodes`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const upsertRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Upsert RegionGeoFenceNodes Success`, props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const upsertRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Upsert RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRegionGeoFenceNode = createAction(`[${services}/${service}] Update RegionGeoFenceNode`, props<{ update: Update<RegionGeoFenceNode> }>());
export const updateRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Update RegionGeoFenceNode Success`, props<{ update: Update<RegionGeoFenceNode> }>());
export const updateRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Update RegionGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRegionGeoFenceNodes = createAction(`[${services}/${service}] Update RegionGeoFenceNodes`, props<{ updates: Update<RegionGeoFenceNode>[] }>());
export const updateRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Update RegionGeoFenceNodes Success`, props<{ updates: Update<RegionGeoFenceNode>[] }>());
export const updateRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Update RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRegionGeoFenceNode = createAction(`[${services}/${service}] Map RegionGeoFenceNode`, props<{ entityMap: EntityMapOne<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Map RegionGeoFenceNode Success`, props<{ entityMap: EntityMapOne<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Map RegionGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRegionGeoFenceNodes = createAction(`[${services}/${service}] Map RegionGeoFenceNodes`, props<{ entityMap: EntityMap<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Map RegionGeoFenceNodes Success`, props<{ entityMap: EntityMap<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Map RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNode = createAction(`[${services}/${service}] Delete RegionGeoFenceNode`, props<{ id: string }>());
export const deleteRegionGeoFenceNodeSuccess = createAction(`[${services}/${service}] Delete RegionGeoFenceNode Success`, props<{ id: string }>());
export const deleteRegionGeoFenceNodeFailure = createAction(`[${services}/${service}] Delete RegionGeoFenceNode Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNodes = createAction(`[${services}/${service}] Delete RegionGeoFenceNodes`, props<{ ids: string[] }>());
export const deleteRegionGeoFenceNodesSuccess = createAction(`[${services}/${service}] Delete RegionGeoFenceNodes Success`, props<{ ids: string[] }>());
export const deleteRegionGeoFenceNodesFailure = createAction(`[${services}/${service}] Delete RegionGeoFenceNodes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNodeByPredicate = createAction(`[${services}/${service}] Delete RegionGeoFenceNode By Predicate`, props<{ predicate: Predicate<RegionGeoFenceNode> }>());
export const deleteRegionGeoFenceNodeByPredicateSuccess = createAction(`[${services}/${service}] Delete RegionGeoFenceNode By Predicate Success`, props<{ predicate: Predicate<RegionGeoFenceNode> }>());
export const deleteRegionGeoFenceNodeByPredicateFailure = createAction(`[${services}/${service}] Delete RegionGeoFenceNode By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRegionGeoFenceNodes = createAction(`[${services}/${service}] Clear RegionGeoFenceNodes`);