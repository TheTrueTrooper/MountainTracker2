import { createAction, props } from '@ngrx/store';
import { District } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadDistricts = createAction('[District/API] Load Districts');
export const loadDistrictsSuccess = createAction('[District/API] Load Districts Success', props<{ districts: District[] }>());
export const loadDistrictsFailure = createAction('[District/API] Load Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const setDistrict = createAction('[District/API] Set District', props<{ district: District }>());
export const setDistrictSuccess = createAction('[District/API] Set District Success', props<{ district: District }>());
export const setDistrictFailure = createAction('[District/API] Set District Failure', props<{ error: string }>());

export const setDistricts = createAction('[District/API] Set Districts', props<{ districts: District[] }>());
export const setDistrictsSuccess = createAction('[District/API] Set Districts Success', props<{ districts: District[] }>());
export const setDistrictsFailure = createAction('[District/API] Set Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const addDistrict = createAction('[District/API] Add District', props<{ district: District }>());
export const addDistrictSuccess = createAction('[District/API] Add District Success', props<{ district: District }>());
export const addDistrictFailure = createAction('[District/API] Add District Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertDistrict = createAction('[District/API] Upsert District', props<{ district: District }>());
export const upsertDistrictSuccess = createAction('[District/API] Upsert District Success', props<{ district: District }>());
export const upsertDistrictFailure = createAction('[District/API] Upsert District Failure', props<{ clearOnfail:boolean, error: string }>());

export const addDistricts = createAction('[District/API] Add Districts', props<{ districts: District[] }>());
export const addDistrictsSuccess = createAction('[District/API] Add Districts Success', props<{ districts: District[] }>());
export const addDistrictsFailure = createAction('[District/API] Add Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertDistricts = createAction('[District/API] Upsert Districts', props<{ districts: District[] }>());
export const upsertDistrictsSuccess = createAction('[District/API] Upsert Districts Success', props<{ districts: District[] }>());
export const upsertDistrictsFailure = createAction('[District/API] Upsert Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateDistrict = createAction('[District/API] Update District', props<{ update: Update<District> }>());
export const updateDistrictSuccess = createAction('[District/API] Update District Success', props<{ update: Update<District> }>());
export const updateDistrictFailure = createAction('[District/API] Update District Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateDistricts = createAction('[District/API] Update Districts', props<{ updates: Update<District>[] }>());
export const updateDistrictsSuccess = createAction('[District/API] Update Districts Success', props<{ updates: Update<District>[] }>());
export const updateDistrictsFailure = createAction('[District/API] Update Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapDistrict = createAction('[District/API] Map District', props<{ entityMap: EntityMapOne<District> }>());
export const mapDistrictSuccess = createAction('[District/API] Map District Success', props<{ entityMap: EntityMapOne<District> }>());
export const mapDistrictFailure = createAction('[District/API] Map District Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapDistricts = createAction('[District/API] Map Districts', props<{ entityMap: EntityMap<District> }>());
export const mapDistrictsSuccess = createAction('[District/API] Map Districts Success', props<{ entityMap: EntityMap<District> }>());
export const mapDistrictsFailure = createAction('[District/API] Map Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrict = createAction('[District/API] Delete District', props<{ id: string }>());
export const deleteDistrictSuccess = createAction('[District/API] Delete District Success', props<{ id: string }>());
export const deleteDistrictFailure = createAction('[District/API] Delete District Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistricts = createAction('[District/API] Delete Districts', props<{ ids: string[] }>());
export const deleteDistrictsSuccess = createAction('[District/API] Delete Districts Success', props<{ ids: string[] }>());
export const deleteDistrictsFailure = createAction('[District/API] Delete Districts Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteDistrictByPredicate = createAction('[District/API] Delete District By Predicate', props<{ predicate: Predicate<District> }>());
export const deleteDistrictByPredicateSuccess = createAction('[District/API] Delete District By Predicate Success', props<{ predicate: Predicate<District> }>());
export const deleteDistrictByPredicateFailure = createAction('[District/API] Delete District By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearDistricts = createAction('[District/API] Clear Districts');