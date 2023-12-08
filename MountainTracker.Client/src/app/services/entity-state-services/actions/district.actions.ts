import { createAction, props } from '@ngrx/store';
import { District } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'District'

export const loadDistricts = createAction(`[${services}/${service}] Load Districts`);
export const loadDistrictsSuccess = createAction(`[${services}/${service}] Load Districts Success`, props<{ districts: District[] }>());
export const loadDistrictsFailure = createAction(`[${services}/${service}] Load Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setDistrict = createAction(`[${services}/${service}] Set District`, props<{ district: District }>());
export const setDistrictSuccess = createAction(`[${services}/${service}] Set District Success`, props<{ district: District }>());
export const setDistrictFailure = createAction(`[${services}/${service}] Set District Failure`, props<{ error: string }>());

export const setDistricts = createAction(`[${services}/${service}] Set Districts`, props<{ districts: District[] }>());
export const setDistrictsSuccess = createAction(`[${services}/${service}] Set Districts Success`, props<{ districts: District[] }>());
export const setDistrictsFailure = createAction(`[${services}/${service}] Set Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addDistrict = createAction(`[${services}/${service}] Add District`, props<{ district: District }>());
export const addDistrictSuccess = createAction(`[${services}/${service}] Add District Success`, props<{ district: District }>());
export const addDistrictFailure = createAction(`[${services}/${service}] Add District Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrict = createAction(`[${services}/${service}] Upsert District`, props<{ district: District }>());
export const upsertDistrictSuccess = createAction(`[${services}/${service}] Upsert District Success`, props<{ district: District }>());
export const upsertDistrictFailure = createAction(`[${services}/${service}] Upsert District Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addDistricts = createAction(`[${services}/${service}] Add Districts`, props<{ districts: District[] }>());
export const addDistrictsSuccess = createAction(`[${services}/${service}] Add Districts Success`, props<{ districts: District[] }>());
export const addDistrictsFailure = createAction(`[${services}/${service}] Add Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertDistricts = createAction(`[${services}/${service}] Upsert Districts`, props<{ districts: District[] }>());
export const upsertDistrictsSuccess = createAction(`[${services}/${service}] Upsert Districts Success`, props<{ districts: District[] }>());
export const upsertDistrictsFailure = createAction(`[${services}/${service}] Upsert Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateDistrict = createAction(`[${services}/${service}] Update District`, props<{ update: Update<District> }>());
export const updateDistrictSuccess = createAction(`[${services}/${service}] Update District Success`, props<{ update: Update<District> }>());
export const updateDistrictFailure = createAction(`[${services}/${service}] Update District Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateDistricts = createAction(`[${services}/${service}] Update Districts`, props<{ updates: Update<District>[] }>());
export const updateDistrictsSuccess = createAction(`[${services}/${service}] Update Districts Success`, props<{ updates: Update<District>[] }>());
export const updateDistrictsFailure = createAction(`[${services}/${service}] Update Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapDistrict = createAction(`[${services}/${service}] Map District`, props<{ entityMap: EntityMapOne<District> }>());
export const mapDistrictSuccess = createAction(`[${services}/${service}] Map District Success`, props<{ entityMap: EntityMapOne<District> }>());
export const mapDistrictFailure = createAction(`[${services}/${service}] Map District Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapDistricts = createAction(`[${services}/${service}] Map Districts`, props<{ entityMap: EntityMap<District> }>());
export const mapDistrictsSuccess = createAction(`[${services}/${service}] Map Districts Success`, props<{ entityMap: EntityMap<District> }>());
export const mapDistrictsFailure = createAction(`[${services}/${service}] Map Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrict = createAction(`[${services}/${service}] Delete District`, props<{ id: string }>());
export const deleteDistrictSuccess = createAction(`[${services}/${service}] Delete District Success`, props<{ id: string }>());
export const deleteDistrictFailure = createAction(`[${services}/${service}] Delete District Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistricts = createAction(`[${services}/${service}] Delete Districts`, props<{ ids: string[] }>());
export const deleteDistrictsSuccess = createAction(`[${services}/${service}] Delete Districts Success`, props<{ ids: string[] }>());
export const deleteDistrictsFailure = createAction(`[${services}/${service}] Delete Districts Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictByPredicate = createAction(`[${services}/${service}] Delete District By Predicate`, props<{ predicate: Predicate<District> }>());
export const deleteDistrictByPredicateSuccess = createAction(`[${services}/${service}] Delete District By Predicate Success`, props<{ predicate: Predicate<District> }>());
export const deleteDistrictByPredicateFailure = createAction(`[${services}/${service}] Delete District By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearDistricts = createAction(`[${services}/${service}] Clear Districts`);