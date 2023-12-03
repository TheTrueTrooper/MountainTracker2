import {
  createSelector,
} from '@ngrx/store';
import * as fromBusyRating from '../reducers/busy-rating.reducer';
import { selectBusyRatingState } from '../entity.selector';
 
export const selectBusyRatingIds = createSelector(
  selectBusyRatingState,
  fromBusyRating.selectBusyRatingIds
);
export const selectBusyRatingEntities = createSelector(
  selectBusyRatingState,
  fromBusyRating.selectBusyRatingEntities
);
export const selectAllBusyRatings = createSelector(
  selectBusyRatingState,
  fromBusyRating.selectAllBusyRatings
);
export const selectBusyRatingTotal = createSelector(
  selectBusyRatingState,
  fromBusyRating.selectBusyRatingTotal
);