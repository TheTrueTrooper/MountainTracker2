import { createAction, props } from '@ngrx/store';
import { RockClimbingWall } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRockClimbingWalls = createAction('[RockClimbingWall/API] Load RockClimbingWalls');
export const loadRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Load RockClimbingWalls Success', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const loadRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Load RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingWall = createAction('[RockClimbingWall/API] Set RockClimbingWall', props<{ rockClimbingWall: RockClimbingWall }>());
export const setRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Set RockClimbingWall Success', props<{ rockClimbingWall: RockClimbingWall }>());
export const setRockClimbingWallFailure = createAction('[RockClimbingWall/API] Set RockClimbingWall Failure', props<{ error: string }>());

export const setRockClimbingWalls = createAction('[RockClimbingWall/API] Set RockClimbingWalls', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const setRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Set RockClimbingWalls Success', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const setRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Set RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWall = createAction('[RockClimbingWall/API] Add RockClimbingWall', props<{ rockClimbingWall: RockClimbingWall }>());
export const addRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Add RockClimbingWall Success', props<{ rockClimbingWall: RockClimbingWall }>());
export const addRockClimbingWallFailure = createAction('[RockClimbingWall/API] Add RockClimbingWall Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWall = createAction('[RockClimbingWall/API] Upsert RockClimbingWall', props<{ rockClimbingWall: RockClimbingWall }>());
export const upsertRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Upsert RockClimbingWall Success', props<{ rockClimbingWall: RockClimbingWall }>());
export const upsertRockClimbingWallFailure = createAction('[RockClimbingWall/API] Upsert RockClimbingWall Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingWalls = createAction('[RockClimbingWall/API] Add RockClimbingWalls', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const addRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Add RockClimbingWalls Success', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const addRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Add RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingWalls = createAction('[RockClimbingWall/API] Upsert RockClimbingWalls', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const upsertRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Upsert RockClimbingWalls Success', props<{ rockClimbingWalls: RockClimbingWall[] }>());
export const upsertRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Upsert RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWall = createAction('[RockClimbingWall/API] Update RockClimbingWall', props<{ update: Update<RockClimbingWall> }>());
export const updateRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Update RockClimbingWall Success', props<{ update: Update<RockClimbingWall> }>());
export const updateRockClimbingWallFailure = createAction('[RockClimbingWall/API] Update RockClimbingWall Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingWalls = createAction('[RockClimbingWall/API] Update RockClimbingWalls', props<{ updates: Update<RockClimbingWall>[] }>());
export const updateRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Update RockClimbingWalls Success', props<{ updates: Update<RockClimbingWall>[] }>());
export const updateRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Update RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWall = createAction('[RockClimbingWall/API] Map RockClimbingWall', props<{ entityMap: EntityMapOne<RockClimbingWall> }>());
export const mapRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Map RockClimbingWall Success', props<{ entityMap: EntityMapOne<RockClimbingWall> }>());
export const mapRockClimbingWallFailure = createAction('[RockClimbingWall/API] Map RockClimbingWall Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingWalls = createAction('[RockClimbingWall/API] Map RockClimbingWalls', props<{ entityMap: EntityMap<RockClimbingWall> }>());
export const mapRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Map RockClimbingWalls Success', props<{ entityMap: EntityMap<RockClimbingWall> }>());
export const mapRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Map RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWall = createAction('[RockClimbingWall/API] Delete RockClimbingWall', props<{ id: string }>());
export const deleteRockClimbingWallSuccess = createAction('[RockClimbingWall/API] Delete RockClimbingWall Success', props<{ id: string }>());
export const deleteRockClimbingWallFailure = createAction('[RockClimbingWall/API] Delete RockClimbingWall Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWalls = createAction('[RockClimbingWall/API] Delete RockClimbingWalls', props<{ ids: string[] }>());
export const deleteRockClimbingWallsSuccess = createAction('[RockClimbingWall/API] Delete RockClimbingWalls Success', props<{ ids: string[] }>());
export const deleteRockClimbingWallsFailure = createAction('[RockClimbingWall/API] Delete RockClimbingWalls Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingWallByPredicate = createAction('[RockClimbingWall/API] Delete RockClimbingWall By Predicate', props<{ predicate: Predicate<RockClimbingWall> }>());
export const deleteRockClimbingWallByPredicateSuccess = createAction('[RockClimbingWall/API] Delete RockClimbingWall By Predicate Success', props<{ predicate: Predicate<RockClimbingWall> }>());
export const deleteRockClimbingWallByPredicateFailure = createAction('[RockClimbingWall/API] Delete RockClimbingWall By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingWalls = createAction('[RockClimbingWall/API] Clear RockClimbingWalls');