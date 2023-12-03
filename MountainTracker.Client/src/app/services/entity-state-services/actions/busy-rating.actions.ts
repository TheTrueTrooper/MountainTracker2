import { createAction, props } from '@ngrx/store';
import { BusyRating } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadBusyRatings = createAction('[BusyRating/API] Load BusyRating');
export const loadBusyRatingsSuccess = createAction('[BusyRating/API] Load BusyRating Success', props<{ busyRatings: BusyRating[] }>());
export const loadBusyRatingsFailure = createAction('[BusyRating/API] Load BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const setBusyRating = createAction('[BusyRating/API] Set BusyRating', props<{ busyRating: BusyRating }>());
export const setBusyRatingSuccess = createAction('[BusyRating/API] Set BusyRating Success', props<{ busyRating: BusyRating }>());
export const setBusyRatingFailure = createAction('[BusyRating/API] Set BusyRating Failure', props<{ error: string }>());

export const setBusyRatings = createAction('[BusyRating/API] Set BusyRatings', props<{ busyRatings: BusyRating[] }>());
export const setBusyRatingsSuccess = createAction('[BusyRating/API] Set BusyRatings Success', props<{ busyRatings: BusyRating[] }>());
export const setBusyRatingsFailure = createAction('[BusyRating/API] Set BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const addBusyRating = createAction('[BusyRating/API] Add BusyRating', props<{ busyRating: BusyRating }>());
export const addBusyRatingSuccess = createAction('[BusyRating/API] Add BusyRating Success', props<{ busyRating: BusyRating }>());
export const addBusyRatingFailure = createAction('[BusyRating/API] Add BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertBusyRating = createAction('[BusyRating/API] Upsert BusyRating', props<{ busyRating: BusyRating }>());
export const upsertBusyRatingSuccess = createAction('[BusyRating/API] Upsert BusyRating Success', props<{ busyRating: BusyRating }>());
export const upsertBusyRatingFailure = createAction('[BusyRating/API] Upsert BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const addBusyRatings = createAction('[BusyRating/API] Add BusyRatings', props<{ busyRatings: BusyRating[] }>());
export const addBusyRatingsSuccess = createAction('[BusyRating/API] Add BusyRatings Success', props<{ busyRatings: BusyRating[] }>());
export const addBusyRatingsFailure = createAction('[BusyRating/API] Add BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertBusyRatings = createAction('[BusyRating/API] Upsert BusyRatings', props<{ busyRatings: BusyRating[] }>());
export const upsertBusyRatingsSuccess = createAction('[BusyRating/API] Upsert BusyRatings Success', props<{ busyRatings: BusyRating[] }>());
export const upsertBusyRatingsFailure = createAction('[BusyRating/API] Upsert BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateBusyRating = createAction('[BusyRating/API] Update BusyRating', props<{ update: Update<BusyRating> }>());
export const updateBusyRatingSuccess = createAction('[BusyRating/API] Update BusyRating Success', props<{ update: Update<BusyRating> }>());
export const updateBusyRatingFailure = createAction('[BusyRating/API] Update BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateBusyRatings = createAction('[BusyRating/API] Update BusyRatings', props<{ updates: Update<BusyRating>[] }>());
export const updateBusyRatingsSuccess = createAction('[BusyRating/API] Update BusyRatings Success', props<{ updates: Update<BusyRating>[] }>());
export const updateBusyRatingsFailure = createAction('[BusyRating/API] Update BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapBusyRating = createAction('[BusyRating/API] Map BusyRating', props<{ entityMap: EntityMapOne<BusyRating> }>());
export const mapBusyRatingSuccess = createAction('[BusyRating/API] Map BusyRating Success', props<{ entityMap: EntityMapOne<BusyRating> }>());
export const mapBusyRatingFailure = createAction('[BusyRating/API] Map BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapBusyRatings = createAction('[BusyRating/API] Map BusyRatings', props<{ entityMap: EntityMap<BusyRating> }>());
export const mapBusyRatingsSuccess = createAction('[BusyRating/API] Map BusyRatings', props<{ entityMap: EntityMap<BusyRating> }>());
export const mapBusyRatingsFailure = createAction('[BusyRating/API] Map BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRating = createAction('[BusyRating/API] Delete BusyRating', props<{ id: string }>());
export const deleteBusyRatingSuccess = createAction('[BusyRating/API] Delete BusyRating Success', props<{ id: string }>());
export const deleteBusyRatingFailure = createAction('[BusyRating/API] Delete BusyRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRatings = createAction('[BusyRating/API] Delete BusyRatings', props<{ ids: string[] }>());
export const deleteBusyRatingsSuccess = createAction('[BusyRating/API] Delete BusyRatings Success', props<{ ids: string[] }>());
export const deleteBusyRatingsFailure = createAction('[BusyRating/API] Delete BusyRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteBusyRatingByPredicate = createAction('[BusyRating/API] Delete BusyRating By Predicate', props<{ predicate: Predicate<BusyRating> }>());
export const deleteBusyRatingByPredicateSuccess = createAction('[BusyRating/API] Delete BusyRating By Predicate Success', props<{ predicate: Predicate<BusyRating> }>());
export const deleteBusyRatingByPredicateFailure = createAction('[BusyRating/API] Delete BusyRating By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearBusyRatings = createAction('[BusyRating/API] Clear BusyRating');