import { createAction, props } from '@ngrx/store';
import { BusyRating } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'BusyRating'

export const loadBusyRatings = createAction(`[${services}/${service}] Load BusyRating`);
export const loadBusyRatingsSuccess = createAction(`[${services}/${service}] Load BusyRating Success`, props<{ busyRatings: BusyRating[] }>());
export const loadBusyRatingsFailure = createAction(`[${services}/${service}] Load BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setBusyRating = createAction(`[${services}/${service}] Set BusyRating`, props<{ busyRating: BusyRating }>());
export const setBusyRatingSuccess = createAction(`[${services}/${service}] Set BusyRating Success`, props<{ busyRating: BusyRating }>());
export const setBusyRatingFailure = createAction(`[${services}/${service}] Set BusyRating Failure`, props<{ error: string }>());

export const setBusyRatings = createAction(`[${services}/${service}] Set BusyRatings`, props<{ busyRatings: BusyRating[] }>());
export const setBusyRatingsSuccess = createAction(`[${services}/${service}] Set BusyRatings Success`, props<{ busyRatings: BusyRating[] }>());
export const setBusyRatingsFailure = createAction(`[${services}/${service}] Set BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addBusyRating = createAction(`[${services}/${service}] Add BusyRating`, props<{ busyRating: BusyRating }>());
export const addBusyRatingSuccess = createAction(`[${services}/${service}] Add BusyRating Success`, props<{ busyRating: BusyRating }>());
export const addBusyRatingFailure = createAction(`[${services}/${service}] Add BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertBusyRating = createAction(`[${services}/${service}] Upsert BusyRating`, props<{ busyRating: BusyRating }>());
export const upsertBusyRatingSuccess = createAction(`[${services}/${service}] Upsert BusyRating Success`, props<{ busyRating: BusyRating }>());
export const upsertBusyRatingFailure = createAction(`[${services}/${service}] Upsert BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addBusyRatings = createAction(`[${services}/${service}] Add BusyRatings`, props<{ busyRatings: BusyRating[] }>());
export const addBusyRatingsSuccess = createAction(`[${services}/${service}] Add BusyRatings Success`, props<{ busyRatings: BusyRating[] }>());
export const addBusyRatingsFailure = createAction(`[${services}/${service}] Add BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertBusyRatings = createAction(`[${services}/${service}] Upsert BusyRatings`, props<{ busyRatings: BusyRating[] }>());
export const upsertBusyRatingsSuccess = createAction(`[${services}/${service}] Upsert BusyRatings Success`, props<{ busyRatings: BusyRating[] }>());
export const upsertBusyRatingsFailure = createAction(`[${services}/${service}] Upsert BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateBusyRating = createAction(`[${services}/${service}] Update BusyRating`, props<{ update: Update<BusyRating> }>());
export const updateBusyRatingSuccess = createAction(`[${services}/${service}] Update BusyRating Success`, props<{ update: Update<BusyRating> }>());
export const updateBusyRatingFailure = createAction(`[${services}/${service}] Update BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateBusyRatings = createAction(`[${services}/${service}] Update BusyRatings`, props<{ updates: Update<BusyRating>[] }>());
export const updateBusyRatingsSuccess = createAction(`[${services}/${service}] Update BusyRatings Success`, props<{ updates: Update<BusyRating>[] }>());
export const updateBusyRatingsFailure = createAction(`[${services}/${service}] Update BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapBusyRating = createAction(`[${services}/${service}] Map BusyRating`, props<{ entityMap: EntityMapOne<BusyRating> }>());
export const mapBusyRatingSuccess = createAction(`[${services}/${service}] Map BusyRating Success`, props<{ entityMap: EntityMapOne<BusyRating> }>());
export const mapBusyRatingFailure = createAction(`[${services}/${service}] Map BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapBusyRatings = createAction(`[${services}/${service}] Map BusyRatings`, props<{ entityMap: EntityMap<BusyRating> }>());
export const mapBusyRatingsSuccess = createAction(`[${services}/${service}] Map BusyRatings Success`, props<{ entityMap: EntityMap<BusyRating> }>());
export const mapBusyRatingsFailure = createAction(`[${services}/${service}] Map BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRating = createAction(`[${services}/${service}] Delete BusyRating`, props<{ id: string }>());
export const deleteBusyRatingSuccess = createAction(`[${services}/${service}] Delete BusyRating Success`, props<{ id: string }>());
export const deleteBusyRatingFailure = createAction(`[${services}/${service}] Delete BusyRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRatings = createAction(`[${services}/${service}] Delete BusyRatings`, props<{ ids: string[] }>());
export const deleteBusyRatingsSuccess = createAction(`[${services}/${service}] Delete BusyRatings Success`, props<{ ids: string[] }>());
export const deleteBusyRatingsFailure = createAction(`[${services}/${service}] Delete BusyRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRatingByPredicate = createAction(`[${services}/${service}] Delete BusyRating By Predicate`, props<{ predicate: Predicate<BusyRating> }>());
export const deleteBusyRatingByPredicateSuccess = createAction(`[${services}/${service}] Delete BusyRating By Predicate Success`, props<{ predicate: Predicate<BusyRating> }>());
export const deleteBusyRatingByPredicateFailure = createAction(`[${services}/${service}] Delete BusyRating By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearBusyRatings = createAction(`[${services}/${service}] Clear BusyRating`);