import {
    createSelector,
} from '@ngrx/store';
import * as fromRockClimbingDifficulty from '../reducers/rock-climbing-difficulty.reducer';
import { selectRockClimbingDifficultyState } from '../entity.selector';
 
export const selectRockClimbingDifficultyIds = createSelector(
  selectRockClimbingDifficultyState,
  fromRockClimbingDifficulty.selectRockClimbingDifficultyIds
);
export const selectRockClimbingDifficultyEntities = createSelector(
  selectRockClimbingDifficultyState,
  fromRockClimbingDifficulty.selectRockClimbingDifficultyEntities
);
export const selectAllRockClimbingDifficultys = createSelector(
  selectRockClimbingDifficultyState,
  fromRockClimbingDifficulty.selectAllRockClimbingDifficulties
);
export const selectRockClimbingDifficultyTotal = createSelector(
  selectRockClimbingDifficultyState,
  fromRockClimbingDifficulty.selectRockClimbingDifficultyTotal
);