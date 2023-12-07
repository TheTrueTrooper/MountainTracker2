import { createAction, props } from '@ngrx/store';
import { ClimbingQualityRating } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'ClimbingQualityRating'

export const loadClimbingQualityRatings = createAction(`[${services}/${service}] Load ClimbingQualityRating`);
export const loadClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Load ClimbingQualityRating Success`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const loadClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Load ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setClimbingQualityRating = createAction(`[${services}/${service}] Set ClimbingQualityRating`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const setClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Set ClimbingQualityRating Success`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const setClimbingQualityRatingFailure = createAction(`[${services}/${service}] Set ClimbingQualityRating Failure`, props<{ error: string }>());

export const setClimbingQualityRatings = createAction(`[${services}/${service}] Set ClimbingQualityRatings`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const setClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Set ClimbingQualityRatings Success`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const setClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Set ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addClimbingQualityRating = createAction(`[${services}/${service}] Add ClimbingQualityRating`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const addClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Add ClimbingQualityRating Success`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const addClimbingQualityRatingFailure = createAction(`[${services}/${service}] Add ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertClimbingQualityRating = createAction(`[${services}/${service}] Upsert ClimbingQualityRating`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const upsertClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Upsert ClimbingQualityRating Success`, props<{ climbingQualityRating: ClimbingQualityRating }>());
export const upsertClimbingQualityRatingFailure = createAction(`[${services}/${service}] Upsert ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addClimbingQualityRatings = createAction(`[${services}/${service}] Add ClimbingQualityRatings`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const addClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Add ClimbingQualityRatings Success`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const addClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Add ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertClimbingQualityRatings = createAction(`[${services}/${service}] Upsert ClimbingQualityRatings`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const upsertClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Upsert ClimbingQualityRatings Success`, props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const upsertClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Upsert ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateClimbingQualityRating = createAction(`[${services}/${service}] Update ClimbingQualityRating`, props<{ update: Update<ClimbingQualityRating> }>());
export const updateClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Update ClimbingQualityRating Success`, props<{ update: Update<ClimbingQualityRating> }>());
export const updateClimbingQualityRatingFailure = createAction(`[${services}/${service}] Update ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateClimbingQualityRatings = createAction(`[${services}/${service}] Update ClimbingQualityRatings`, props<{ updates: Update<ClimbingQualityRating>[] }>());
export const updateClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Update ClimbingQualityRatings Success`, props<{ updates: Update<ClimbingQualityRating>[] }>());
export const updateClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Update ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapClimbingQualityRating = createAction(`[${services}/${service}] Map ClimbingQualityRating`, props<{ entityMap: EntityMapOne<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Map ClimbingQualityRating Success`, props<{ entityMap: EntityMapOne<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingFailure = createAction(`[${services}/${service}] Map ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapClimbingQualityRatings = createAction(`[${services}/${service}] Map ClimbingQualityRatings`, props<{ entityMap: EntityMap<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Map ClimbingQualityRatings Success`, props<{ entityMap: EntityMap<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Map ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRating = createAction(`[${services}/${service}] Delete ClimbingQualityRating`, props<{ id: string }>());
export const deleteClimbingQualityRatingSuccess = createAction(`[${services}/${service}] Delete ClimbingQualityRating Success`, props<{ id: string }>());
export const deleteClimbingQualityRatingFailure = createAction(`[${services}/${service}] Delete ClimbingQualityRating Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRatings = createAction(`[${services}/${service}] Delete ClimbingQualityRatings`, props<{ ids: string[] }>());
export const deleteClimbingQualityRatingsSuccess = createAction(`[${services}/${service}] Delete ClimbingQualityRatings Success`, props<{ ids: string[] }>());
export const deleteClimbingQualityRatingsFailure = createAction(`[${services}/${service}] Delete ClimbingQualityRatings Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRatingByPredicate = createAction(`[${services}/${service}] Delete ClimbingQualityRating By Predicate`, props<{ predicate: Predicate<ClimbingQualityRating> }>());
export const deleteClimbingQualityRatingByPredicateSuccess = createAction(`[${services}/${service}] Delete ClimbingQualityRating By Predicate Success`, props<{ predicate: Predicate<ClimbingQualityRating> }>());
export const deleteClimbingQualityRatingByPredicateFailure = createAction(`[${services}/${service}] Delete ClimbingQualityRating By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearClimbingQualityRatings = createAction(`[${services}/${service}] Clear ClimbingQualityRating`);