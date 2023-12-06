import {
    createSelector,
  } from '@ngrx/store';
import * as fromClimbingQualityRating from '../reducers/climbing-quality-rating.reducer';
import { selectClimbingQualityRatingState } from '../entity.selector';
 
export const selectClimbingQualityRatingIds = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingIds
);
export const selectClimbingQualityRatingEntities = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingEntities
);
export const selectAllClimbingQualityRatings = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectAllClimbingQualityRatings
);
export const selectClimbingQualityRatingTotal = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingTotal
);