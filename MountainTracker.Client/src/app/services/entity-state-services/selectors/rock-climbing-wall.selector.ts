import {
    createSelector,
} from '@ngrx/store';
import * as fromRockClimbingWall from '../reducers/rock-climbing-wall.reducer';
import { selectRockClimbingWallState } from '../entity.selector';
 
export const selectRockClimbingWallIds = createSelector(
  selectRockClimbingWallState,
  fromRockClimbingWall.selectRockClimbingWallIds
);
export const selectRockClimbingWallEntities = createSelector(
  selectRockClimbingWallState,
  fromRockClimbingWall.selectRockClimbingWallEntities
);
export const selectAllRockClimbingWalls = createSelector(
  selectRockClimbingWallState,
  fromRockClimbingWall.selectAllRockClimbingWalls
);
export const selectRockClimbingWallTotal = createSelector(
  selectRockClimbingWallState,
  fromRockClimbingWall.selectRockClimbingWallTotal
);