import { createAction, props } from '@ngrx/store';
import { ClimbingQualityRating } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Load ClimbingQualityRating');
export const loadClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Load ClimbingQualityRating Success', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const loadClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Load ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const setClimbingQualityRating = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRating', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const setClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRating Success', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const setClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRating Failure', props<{ error: string }>());

export const setClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRatings', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const setClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRatings Success', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const setClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Set ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const addClimbingQualityRating = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRating', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const addClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRating Success', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const addClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertClimbingQualityRating = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRating', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const upsertClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRating Success', props<{ climbingQualityRating: ClimbingQualityRating }>());
export const upsertClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const addClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRatings', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const addClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRatings Success', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const addClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Add ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRatings', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const upsertClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRatings Success', props<{ climbingQualityRatings: ClimbingQualityRating[] }>());
export const upsertClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Upsert ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateClimbingQualityRating = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRating', props<{ update: Update<ClimbingQualityRating> }>());
export const updateClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRating Success', props<{ update: Update<ClimbingQualityRating> }>());
export const updateClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRatings', props<{ updates: Update<ClimbingQualityRating>[] }>());
export const updateClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRatings Success', props<{ updates: Update<ClimbingQualityRating>[] }>());
export const updateClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Update ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapClimbingQualityRating = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRating', props<{ entityMap: EntityMapOne<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRating Success', props<{ entityMap: EntityMapOne<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRatings', props<{ entityMap: EntityMap<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRatings Success', props<{ entityMap: EntityMap<ClimbingQualityRating> }>());
export const mapClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Map ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRating = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating', props<{ id: string }>());
export const deleteClimbingQualityRatingSuccess = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating Success', props<{ id: string }>());
export const deleteClimbingQualityRatingFailure = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRatings', props<{ ids: string[] }>());
export const deleteClimbingQualityRatingsSuccess = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRatings Success', props<{ ids: string[] }>());
export const deleteClimbingQualityRatingsFailure = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRatings Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteClimbingQualityRatingByPredicate = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating By Predicate', props<{ predicate: Predicate<ClimbingQualityRating> }>());
export const deleteClimbingQualityRatingByPredicateSuccess = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating By Predicate Success', props<{ predicate: Predicate<ClimbingQualityRating> }>());
export const deleteClimbingQualityRatingByPredicateFailure = createAction('[ClimbingQualityRating/API] Delete ClimbingQualityRating By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearClimbingQualityRatings = createAction('[ClimbingQualityRating/API] Clear ClimbingQualityRating');