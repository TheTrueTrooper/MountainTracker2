import { createAction, props } from '@ngrx/store';
import { RockClimbingRoute } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadRockClimbingRoutes = createAction('[RockClimbingRoute/API] Load RockClimbingRoutes');
export const loadRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Load RockClimbingRoutes Success', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const loadRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Load RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const setRockClimbingRoute = createAction('[RockClimbingRoute/API] Set RockClimbingRoute', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const setRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Set RockClimbingRoute Success', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const setRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Set RockClimbingRoute Failure', props<{ error: string }>());

export const setRockClimbingRoutes = createAction('[RockClimbingRoute/API] Set RockClimbingRoutes', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const setRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Set RockClimbingRoutes Success', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const setRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Set RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingRoute = createAction('[RockClimbingRoute/API] Add RockClimbingRoute', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const addRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Add RockClimbingRoute Success', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const addRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Add RockClimbingRoute Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingRoute = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoute', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const upsertRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoute Success', props<{ rockClimbingRoute: RockClimbingRoute }>());
export const upsertRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoute Failure', props<{ clearOnfail:boolean, error: string }>());

export const addRockClimbingRoutes = createAction('[RockClimbingRoute/API] Add RockClimbingRoutes', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const addRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Add RockClimbingRoutes Success', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const addRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Add RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertRockClimbingRoutes = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoutes', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const upsertRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoutes Success', props<{ rockClimbingRoutes: RockClimbingRoute[] }>());
export const upsertRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Upsert RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingRoute = createAction('[RockClimbingRoute/API] Update RockClimbingRoute', props<{ update: Update<RockClimbingRoute> }>());
export const updateRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Update RockClimbingRoute Success', props<{ update: Update<RockClimbingRoute> }>());
export const updateRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Update RockClimbingRoute Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateRockClimbingRoutes = createAction('[RockClimbingRoute/API] Update RockClimbingRoutes', props<{ updates: Update<RockClimbingRoute>[] }>());
export const updateRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Update RockClimbingRoutes Success', props<{ updates: Update<RockClimbingRoute>[] }>());
export const updateRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Update RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingRoute = createAction('[RockClimbingRoute/API] Map RockClimbingRoute', props<{ entityMap: EntityMapOne<RockClimbingRoute> }>());
export const mapRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Map RockClimbingRoute Success', props<{ entityMap: EntityMapOne<RockClimbingRoute> }>());
export const mapRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Map RockClimbingRoute Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapRockClimbingRoutes = createAction('[RockClimbingRoute/API] Map RockClimbingRoutes', props<{ entityMap: EntityMap<RockClimbingRoute> }>());
export const mapRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Map RockClimbingRoutes', props<{ entityMap: EntityMap<RockClimbingRoute> }>());
export const mapRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Map RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRoute = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute', props<{ id: string }>());
export const deleteRockClimbingRouteSuccess = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute Success', props<{ id: string }>());
export const deleteRockClimbingRouteFailure = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRoutes = createAction('[RockClimbingRoute/API] Delete RockClimbingRoutes', props<{ ids: string[] }>());
export const deleteRockClimbingRoutesSuccess = createAction('[RockClimbingRoute/API] Delete RockClimbingRoutes Success', props<{ ids: string[] }>());
export const deleteRockClimbingRoutesFailure = createAction('[RockClimbingRoute/API] Delete RockClimbingRoutes Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteRockClimbingRouteByPredicate = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute By Predicate', props<{ predicate: Predicate<RockClimbingRoute> }>());
export const deleteRockClimbingRouteByPredicateSuccess = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute By Predicate Success', props<{ predicate: Predicate<RockClimbingRoute> }>());
export const deleteRockClimbingRouteByPredicateFailure = createAction('[RockClimbingRoute/API] Delete RockClimbingRoute By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearRockClimbingRoutes = createAction('[RockClimbingRoute/API] Clear RockClimbingRoutes');