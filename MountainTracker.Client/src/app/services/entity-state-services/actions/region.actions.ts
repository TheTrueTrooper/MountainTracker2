import { createAction, props } from '@ngrx/store';
import { Region } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'Region'

export const loadRegions = createAction(`[${services}/${service}] Load Regions`);
export const loadRegionsSuccess = createAction(`[${services}/${service}] Load Regions Success`, props<{ regions: Region[] }>());
export const loadRegionsFailure = createAction(`[${services}/${service}] Load Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRegion = createAction(`[${services}/${service}] Set Region`, props<{ region: Region }>());
export const setRegionSuccess = createAction(`[${services}/${service}] Set Region Success`, props<{ region: Region }>());
export const setRegionFailure = createAction(`[${services}/${service}] Set Region Failure`, props<{ error: string }>());

export const setRegions = createAction(`[${services}/${service}] Set Regions`, props<{ regions: Region[] }>());
export const setRegionsSuccess = createAction(`[${services}/${service}] Set Regions Success`, props<{ regions: Region[] }>());
export const setRegionsFailure = createAction(`[${services}/${service}] Set Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRegion = createAction(`[${services}/${service}] Add Region`, props<{ region: Region }>());
export const addRegionSuccess = createAction(`[${services}/${service}] Add Region Success`, props<{ region: Region }>());
export const addRegionFailure = createAction(`[${services}/${service}] Add Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRegion = createAction(`[${services}/${service}] Upsert Region`, props<{ region: Region }>());
export const upsertRegionSuccess = createAction(`[${services}/${service}] Upsert Region Success`, props<{ region: Region }>());
export const upsertRegionFailure = createAction(`[${services}/${service}] Upsert Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRegions = createAction(`[${services}/${service}] Add Regions`, props<{ regions: Region[] }>());
export const addRegionsSuccess = createAction(`[${services}/${service}] Add Regions Success`, props<{ regions: Region[] }>());
export const addRegionsFailure = createAction(`[${services}/${service}] Add Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRegions = createAction(`[${services}/${service}] Upsert Regions`, props<{ regions: Region[] }>());
export const upsertRegionsSuccess = createAction(`[${services}/${service}] Upsert Regions Success`, props<{ regions: Region[] }>());
export const upsertRegionsFailure = createAction(`[${services}/${service}] Upsert Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRegion = createAction(`[${services}/${service}] Update Region`, props<{ update: Update<Region> }>());
export const updateRegionSuccess = createAction(`[${services}/${service}] Update Region Success`, props<{ update: Update<Region> }>());
export const updateRegionFailure = createAction(`[${services}/${service}] Update Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRegions = createAction(`[${services}/${service}] Update Regions`, props<{ updates: Update<Region>[] }>());
export const updateRegionsSuccess = createAction(`[${services}/${service}] Update Regions Success`, props<{ updates: Update<Region>[] }>());
export const updateRegionsFailure = createAction(`[${services}/${service}] Update Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRegion = createAction(`[${services}/${service}] Map Region`, props<{ entityMap: EntityMapOne<Region> }>());
export const mapRegionSuccess = createAction(`[${services}/${service}] Map Region Success`, props<{ entityMap: EntityMapOne<Region> }>());
export const mapRegionFailure = createAction(`[${services}/${service}] Map Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRegions = createAction(`[${services}/${service}] Map Regions`, props<{ entityMap: EntityMap<Region> }>());
export const mapRegionsSuccess = createAction(`[${services}/${service}] Map Regions Success`, props<{ entityMap: EntityMap<Region> }>());
export const mapRegionsFailure = createAction(`[${services}/${service}] Map Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegion = createAction(`[${services}/${service}] Delete Region`, props<{ id: string }>());
export const deleteRegionSuccess = createAction(`[${services}/${service}] Delete Region Success`, props<{ id: string }>());
export const deleteRegionFailure = createAction(`[${services}/${service}] Delete Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegions = createAction(`[${services}/${service}] Delete Regions`, props<{ ids: string[] }>());
export const deleteRegionsSuccess = createAction(`[${services}/${service}] Delete Regions Success`, props<{ ids: string[] }>());
export const deleteRegionsFailure = createAction(`[${services}/${service}] Delete Regions Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRegionByPredicate = createAction(`[${services}/${service}] Delete Region By Predicate`, props<{ predicate: Predicate<Region> }>());
export const deleteRegionByPredicateSuccess = createAction(`[${services}/${service}] Delete Region By Predicate Success`, props<{ predicate: Predicate<Region> }>());
export const deleteRegionByPredicateFailure = createAction(`[${services}/${service}] Delete Region By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRegions = createAction(`[${services}/${service}] Clear Regions`);