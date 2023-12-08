import { createAction, props } from '@ngrx/store';
import { RockClimbingType } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RockClimbingType'

export const loadRockClimbingTypes = createAction(`[${services}/${service}] Load RockClimbingTypes`);
export const loadRockClimbingTypesSuccess = createAction(`[${services}/${service}] Load RockClimbingTypes Success`, props<{ rockClimbingType: RockClimbingType[] }>());
export const loadRockClimbingTypesFailure = createAction(`[${services}/${service}] Load RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingType = createAction(`[${services}/${service}] Set RockClimbingType`, props<{ rockClimbingType: RockClimbingType }>());
export const setRockClimbingTypeSuccess = createAction(`[${services}/${service}] Set RockClimbingType Success`, props<{ rockClimbingType: RockClimbingType }>());
export const setRockClimbingTypeFailure = createAction(`[${services}/${service}] Set RockClimbingType Failure`, props<{ error: string }>());

export const setRockClimbingTypes = createAction(`[${services}/${service}] Set RockClimbingTypes`, props<{ rockClimbingType: RockClimbingType[] }>());
export const setRockClimbingTypesSuccess = createAction(`[${services}/${service}] Set RockClimbingTypes Success`, props<{ rockClimbingType: RockClimbingType[] }>());
export const setRockClimbingTypesFailure = createAction(`[${services}/${service}] Set RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingType = createAction(`[${services}/${service}] Add RockClimbingType`, props<{ rockClimbingType: RockClimbingType }>());
export const addRockClimbingTypeSuccess = createAction(`[${services}/${service}] Add RockClimbingType Success`, props<{ rockClimbingType: RockClimbingType }>());
export const addRockClimbingTypeFailure = createAction(`[${services}/${service}] Add RockClimbingType Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingType = createAction(`[${services}/${service}] Upsert RockClimbingType`, props<{ rockClimbingType: RockClimbingType }>());
export const upsertRockClimbingTypeSuccess = createAction(`[${services}/${service}] Upsert RockClimbingType Success`, props<{ rockClimbingType: RockClimbingType }>());
export const upsertRockClimbingTypeFailure = createAction(`[${services}/${service}] Upsert RockClimbingType Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingTypes = createAction(`[${services}/${service}] Add RockClimbingTypes`, props<{ rockClimbingType: RockClimbingType[] }>());
export const addRockClimbingTypesSuccess = createAction(`[${services}/${service}] Add RockClimbingTypes Success`, props<{ rockClimbingType: RockClimbingType[] }>());
export const addRockClimbingTypesFailure = createAction(`[${services}/${service}] Add RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingTypes = createAction(`[${services}/${service}] Upsert RockClimbingTypes`, props<{ rockClimbingType: RockClimbingType[] }>());
export const upsertRockClimbingTypesSuccess = createAction(`[${services}/${service}] Upsert RockClimbingTypes Success`, props<{ rockClimbingType: RockClimbingType[] }>());
export const upsertRockClimbingTypesFailure = createAction(`[${services}/${service}] Upsert RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingType = createAction(`[${services}/${service}] Update RockClimbingType`, props<{ update: Update<RockClimbingType> }>());
export const updateRockClimbingTypeSuccess = createAction(`[${services}/${service}] Update RockClimbingType Success`, props<{ update: Update<RockClimbingType> }>());
export const updateRockClimbingTypeFailure = createAction(`[${services}/${service}] Update RockClimbingType Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingTypes = createAction(`[${services}/${service}] Update RockClimbingTypes`, props<{ updates: Update<RockClimbingType>[] }>());
export const updateRockClimbingTypesSuccess = createAction(`[${services}/${service}] Update RockClimbingTypes Success`, props<{ updates: Update<RockClimbingType>[] }>());
export const updateRockClimbingTypesFailure = createAction(`[${services}/${service}] Update RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingType = createAction(`[${services}/${service}] Map RockClimbingType`, props<{ entityMap: EntityMapOne<RockClimbingType> }>());
export const mapRockClimbingTypeSuccess = createAction(`[${services}/${service}] Map RockClimbingType Success`, props<{ entityMap: EntityMapOne<RockClimbingType> }>());
export const mapRockClimbingTypeFailure = createAction(`[${services}/${service}] Map RockClimbingType Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingTypes = createAction(`[${services}/${service}] Map RockClimbingTypes`, props<{ entityMap: EntityMap<RockClimbingType> }>());
export const mapRockClimbingTypesSuccess = createAction(`[${services}/${service}] Map RockClimbingTypes Success`, props<{ entityMap: EntityMap<RockClimbingType> }>());
export const mapRockClimbingTypesFailure = createAction(`[${services}/${service}] Map RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingType = createAction(`[${services}/${service}] Delete RockClimbingType`, props<{ id: string }>());
export const deleteRockClimbingTypeSuccess = createAction(`[${services}/${service}] Delete RockClimbingType Success`, props<{ id: string }>());
export const deleteRockClimbingTypeFailure = createAction(`[${services}/${service}] Delete RockClimbingType Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingTypes = createAction(`[${services}/${service}] Delete RockClimbingTypes`, props<{ ids: string[] }>());
export const deleteRockClimbingTypesSuccess = createAction(`[${services}/${service}] Delete RockClimbingTypes Success`, props<{ ids: string[] }>());
export const deleteRockClimbingTypesFailure = createAction(`[${services}/${service}] Delete RockClimbingTypes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingTypeByPredicate = createAction(`[${services}/${service}] Delete RockClimbingType By Predicate`, props<{ predicate: Predicate<RockClimbingType> }>());
export const deleteRockClimbingTypeByPredicateSuccess = createAction(`[${services}/${service}] Delete RockClimbingType By Predicate Success`, props<{ predicate: Predicate<RockClimbingType> }>());
export const deleteRockClimbingTypeByPredicateFailure = createAction(`[${services}/${service}] Delete RockClimbingType By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingTypes = createAction(`[${services}/${service}] Clear RockClimbingTypes`);