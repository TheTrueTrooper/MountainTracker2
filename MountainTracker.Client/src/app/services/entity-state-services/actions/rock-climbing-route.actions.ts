import { createAction, props } from '@ngrx/store';
import { RockClimbingRoute } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'RockClimbingRoute'

export const loadRockClimbingRoutes = createAction(`[${services}/${service}] Load RockClimbingRoutes`);
export const loadRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Load RockClimbingRoutes Success`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const loadRockClimbingRoutesFailure = createAction(`[${services}/${service}] Load RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingRoute = createAction(`[${services}/${service}] Set RockClimbingRoute`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const setRockClimbingRouteSuccess = createAction(`[${services}/${service}] Set RockClimbingRoute Success`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const setRockClimbingRouteFailure = createAction(`[${services}/${service}] Set RockClimbingRoute Failure`, props<{ error: string }>());

export const setRockClimbingRoutes = createAction(`[${services}/${service}] Set RockClimbingRoutes`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const setRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Set RockClimbingRoutes Success`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const setRockClimbingRoutesFailure = createAction(`[${services}/${service}] Set RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingRoute = createAction(`[${services}/${service}] Add RockClimbingRoute`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const addRockClimbingRouteSuccess = createAction(`[${services}/${service}] Add RockClimbingRoute Success`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const addRockClimbingRouteFailure = createAction(`[${services}/${service}] Add RockClimbingRoute Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingRoute = createAction(`[${services}/${service}] Upsert RockClimbingRoute`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const upsertRockClimbingRouteSuccess = createAction(`[${services}/${service}] Upsert RockClimbingRoute Success`, props<{ rockClimbingRoute: RockClimbingRoute }>());
export const upsertRockClimbingRouteFailure = createAction(`[${services}/${service}] Upsert RockClimbingRoute Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingRoutes = createAction(`[${services}/${service}] Add RockClimbingRoutes`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const addRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Add RockClimbingRoutes Success`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const addRockClimbingRoutesFailure = createAction(`[${services}/${service}] Add RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingRoutes = createAction(`[${services}/${service}] Upsert RockClimbingRoutes`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const upsertRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Upsert RockClimbingRoutes Success`, props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const upsertRockClimbingRoutesFailure = createAction(`[${services}/${service}] Upsert RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingRoute = createAction(`[${services}/${service}] Update RockClimbingRoute`, props<{ update: Update<RockClimbingRoute> }>());
export const updateRockClimbingRouteSuccess = createAction(`[${services}/${service}] Update RockClimbingRoute Success`, props<{ update: Update<RockClimbingRoute> }>());
export const updateRockClimbingRouteFailure = createAction(`[${services}/${service}] Update RockClimbingRoute Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingRoutes = createAction(`[${services}/${service}] Update RockClimbingRoutes`, props<{ updates: Update<RockClimbingRoute>[] }>());
export const updateRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Update RockClimbingRoutes Success`, props<{ updates: Update<RockClimbingRoute>[] }>());
export const updateRockClimbingRoutesFailure = createAction(`[${services}/${service}] Update RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingRoute = createAction(`[${services}/${service}] Map RockClimbingRoute`, props<{ entityMap: EntityMapOne<RockClimbingRoute> }>());
export const mapRockClimbingRouteSuccess = createAction(`[${services}/${service}] Map RockClimbingRoute Success`, props<{ entityMap: EntityMapOne<RockClimbingRoute> }>());
export const mapRockClimbingRouteFailure = createAction(`[${services}/${service}] Map RockClimbingRoute Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingRoutes = createAction(`[${services}/${service}] Map RockClimbingRoutes`, props<{ entityMap: EntityMap<RockClimbingRoute> }>());
export const mapRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Map RockClimbingRoutes Success`, props<{ entityMap: EntityMap<RockClimbingRoute> }>());
export const mapRockClimbingRoutesFailure = createAction(`[${services}/${service}] Map RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRoute = createAction(`[${services}/${service}] Delete RockClimbingRoute`, props<{ id: string }>());
export const deleteRockClimbingRouteSuccess = createAction(`[${services}/${service}] Delete RockClimbingRoute Success`, props<{ id: string }>());
export const deleteRockClimbingRouteFailure = createAction(`[${services}/${service}] Delete RockClimbingRoute Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRoutes = createAction(`[${services}/${service}] Delete RockClimbingRoutes`, props<{ ids: string[] }>());
export const deleteRockClimbingRoutesSuccess = createAction(`[${services}/${service}] Delete RockClimbingRoutes Success`, props<{ ids: string[] }>());
export const deleteRockClimbingRoutesFailure = createAction(`[${services}/${service}] Delete RockClimbingRoutes Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRouteByPredicate = createAction(`[${services}/${service}] Delete RockClimbingRoute By Predicate`, props<{ predicate: Predicate<RockClimbingRoute> }>());
export const deleteRockClimbingRouteByPredicateSuccess = createAction(`[${services}/${service}] Delete RockClimbingRoute By Predicate Success`, props<{ predicate: Predicate<RockClimbingRoute> }>());
export const deleteRockClimbingRouteByPredicateFailure = createAction(`[${services}/${service}] Delete RockClimbingRoute By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingRoutes = createAction(`[${services}/${service}] Clear RockClimbingRoutes`);