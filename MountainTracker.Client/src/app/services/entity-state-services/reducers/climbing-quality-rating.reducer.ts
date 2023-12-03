import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ClimbingQualityRating } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/climbing-quality-rating";
import { createReducer, on } from "@ngrx/store";
import * as ClimbingQualityRatingActions from '../actions/climbing-quality-rating.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface ClimbingQualityRatingState extends EntityState<ClimbingQualityRating> {
    error: string | null;
    lastError: string | null;
}

const climbingQualityRatingAdapter: EntityAdapter<ClimbingQualityRating> = createEntityAdapter<ClimbingQualityRating>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const climbingQualityRatingInitialState: ClimbingQualityRatingState = climbingQualityRatingAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const climbingQualityRatingReducer = createReducer(
    climbingQualityRatingInitialState,
    on(ClimbingQualityRatingActions.addClimbingQualityRatingSuccess, (state, { climbingQualityRating }) => {
        return climbingQualityRatingAdapter.addOne(climbingQualityRating, { ...state, error: null })
    }),
    on(ClimbingQualityRatingActions.setClimbingQualityRatingSuccess, (state, { climbingQualityRating }) => {
        return climbingQualityRatingAdapter.setOne(climbingQualityRating, { ...state, error: null })
    }),
    on(ClimbingQualityRatingActions.upsertClimbingQualityRatingSuccess, (state, { climbingQualityRating }) => {
        return climbingQualityRatingAdapter.upsertOne(climbingQualityRating, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.addClimbingQualityRatingsSuccess, (state, { climbingQualityRatings }) => {
        return climbingQualityRatingAdapter.addMany(climbingQualityRatings, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.upsertClimbingQualityRatingsSuccess, (state, { climbingQualityRatings }) => {
        return climbingQualityRatingAdapter.upsertMany(climbingQualityRatings, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.updateClimbingQualityRatingSuccess, (state, { update }) => {
        return climbingQualityRatingAdapter.updateOne(update, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.updateClimbingQualityRatingsSuccess, (state, { updates }) => {
        return climbingQualityRatingAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.mapClimbingQualityRatingSuccess, (state, { entityMap }) => {
        return climbingQualityRatingAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.mapClimbingQualityRatingsSuccess, (state, { entityMap }) => {
        return climbingQualityRatingAdapter.map(entityMap, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.deleteClimbingQualityRatingSuccess, (state, { id }) => {
        return climbingQualityRatingAdapter.removeOne(id, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.deleteClimbingQualityRatingsSuccess, (state, { ids }) => {
        return climbingQualityRatingAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.deleteClimbingQualityRatingByPredicateSuccess, (state, { predicate }) => {
        return climbingQualityRatingAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.loadClimbingQualityRatingsSuccess, (state, { climbingQualityRatings }) => {
        return climbingQualityRatingAdapter.setAll(climbingQualityRatings, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.setClimbingQualityRatingsSuccess, (state, { climbingQualityRatings }) => {
        return climbingQualityRatingAdapter.setMany(climbingQualityRatings, { ...state, error: null });
    }),
    on(ClimbingQualityRatingActions.clearClimbingQualityRatings, state => {
        return climbingQualityRatingAdapter.removeAll({ ...state, error: null });
    }),
    on(
        ClimbingQualityRatingActions.addClimbingQualityRatingsFailure,
        ClimbingQualityRatingActions.addClimbingQualityRatingFailure,
        ClimbingQualityRatingActions.deleteClimbingQualityRatingsFailure,
        ClimbingQualityRatingActions.deleteClimbingQualityRatingByPredicateFailure, 
        ClimbingQualityRatingActions.deleteClimbingQualityRatingFailure, 
        ClimbingQualityRatingActions.loadClimbingQualityRatingsFailure, 
        ClimbingQualityRatingActions.mapClimbingQualityRatingsFailure, 
        ClimbingQualityRatingActions.mapClimbingQualityRatingFailure, 
        ClimbingQualityRatingActions.updateClimbingQualityRatingsFailure,
        ClimbingQualityRatingActions.updateClimbingQualityRatingFailure,
        ClimbingQualityRatingActions.upsertClimbingQualityRatingsFailure,
        ClimbingQualityRatingActions.upsertClimbingQualityRatingFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return climbingQualityRatingAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = climbingQualityRatingAdapter.getSelectors();

export const selectClimbingQualityRatingIds = selectIds;
 
export const selectClimbingQualityRatingEntities = selectEntities;
 
export const selectAllClimbingQualityRatings = selectAll;
 
export const selectClimbingQualityRatingTotal = selectTotal;