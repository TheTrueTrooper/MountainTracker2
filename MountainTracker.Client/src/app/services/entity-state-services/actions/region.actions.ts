import { createAction, props } from '@ngrx/store';
import { Region } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRegions = createAction('[Region/API] Load Regions');
export const loadRegionsSuccess = createAction('[Region/API] Load Regions Success', props<{ regions: Region[] }>());
export const loadRegionsFailure = createAction('[Region/API] Load Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRegion = createAction('[Region/API] Set Region', props<{ region: Region }>());
export const setRegionSuccess = createAction('[Region/API] Set Region Success', props<{ region: Region }>());
export const setRegionFailure = createAction('[Region/API] Set Region Failure', props<{ error: string }>());

export const setRegions = createAction('[Region/API] Set Regions', props<{ regions: Region[] }>());
export const setRegionsSuccess = createAction('[Region/API] Set Regions Success', props<{ regions: Region[] }>());
export const setRegionsFailure = createAction('[Region/API] Set Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRegion = createAction('[Region/API] Add Region', props<{ region: Region }>());
export const addRegionSuccess = createAction('[Region/API] Add Region Success', props<{ region: Region }>());
export const addRegionFailure = createAction('[Region/API] Add Region Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRegion = createAction('[Region/API] Upsert Region', props<{ region: Region }>());
export const upsertRegionSuccess = createAction('[Region/API] Upsert Region Success', props<{ region: Region }>());
export const upsertRegionFailure = createAction('[Region/API] Upsert Region Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRegions = createAction('[Region/API] Add Regions', props<{ regions: Region[] }>());
export const addRegionsSuccess = createAction('[Region/API] Add Regions Success', props<{ regions: Region[] }>());
export const addRegionsFailure = createAction('[Region/API] Add Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRegions = createAction('[Region/API] Upsert Regions', props<{ regions: Region[] }>());
export const upsertRegionsSuccess = createAction('[Region/API] Upsert Regions Success', props<{ regions: Region[] }>());
export const upsertRegionsFailure = createAction('[Region/API] Upsert Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRegion = createAction('[Region/API] Update Region', props<{ update: Update<Region> }>());
export const updateRegionSuccess = createAction('[Region/API] Update Region Success', props<{ update: Update<Region> }>());
export const updateRegionFailure = createAction('[Region/API] Update Region Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRegions = createAction('[Region/API] Update Regions', props<{ updates: Update<Region>[] }>());
export const updateRegionsSuccess = createAction('[Region/API] Update Regions Success', props<{ updates: Update<Region>[] }>());
export const updateRegionsFailure = createAction('[Region/API] Update Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRegion = createAction('[Region/API] Map Region', props<{ entityMap: EntityMapOne<Region> }>());
export const mapRegionSuccess = createAction('[Region/API] Map Region Success', props<{ entityMap: EntityMapOne<Region> }>());
export const mapRegionFailure = createAction('[Region/API] Map Region Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRegions = createAction('[Region/API] Map Regions', props<{ entityMap: EntityMap<Region> }>());
export const mapRegionsSuccess = createAction('[Region/API] Map Regions Success', props<{ entityMap: EntityMap<Region> }>());
export const mapRegionsFailure = createAction('[Region/API] Map Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegion = createAction('[Region/API] Delete Region', props<{ id: string }>());
export const deleteRegionSuccess = createAction('[Region/API] Delete Region Success', props<{ id: string }>());
export const deleteRegionFailure = createAction('[Region/API] Delete Region Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegions = createAction('[Region/API] Delete Regions', props<{ ids: string[] }>());
export const deleteRegionsSuccess = createAction('[Region/API] Delete Regions Success', props<{ ids: string[] }>());
export const deleteRegionsFailure = createAction('[Region/API] Delete Regions Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionByPredicate = createAction('[Region/API] Delete Region By Predicate', props<{ predicate: Predicate<Region> }>());
export const deleteRegionByPredicateSuccess = createAction('[Region/API] Delete Region By Predicate Success', props<{ predicate: Predicate<Region> }>());
export const deleteRegionByPredicateFailure = createAction('[Region/API] Delete Region By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRegions = createAction('[Region/API] Clear Regions');