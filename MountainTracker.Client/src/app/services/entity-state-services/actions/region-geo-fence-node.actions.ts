import { createAction, props } from '@ngrx/store';
import { RegionGeoFenceNode } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Load RegionGeoFenceNodes');
export const loadRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Load RegionGeoFenceNodes Success', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const loadRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Load RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNode', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const setRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNode Success', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const setRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNode Failure', props<{ error: string }>());

export const setRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNodes', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const setRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNodes Success', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const setRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Set RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNode', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const addRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNode Success', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const addRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNode', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const upsertRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNode Success', props<{ regionGeoFenceNode: RegionGeoFenceNode }>());
export const upsertRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNodes', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const addRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNodes Success', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const addRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Add RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNodes', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const upsertRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNodes Success', props<{ regionGeoFenceNodes: RegionGeoFenceNode[] }>());
export const upsertRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Upsert RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNode', props<{ update: Update<RegionGeoFenceNode> }>());
export const updateRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNode Success', props<{ update: Update<RegionGeoFenceNode> }>());
export const updateRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNodes', props<{ updates: Update<RegionGeoFenceNode>[] }>());
export const updateRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNodes Success', props<{ updates: Update<RegionGeoFenceNode>[] }>());
export const updateRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Update RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNode', props<{ entityMap: EntityMapOne<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNode Success', props<{ entityMap: EntityMapOne<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNodes', props<{ entityMap: EntityMap<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNodes', props<{ entityMap: EntityMap<RegionGeoFenceNode> }>());
export const mapRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Map RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNode = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode', props<{ id: string }>());
export const deleteRegionGeoFenceNodeSuccess = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode Success', props<{ id: string }>());
export const deleteRegionGeoFenceNodeFailure = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNodes', props<{ ids: string[] }>());
export const deleteRegionGeoFenceNodesSuccess = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNodes Success', props<{ ids: string[] }>());
export const deleteRegionGeoFenceNodesFailure = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNodes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionGeoFenceNodeByPredicate = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode By Predicate', props<{ predicate: Predicate<RegionGeoFenceNode> }>());
export const deleteRegionGeoFenceNodeByPredicateSuccess = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode By Predicate Success', props<{ predicate: Predicate<RegionGeoFenceNode> }>());
export const deleteRegionGeoFenceNodeByPredicateFailure = createAction('[RegionGeoFenceNode/API] Delete RegionGeoFenceNode By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRegionGeoFenceNodes = createAction('[RegionGeoFenceNode/API] Clear RegionGeoFenceNodes');