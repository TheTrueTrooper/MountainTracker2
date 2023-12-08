import { createAction, props } from '@ngrx/store';
import { RockClimbingWall } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RockClimbingWall'

export const loadRockClimbingWalls = createAction(`[${services}/${service}] Load RockClimbingWalls`);
export const loadRockClimbingWallsSuccess = createAction(`[${services}/${service}] Load RockClimbingWalls Success`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const loadRockClimbingWallsFailure = createAction(`[${services}/${service}] Load RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingWall = createAction(`[${services}/${service}] Set RockClimbingWall`, props<{ rockClimbingWall: RockClimbingWall }>());
export const setRockClimbingWallSuccess = createAction(`[${services}/${service}] Set RockClimbingWall Success`, props<{ rockClimbingWall: RockClimbingWall }>());
export const setRockClimbingWallFailure = createAction(`[${services}/${service}] Set RockClimbingWall Failure`, props<{ error: string }>());

export const setRockClimbingWalls = createAction(`[${services}/${service}] Set RockClimbingWalls`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const setRockClimbingWallsSuccess = createAction(`[${services}/${service}] Set RockClimbingWalls Success`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const setRockClimbingWallsFailure = createAction(`[${services}/${service}] Set RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWall = createAction(`[${services}/${service}] Add RockClimbingWall`, props<{ rockClimbingWall: RockClimbingWall }>());
export const addRockClimbingWallSuccess = createAction(`[${services}/${service}] Add RockClimbingWall Success`, props<{ rockClimbingWall: RockClimbingWall }>());
export const addRockClimbingWallFailure = createAction(`[${services}/${service}] Add RockClimbingWall Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWall = createAction(`[${services}/${service}] Upsert RockClimbingWall`, props<{ rockClimbingWall: RockClimbingWall }>());
export const upsertRockClimbingWallSuccess = createAction(`[${services}/${service}] Upsert RockClimbingWall Success`, props<{ rockClimbingWall: RockClimbingWall }>());
export const upsertRockClimbingWallFailure = createAction(`[${services}/${service}] Upsert RockClimbingWall Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWalls = createAction(`[${services}/${service}] Add RockClimbingWalls`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const addRockClimbingWallsSuccess = createAction(`[${services}/${service}] Add RockClimbingWalls Success`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const addRockClimbingWallsFailure = createAction(`[${services}/${service}] Add RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWalls = createAction(`[${services}/${service}] Upsert RockClimbingWalls`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const upsertRockClimbingWallsSuccess = createAction(`[${services}/${service}] Upsert RockClimbingWalls Success`, props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const upsertRockClimbingWallsFailure = createAction(`[${services}/${service}] Upsert RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWall = createAction(`[${services}/${service}] Update RockClimbingWall`, props<{ update: Update<RockClimbingWall> }>());
export const updateRockClimbingWallSuccess = createAction(`[${services}/${service}] Update RockClimbingWall Success`, props<{ update: Update<RockClimbingWall> }>());
export const updateRockClimbingWallFailure = createAction(`[${services}/${service}] Update RockClimbingWall Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWalls = createAction(`[${services}/${service}] Update RockClimbingWalls`, props<{ updates: Update<RockClimbingWall>[] }>());
export const updateRockClimbingWallsSuccess = createAction(`[${services}/${service}] Update RockClimbingWalls Success`, props<{ updates: Update<RockClimbingWall>[] }>());
export const updateRockClimbingWallsFailure = createAction(`[${services}/${service}] Update RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWall = createAction(`[${services}/${service}] Map RockClimbingWall`, props<{ entityMap: EntityMapOne<RockClimbingWall> }>());
export const mapRockClimbingWallSuccess = createAction(`[${services}/${service}] Map RockClimbingWall Success`, props<{ entityMap: EntityMapOne<RockClimbingWall> }>());
export const mapRockClimbingWallFailure = createAction(`[${services}/${service}] Map RockClimbingWall Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWalls = createAction(`[${services}/${service}] Map RockClimbingWalls`, props<{ entityMap: EntityMap<RockClimbingWall> }>());
export const mapRockClimbingWallsSuccess = createAction(`[${services}/${service}] Map RockClimbingWalls Success`, props<{ entityMap: EntityMap<RockClimbingWall> }>());
export const mapRockClimbingWallsFailure = createAction(`[${services}/${service}] Map RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWall = createAction(`[${services}/${service}] Delete RockClimbingWall`, props<{ id: string }>());
export const deleteRockClimbingWallSuccess = createAction(`[${services}/${service}] Delete RockClimbingWall Success`, props<{ id: string }>());
export const deleteRockClimbingWallFailure = createAction(`[${services}/${service}] Delete RockClimbingWall Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWalls = createAction(`[${services}/${service}] Delete RockClimbingWalls`, props<{ ids: string[] }>());
export const deleteRockClimbingWallsSuccess = createAction(`[${services}/${service}] Delete RockClimbingWalls Success`, props<{ ids: string[] }>());
export const deleteRockClimbingWallsFailure = createAction(`[${services}/${service}] Delete RockClimbingWalls Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallByPredicate = createAction(`[${services}/${service}] Delete RockClimbingWall By Predicate`, props<{ predicate: Predicate<RockClimbingWall> }>());
export const deleteRockClimbingWallByPredicateSuccess = createAction(`[${services}/${service}] Delete RockClimbingWall By Predicate Success`, props<{ predicate: Predicate<RockClimbingWall> }>());
export const deleteRockClimbingWallByPredicateFailure = createAction(`[${services}/${service}] Delete RockClimbingWall By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingWalls = createAction(`[${services}/${service}] Clear RockClimbingWalls`);