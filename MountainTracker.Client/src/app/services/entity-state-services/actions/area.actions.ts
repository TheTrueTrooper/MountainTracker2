import { createAction, props } from '@ngrx/store';
import { Area } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadAreas = createAction('[Area/API] Load Area');
export const loadAreasSuccess = createAction('[Area/API] Load Area Success', props<{ areas: Area[] }>());
export const loadAreasFailure = createAction('[Area/API] Load Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const setArea = createAction('[Area/API] Set Area', props<{ area: Area }>());
export const setAreaSuccess = createAction('[Area/API] Set Area Success', props<{ area: Area }>());
export const setAreaFailure = createAction('[Area/API] Set Area Failure', props<{ error: string }>());

export const setAreas = createAction('[Area/API] Set Areas', props<{ areas: Area[] }>());
export const setAreasSuccess = createAction('[Area/API] Set Areas Success', props<{ areas: Area[] }>());
export const setAreasFailure = createAction('[Area/API] Set Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const addArea = createAction('[Area/API] Add Area', props<{ area: Area }>());
export const addAreaSuccess = createAction('[Area/API] Add Area Success', props<{ area: Area }>());
export const addAreaFailure = createAction('[Area/API] Add Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertArea = createAction('[Area/API] Upsert Area', props<{ area: Area }>());
export const upsertAreaSuccess = createAction('[Area/API] Upsert Area Success', props<{ area: Area }>());
export const upsertAreaFailure = createAction('[Area/API] Upsert Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const addAreas = createAction('[Area/API] Add Areas', props<{ areas: Area[] }>());
export const addAreasSuccess = createAction('[Area/API] Add Areas Success', props<{ areas: Area[] }>());
export const addAreasFailure = createAction('[Area/API] Add Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertAreas = createAction('[Area/API] Upsert Areas', props<{ areas: Area[] }>());
export const upsertAreasSuccess = createAction('[Area/API] Upsert Areas Success', props<{ areas: Area[] }>());
export const upsertAreasFailure = createAction('[Area/API] Upsert Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateArea = createAction('[Area/API] Update Area', props<{ update: Update<Area> }>());
export const updateAreaSuccess = createAction('[Area/API] Update Area Success', props<{ update: Update<Area> }>());
export const updateAreaFailure = createAction('[Area/API] Update Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateAreas = createAction('[Area/API] Update Areas', props<{ updates: Update<Area>[] }>());
export const updateAreasSuccess = createAction('[Area/API] Update Areas Success', props<{ updates: Update<Area>[] }>());
export const updateAreasFailure = createAction('[Area/API] Update Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapArea = createAction('[Area/API] Map Area', props<{ entityMap: EntityMapOne<Area> }>());
export const mapAreaSuccess = createAction('[Area/API] Map Area Success', props<{ entityMap: EntityMapOne<Area> }>());
export const mapAreaFailure = createAction('[Area/API] Map Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapAreas = createAction('[Area/API] Map Areas', props<{ entityMap: EntityMap<Area> }>());
export const mapAreasSuccess = createAction('[Area/API] Map Areas', props<{ entityMap: EntityMap<Area> }>());
export const mapAreasFailure = createAction('[Area/API] Map Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteArea = createAction('[Area/API] Delete Area', props<{ id: string }>());
export const deleteAreaSuccess = createAction('[Area/API] Delete Area Success', props<{ id: string }>());
export const deleteAreaFailure = createAction('[Area/API] Delete Area Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteAreas = createAction('[Area/API] Delete Areas', props<{ ids: string[] }>());
export const deleteAreasSuccess = createAction('[Area/API] Delete Areas Success', props<{ ids: string[] }>());
export const deleteAreasFailure = createAction('[Area/API] Delete Areas Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteAreaByPredicate = createAction('[Area/API] Delete Area By Predicate', props<{ predicate: Predicate<Area> }>());
export const deleteAreaByPredicateSuccess = createAction('[Area/API] Delete Area By Predicate Success', props<{ predicate: Predicate<Area> }>());
export const deleteAreaByPredicateFailure = createAction('[Area/API] Delete Area By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearAreas = createAction('[Area/API] Clear Area');