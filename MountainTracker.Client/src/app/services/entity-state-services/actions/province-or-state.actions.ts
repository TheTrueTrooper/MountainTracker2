import { createAction, props } from '@ngrx/store';
import { ProvinceOrState } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadProvincesOrStates = createAction('[ProvinceOrState/API] Load ProvinceOrState');
export const loadProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Load ProvinceOrState Success', props<{ provincesOrStates: ProvinceOrState[] }>());
export const loadProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Load ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const setProvinceOrState = createAction('[ProvinceOrState/API] Set ProvinceOrState', props<{ provinceOrState: ProvinceOrState }>());
export const setProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Set ProvinceOrState Success', props<{ provinceOrState: ProvinceOrState }>());
export const setProvinceOrStateFailure = createAction('[ProvinceOrState/API] Set ProvinceOrState Failure', props<{ error: string }>());

export const setProvincesOrStates = createAction('[ProvinceOrState/API] Set ProvincesOrStates', props<{ provincesOrStates: ProvinceOrState[] }>());
export const setProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Set ProvincesOrStates Success', props<{ provincesOrStates: ProvinceOrState[] }>());
export const setProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Set ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const addProvinceOrState = createAction('[ProvinceOrState/API] Add ProvinceOrState', props<{ provinceOrState: ProvinceOrState }>());
export const addProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Add ProvinceOrState Success', props<{ provinceOrState: ProvinceOrState }>());
export const addProvinceOrStateFailure = createAction('[ProvinceOrState/API] Add ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertProvinceOrState = createAction('[ProvinceOrState/API] Upsert ProvinceOrState', props<{ provinceOrState: ProvinceOrState }>());
export const upsertProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Upsert ProvinceOrState Success', props<{ provinceOrState: ProvinceOrState }>());
export const upsertProvinceOrStateFailure = createAction('[ProvinceOrState/API] Upsert ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const addProvincesOrStates = createAction('[ProvinceOrState/API] Add ProvincesOrStates', props<{ provincesOrStates: ProvinceOrState[] }>());
export const addProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Add ProvincesOrStates Success', props<{ provincesOrStates: ProvinceOrState[] }>());
export const addProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Add ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertProvincesOrStates = createAction('[ProvinceOrState/API] Upsert ProvincesOrStates', props<{ provincesOrStates: ProvinceOrState[] }>());
export const upsertProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Upsert ProvincesOrStates Success', props<{ provincesOrStates: ProvinceOrState[] }>());
export const upsertProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Upsert ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateProvinceOrState = createAction('[ProvinceOrState/API] Update ProvinceOrState', props<{ update: Update<ProvinceOrState> }>());
export const updateProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Update ProvinceOrState Success', props<{ update: Update<ProvinceOrState> }>());
export const updateProvinceOrStateFailure = createAction('[ProvinceOrState/API] Update ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateProvincesOrStates = createAction('[ProvinceOrState/API] Update ProvincesOrStates', props<{ updates: Update<ProvinceOrState>[] }>());
export const updateProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Update ProvincesOrStates Success', props<{ updates: Update<ProvinceOrState>[] }>());
export const updateProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Update ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapProvinceOrState = createAction('[ProvinceOrState/API] Map ProvinceOrState', props<{ entityMap: EntityMapOne<ProvinceOrState> }>());
export const mapProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Map ProvinceOrState Success', props<{ entityMap: EntityMapOne<ProvinceOrState> }>());
export const mapProvinceOrStateFailure = createAction('[ProvinceOrState/API] Map ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapProvincesOrStates = createAction('[ProvinceOrState/API] Map ProvincesOrStates', props<{ entityMap: EntityMap<ProvinceOrState> }>());
export const mapProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Map ProvincesOrStates', props<{ entityMap: EntityMap<ProvinceOrState> }>());
export const mapProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Map ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteProvinceOrState = createAction('[ProvinceOrState/API] Delete ProvinceOrState', props<{ id: string }>());
export const deleteProvinceOrStateSuccess = createAction('[ProvinceOrState/API] Delete ProvinceOrState Success', props<{ id: string }>());
export const deleteProvinceOrStateFailure = createAction('[ProvinceOrState/API] Delete ProvinceOrState Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteProvincesOrStates = createAction('[ProvinceOrState/API] Delete ProvincesOrStates', props<{ ids: string[] }>());
export const deleteProvincesOrStatesSuccess = createAction('[ProvinceOrState/API] Delete ProvincesOrStates Success', props<{ ids: string[] }>());
export const deleteProvincesOrStatesFailure = createAction('[ProvinceOrState/API] Delete ProvincesOrStates Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteProvinceOrStateByPredicate = createAction('[ProvinceOrState/API] Delete ProvinceOrState By Predicate', props<{ predicate: Predicate<ProvinceOrState> }>());
export const deleteProvinceOrStateByPredicateSuccess = createAction('[ProvinceOrState/API] Delete ProvinceOrState By Predicate Success', props<{ predicate: Predicate<ProvinceOrState> }>());
export const deleteProvinceOrStateByPredicateFailure = createAction('[ProvinceOrState/API] Delete ProvinceOrState By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearProvincesOrStates = createAction('[ProvinceOrState/API] Clear ProvinceOrState');