import {
    createSelector,
} from '@ngrx/store';
import * as fromRockClimbingRoute from '../reducers/rock-climbing-route.reducer';
import { selectRockClimbingRouteState } from '../entity.selector';
 
export const selectRockClimbingRouteIds = createSelector(
  selectRockClimbingRouteState,
  fromRockClimbingRoute.selectRockClimbingRouteIds
);
export const selectRockClimbingRouteEntities = createSelector(
  selectRockClimbingRouteState,
  fromRockClimbingRoute.selectRockClimbingRouteEntities
);
export const selectAllRockClimbingRoutes = createSelector(
  selectRockClimbingRouteState,
  fromRockClimbingRoute.selectAllRockClimbingRoutes
);
export const selectRockClimbingRouteTotal = createSelector(
  selectRockClimbingRouteState,
  fromRockClimbingRoute.selectRockClimbingRouteTotal
);