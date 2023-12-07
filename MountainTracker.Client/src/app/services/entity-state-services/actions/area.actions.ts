import { createAction, props } from '@ngrx/store';
import { Area } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'Area'

export const loadAreas = createAction(`[${services}/${service}] Load Area`);
export const loadAreasSuccess = createAction(`[${services}/${service}] Load Area Success`, props<{ areas: Area[] }>());
export const loadAreasFailure = createAction(`[${services}/${service}] Load Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setArea = createAction(`[${services}/${service}] Set Area`, props<{ area: Area }>());
export const setAreaSuccess = createAction(`[${services}/${service}] Set Area Success`, props<{ area: Area }>());
export const setAreaFailure = createAction(`[${services}/${service}] Set Area Failure`, props<{ error: string }>());

export const setAreas = createAction(`[${services}/${service}] Set Areas`, props<{ areas: Area[] }>());
export const setAreasSuccess = createAction(`[${services}/${service}] Set Areas Success`, props<{ areas: Area[] }>());
export const setAreasFailure = createAction(`[${services}/${service}] Set Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addArea = createAction(`[${services}/${service}] Add Area`, props<{ area: Area }>());
export const addAreaSuccess = createAction(`[${services}/${service}] Add Area Success`, props<{ area: Area }>());
export const addAreaFailure = createAction(`[${services}/${service}] Add Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertArea = createAction(`[${services}/${service}] Upsert Area`, props<{ area: Area }>());
export const upsertAreaSuccess = createAction(`[${services}/${service}] Upsert Area Success`, props<{ area: Area }>());
export const upsertAreaFailure = createAction(`[${services}/${service}] Upsert Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addAreas = createAction(`[${services}/${service}] Add Areas`, props<{ areas: Area[] }>());
export const addAreasSuccess = createAction(`[${services}/${service}] Add Areas Success`, props<{ areas: Area[] }>());
export const addAreasFailure = createAction(`[${services}/${service}] Add Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertAreas = createAction(`[${services}/${service}] Upsert Areas`, props<{ areas: Area[] }>());
export const upsertAreasSuccess = createAction(`[${services}/${service}] Upsert Areas Success`, props<{ areas: Area[] }>());
export const upsertAreasFailure = createAction(`[${services}/${service}] Upsert Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateArea = createAction(`[${services}/${service}] Update Area`, props<{ update: Update<Area> }>());
export const updateAreaSuccess = createAction(`[${services}/${service}] Update Area Success`, props<{ update: Update<Area> }>());
export const updateAreaFailure = createAction(`[${services}/${service}] Update Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateAreas = createAction(`[${services}/${service}] Update Areas`, props<{ updates: Update<Area>[] }>());
export const updateAreasSuccess = createAction(`[${services}/${service}] Update Areas Success`, props<{ updates: Update<Area>[] }>());
export const updateAreasFailure = createAction(`[${services}/${service}] Update Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapArea = createAction(`[${services}/${service}] Map Area`, props<{ entityMap: EntityMapOne<Area> }>());
export const mapAreaSuccess = createAction(`[${services}/${service}] Map Area Success`, props<{ entityMap: EntityMapOne<Area> }>());
export const mapAreaFailure = createAction(`[${services}/${service}] Map Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapAreas = createAction(`[${services}/${service}] Map Areas`, props<{ entityMap: EntityMap<Area> }>());
export const mapAreasSuccess = createAction(`[${services}/${service}] Map Areas Success`, props<{ entityMap: EntityMap<Area> }>());
export const mapAreasFailure = createAction(`[${services}/${service}] Map Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteArea = createAction(`[${services}/${service}] Delete Area`, props<{ id: string }>());
export const deleteAreaSuccess = createAction(`[${services}/${service}] Delete Area Success`, props<{ id: string }>());
export const deleteAreaFailure = createAction(`[${services}/${service}] Delete Area Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteAreas = createAction(`[${services}/${service}] Delete Areas`, props<{ ids: string[] }>());
export const deleteAreasSuccess = createAction(`[${services}/${service}] Delete Areas Success`, props<{ ids: string[] }>());
export const deleteAreasFailure = createAction(`[${services}/${service}] Delete Areas Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaByPredicate = createAction(`[${services}/${service}] Delete Area By Predicate`, props<{ predicate: Predicate<Area> }>());
export const deleteAreaByPredicateSuccess = createAction(`[${services}/${service}] Delete Area By Predicate Success`, props<{ predicate: Predicate<Area> }>());
export const deleteAreaByPredicateFailure = createAction(`[${services}/${service}] Delete Area By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearAreas = createAction(`[${services}/${service}] Clear Area`);