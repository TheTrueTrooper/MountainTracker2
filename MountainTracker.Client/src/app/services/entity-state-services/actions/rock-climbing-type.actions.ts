import { createAction, props } from '@ngrx/store';
import { RockClimbingType } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRockClimbingTypes = createAction('[RockClimbingType/API] Load RockClimbingTypes');
export const loadRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Load RockClimbingTypes Success', props<{ rockClimbingType: RockClimbingType[] }>());
export const loadRockClimbingTypesFailure = createAction('[RockClimbingType/API] Load RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingType = createAction('[RockClimbingType/API] Set RockClimbingType', props<{ rockClimbingType: RockClimbingType }>());
export const setRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Set RockClimbingType Success', props<{ rockClimbingType: RockClimbingType }>());
export const setRockClimbingTypeFailure = createAction('[RockClimbingType/API] Set RockClimbingType Failure', props<{ error: string }>());

export const setRockClimbingTypes = createAction('[RockClimbingType/API] Set RockClimbingTypes', props<{ rockClimbingType: RockClimbingType[] }>());
export const setRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Set RockClimbingTypes Success', props<{ rockClimbingType: RockClimbingType[] }>());
export const setRockClimbingTypesFailure = createAction('[RockClimbingType/API] Set RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingType = createAction('[RockClimbingType/API] Add RockClimbingType', props<{ rockClimbingType: RockClimbingType }>());
export const addRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Add RockClimbingType Success', props<{ rockClimbingType: RockClimbingType }>());
export const addRockClimbingTypeFailure = createAction('[RockClimbingType/API] Add RockClimbingType Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingType = createAction('[RockClimbingType/API] Upsert RockClimbingType', props<{ rockClimbingType: RockClimbingType }>());
export const upsertRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Upsert RockClimbingType Success', props<{ rockClimbingType: RockClimbingType }>());
export const upsertRockClimbingTypeFailure = createAction('[RockClimbingType/API] Upsert RockClimbingType Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingTypes = createAction('[RockClimbingType/API] Add RockClimbingTypes', props<{ rockClimbingType: RockClimbingType[] }>());
export const addRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Add RockClimbingTypes Success', props<{ rockClimbingType: RockClimbingType[] }>());
export const addRockClimbingTypesFailure = createAction('[RockClimbingType/API] Add RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingTypes = createAction('[RockClimbingType/API] Upsert RockClimbingTypes', props<{ rockClimbingType: RockClimbingType[] }>());
export const upsertRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Upsert RockClimbingTypes Success', props<{ rockClimbingType: RockClimbingType[] }>());
export const upsertRockClimbingTypesFailure = createAction('[RockClimbingType/API] Upsert RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingType = createAction('[RockClimbingType/API] Update RockClimbingType', props<{ update: Update<RockClimbingType> }>());
export const updateRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Update RockClimbingType Success', props<{ update: Update<RockClimbingType> }>());
export const updateRockClimbingTypeFailure = createAction('[RockClimbingType/API] Update RockClimbingType Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingTypes = createAction('[RockClimbingType/API] Update RockClimbingTypes', props<{ updates: Update<RockClimbingType>[] }>());
export const updateRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Update RockClimbingTypes Success', props<{ updates: Update<RockClimbingType>[] }>());
export const updateRockClimbingTypesFailure = createAction('[RockClimbingType/API] Update RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingType = createAction('[RockClimbingType/API] Map RockClimbingType', props<{ entityMap: EntityMapOne<RockClimbingType> }>());
export const mapRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Map RockClimbingType Success', props<{ entityMap: EntityMapOne<RockClimbingType> }>());
export const mapRockClimbingTypeFailure = createAction('[RockClimbingType/API] Map RockClimbingType Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingTypes = createAction('[RockClimbingType/API] Map RockClimbingTypes', props<{ entityMap: EntityMap<RockClimbingType> }>());
export const mapRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Map RockClimbingTypes', props<{ entityMap: EntityMap<RockClimbingType> }>());
export const mapRockClimbingTypesFailure = createAction('[RockClimbingType/API] Map RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingType = createAction('[RockClimbingType/API] Delete RockClimbingType', props<{ id: string }>());
export const deleteRockClimbingTypeSuccess = createAction('[RockClimbingType/API] Delete RockClimbingType Success', props<{ id: string }>());
export const deleteRockClimbingTypeFailure = createAction('[RockClimbingType/API] Delete RockClimbingType Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingTypes = createAction('[RockClimbingType/API] Delete RockClimbingTypes', props<{ ids: string[] }>());
export const deleteRockClimbingTypesSuccess = createAction('[RockClimbingType/API] Delete RockClimbingTypes Success', props<{ ids: string[] }>());
export const deleteRockClimbingTypesFailure = createAction('[RockClimbingType/API] Delete RockClimbingTypes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingTypeByPredicate = createAction('[RockClimbingType/API] Delete RockClimbingType By Predicate', props<{ predicate: Predicate<RockClimbingType> }>());
export const deleteRockClimbingTypeByPredicateSuccess = createAction('[RockClimbingType/API] Delete RockClimbingType By Predicate Success', props<{ predicate: Predicate<RockClimbingType> }>());
export const deleteRockClimbingTypeByPredicateFailure = createAction('[RockClimbingType/API] Delete RockClimbingType By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingTypes = createAction('[RockClimbingType/API] Clear RockClimbingTypes');