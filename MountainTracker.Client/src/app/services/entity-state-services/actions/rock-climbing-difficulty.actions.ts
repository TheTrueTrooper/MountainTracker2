import { createAction, props } from '@ngrx/store';
import { RockClimbingDifficulty } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RockClimbingDifficulty'

export const loadRockClimbingDifficulties = createAction(`[${services}/${service}] Load RockClimbingDifficulties`);
export const loadRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Load RockClimbingDifficulties Success`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const loadRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Load RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingDifficulty = createAction(`[${services}/${service}] Set RockClimbingDifficulty`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const setRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Set RockClimbingDifficulty Success`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const setRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Set RockClimbingDifficulty Failure`, props<{ error: string }>());

export const setRockClimbingDifficulties = createAction(`[${services}/${service}] Set RockClimbingDifficulties`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const setRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Set RockClimbingDifficulties Success`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const setRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Set RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingDifficulty = createAction(`[${services}/${service}] Add RockClimbingDifficulty`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const addRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Add RockClimbingDifficulty Success`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const addRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Add RockClimbingDifficulty Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingDifficulty = createAction(`[${services}/${service}] Upsert RockClimbingDifficulty`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const upsertRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Upsert RockClimbingDifficulty Success`, props<{ rockClimbingDifficulty: RockClimbingDifficulty }>());
export const upsertRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Upsert RockClimbingDifficulty Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingDifficulties = createAction(`[${services}/${service}] Add RockClimbingDifficulties`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const addRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Add RockClimbingDifficulties Success`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const addRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Add RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingDifficulties = createAction(`[${services}/${service}] Upsert RockClimbingDifficulties`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const upsertRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Upsert RockClimbingDifficulties Success`, props<{ rockClimbingDifficulties: RockClimbingDifficulty[] }>());
export const upsertRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Upsert RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingDifficulty = createAction(`[${services}/${service}] Update RockClimbingDifficulty`, props<{ update: Update<RockClimbingDifficulty> }>());
export const updateRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Update RockClimbingDifficulty Success`, props<{ update: Update<RockClimbingDifficulty> }>());
export const updateRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Update RockClimbingDifficulty Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingDifficulties = createAction(`[${services}/${service}] Update RockClimbingDifficulties`, props<{ updates: Update<RockClimbingDifficulty>[] }>());
export const updateRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Update RockClimbingDifficulties Success`, props<{ updates: Update<RockClimbingDifficulty>[] }>());
export const updateRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Update RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingDifficulty = createAction(`[${services}/${service}] Map RockClimbingDifficulty`, props<{ entityMap: EntityMapOne<RockClimbingDifficulty> }>());
export const mapRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Map RockClimbingDifficulty Success`, props<{ entityMap: EntityMapOne<RockClimbingDifficulty> }>());
export const mapRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Map RockClimbingDifficulty Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingDifficulties = createAction(`[${services}/${service}] Map RockClimbingDifficulties`, props<{ entityMap: EntityMap<RockClimbingDifficulty> }>());
export const mapRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Map RockClimbingDifficulties Success`, props<{ entityMap: EntityMap<RockClimbingDifficulty> }>());
export const mapRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Map RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingDifficulty = createAction(`[${services}/${service}] Delete RockClimbingDifficulty`, props<{ id: string }>());
export const deleteRockClimbingDifficultySuccess = createAction(`[${services}/${service}] Delete RockClimbingDifficulty Success`, props<{ id: string }>());
export const deleteRockClimbingDifficultyFailure = createAction(`[${services}/${service}] Delete RockClimbingDifficulty Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingDifficulties = createAction(`[${services}/${service}] Delete RockClimbingDifficulties`, props<{ ids: string[] }>());
export const deleteRockClimbingDifficultiesSuccess = createAction(`[${services}/${service}] Delete RockClimbingDifficulties Success`, props<{ ids: string[] }>());
export const deleteRockClimbingDifficultiesFailure = createAction(`[${services}/${service}] Delete RockClimbingDifficulties Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingDifficultyByPredicate = createAction(`[${services}/${service}] Delete RockClimbingDifficulty By Predicate`, props<{ predicate: Predicate<RockClimbingDifficulty> }>());
export const deleteRockClimbingDifficultyByPredicateSuccess = createAction(`[${services}/${service}] Delete RockClimbingDifficulty By Predicate Success`, props<{ predicate: Predicate<RockClimbingDifficulty> }>());
export const deleteRockClimbingDifficultyByPredicateFailure = createAction(`[${services}/${service}] Delete RockClimbingDifficulty By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingDifficulties = createAction(`[${services}/${service}] Clear RockClimbingDifficulties`);