import {
    createSelector,
  } from '@ngrx/store';
import * as fromClimbingQualityRating from '../reducers/climbing-quality-rating.reducer';
import { selectClimbingQualityRatingState } from '../entity.selector';
 
export const selectCountryIds = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingIds
);
export const selectCountryEntities = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingEntities
);
export const selectAllCountries = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectAllClimbingQualityRatings
);
export const selectCountryTotal = createSelector(
  selectClimbingQualityRatingState,
  fromClimbingQualityRating.selectClimbingQualityRatingTotal
);