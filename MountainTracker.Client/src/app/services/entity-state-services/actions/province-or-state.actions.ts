import { createAction, props } from '@ngrx/store';
import { ProvinceOrState } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'ProvinceOrState'

export const loadProvincesOrStates = createAction(`[${services}/${service}] Load ProvinceOrState`);
export const loadProvincesOrStatesSuccess = createAction(`[${services}/${service}] Load ProvinceOrState Success`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const loadProvincesOrStatesFailure = createAction(`[${services}/${service}] Load ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setProvinceOrState = createAction(`[${services}/${service}] Set ProvinceOrState`, props<{ provinceOrState: ProvinceOrState }>());
export const setProvinceOrStateSuccess = createAction(`[${services}/${service}] Set ProvinceOrState Success`, props<{ provinceOrState: ProvinceOrState }>());
export const setProvinceOrStateFailure = createAction(`[${services}/${service}] Set ProvinceOrState Failure`, props<{ error: string }>());

export const setProvincesOrStates = createAction(`[${services}/${service}] Set ProvincesOrStates`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const setProvincesOrStatesSuccess = createAction(`[${services}/${service}] Set ProvincesOrStates Success`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const setProvincesOrStatesFailure = createAction(`[${services}/${service}] Set ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addProvinceOrState = createAction(`[${services}/${service}] Add ProvinceOrState`, props<{ provinceOrState: ProvinceOrState }>());
export const addProvinceOrStateSuccess = createAction(`[${services}/${service}] Add ProvinceOrState Success`, props<{ provinceOrState: ProvinceOrState }>());
export const addProvinceOrStateFailure = createAction(`[${services}/${service}] Add ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertProvinceOrState = createAction(`[${services}/${service}] Upsert ProvinceOrState`, props<{ provinceOrState: ProvinceOrState }>());
export const upsertProvinceOrStateSuccess = createAction(`[${services}/${service}] Upsert ProvinceOrState Success`, props<{ provinceOrState: ProvinceOrState }>());
export const upsertProvinceOrStateFailure = createAction(`[${services}/${service}] Upsert ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addProvincesOrStates = createAction(`[${services}/${service}] Add ProvincesOrStates`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const addProvincesOrStatesSuccess = createAction(`[${services}/${service}] Add ProvincesOrStates Success`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const addProvincesOrStatesFailure = createAction(`[${services}/${service}] Add ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertProvincesOrStates = createAction(`[${services}/${service}] Upsert ProvincesOrStates`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const upsertProvincesOrStatesSuccess = createAction(`[${services}/${service}] Upsert ProvincesOrStates Success`, props<{ provincesOrStates: ProvinceOrState[] }>());
export const upsertProvincesOrStatesFailure = createAction(`[${services}/${service}] Upsert ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateProvinceOrState = createAction(`[${services}/${service}] Update ProvinceOrState`, props<{ update: Update<ProvinceOrState> }>());
export const updateProvinceOrStateSuccess = createAction(`[${services}/${service}] Update ProvinceOrState Success`, props<{ update: Update<ProvinceOrState> }>());
export const updateProvinceOrStateFailure = createAction(`[${services}/${service}] Update ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateProvincesOrStates = createAction(`[${services}/${service}] Update ProvincesOrStates`, props<{ updates: Update<ProvinceOrState>[] }>());
export const updateProvincesOrStatesSuccess = createAction(`[${services}/${service}] Update ProvincesOrStates Success`, props<{ updates: Update<ProvinceOrState>[] }>());
export const updateProvincesOrStatesFailure = createAction(`[${services}/${service}] Update ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapProvinceOrState = createAction(`[${services}/${service}] Map ProvinceOrState`, props<{ entityMap: EntityMapOne<ProvinceOrState> }>());
export const mapProvinceOrStateSuccess = createAction(`[${services}/${service}] Map ProvinceOrState Success`, props<{ entityMap: EntityMapOne<ProvinceOrState> }>());
export const mapProvinceOrStateFailure = createAction(`[${services}/${service}] Map ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapProvincesOrStates = createAction(`[${services}/${service}] Map ProvincesOrStates`, props<{ entityMap: EntityMap<ProvinceOrState> }>());
export const mapProvincesOrStatesSuccess = createAction(`[${services}/${service}] Map ProvincesOrStates Success`, props<{ entityMap: EntityMap<ProvinceOrState> }>());
export const mapProvincesOrStatesFailure = createAction(`[${services}/${service}] Map ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteProvinceOrState = createAction(`[${services}/${service}] Delete ProvinceOrState`, props<{ id: string }>());
export const deleteProvinceOrStateSuccess = createAction(`[${services}/${service}] Delete ProvinceOrState Success`, props<{ id: string }>());
export const deleteProvinceOrStateFailure = createAction(`[${services}/${service}] Delete ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteProvincesOrStates = createAction(`[${services}/${service}] Delete ProvincesOrStates`, props<{ ids: string[] }>());
export const deleteProvincesOrStatesSuccess = createAction(`[${services}/${service}] Delete ProvincesOrStates Success`, props<{ ids: string[] }>());
export const deleteProvincesOrStatesFailure = createAction(`[${services}/${service}] Delete ProvincesOrStates Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteProvinceOrStateByPredicate = createAction(`[${services}/${service}] Delete ProvinceOrState By Predicate`, props<{ predicate: Predicate<ProvinceOrState> }>());
export const deleteProvinceOrStateByPredicateSuccess = createAction(`[${services}/${service}] Delete ProvinceOrState By Predicate Success`, props<{ predicate: Predicate<ProvinceOrState> }>());
export const deleteProvinceOrStateByPredicateFailure = createAction(`[${services}/${service}] Delete ProvinceOrState By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearProvincesOrStates = createAction(`[${services}/${service}] Clear ProvinceOrState`);