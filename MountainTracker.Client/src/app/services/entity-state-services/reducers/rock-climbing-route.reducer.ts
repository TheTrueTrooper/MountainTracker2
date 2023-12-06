import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RockClimbingRoute } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/rock-climbing-route";
import { createReducer, on } from "@ngrx/store";
import * as RockClimbingRouteActions from '../actions/rock-climbing-route.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RockClimbingRouteState extends EntityState<RockClimbingRoute> {
    error: string | null;
    lastError: string | null;
}

const rockClimbingRouteAdapter: EntityAdapter<RockClimbingRoute> = createEntityAdapter<RockClimbingRoute>({
    selectId: (obj)=>selectQlIdFieldValue(RockClimbingRoute, obj) as number,
    sortComparer: genericSort,
  });

const rockClimbingRouteInitialState: RockClimbingRouteState = rockClimbingRouteAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const rockClimbingRouteReducer = createReducer(
    rockClimbingRouteInitialState,
    on(RockClimbingRouteActions.addRockClimbingRouteSuccess, (state, { rockClimbingRoute }) => {
        return rockClimbingRouteAdapter.addOne(rockClimbingRoute, { ...state, error: null })
    }),
    on(RockClimbingRouteActions.setRockClimbingRouteSuccess, (state, { rockClimbingRoute }) => {
        return rockClimbingRouteAdapter.setOne(rockClimbingRoute, { ...state, error: null })
    }),
    on(RockClimbingRouteActions.upsertRockClimbingRouteSuccess, (state, { rockClimbingRoute }) => {
        return rockClimbingRouteAdapter.upsertOne(rockClimbingRoute, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.addRockClimbingRoutesSuccess, (state, { rockClimbingRoutes }) => {
        return rockClimbingRouteAdapter.addMany(rockClimbingRoutes, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.upsertRockClimbingRoutesSuccess, (state, { rockClimbingRoutes }) => {
        return rockClimbingRouteAdapter.upsertMany(rockClimbingRoutes, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.updateRockClimbingRouteSuccess, (state, { update }) => {
        return rockClimbingRouteAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.updateRockClimbingRoutesSuccess, (state, { updates }) => {
        return rockClimbingRouteAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.mapRockClimbingRouteSuccess, (state, { entityMap }) => {
        return rockClimbingRouteAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.mapRockClimbingRoutesSuccess, (state, { entityMap }) => {
        return rockClimbingRouteAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.deleteRockClimbingRouteSuccess, (state, { id }) => {
        return rockClimbingRouteAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.deleteRockClimbingRoutesSuccess, (state, { ids }) => {
        return rockClimbingRouteAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.deleteRockClimbingRouteByPredicateSuccess, (state, { predicate }) => {
        return rockClimbingRouteAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.loadRockClimbingRoutesSuccess, (state, { rockClimbingRoutes }) => {
        return rockClimbingRouteAdapter.setAll(rockClimbingRoutes, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.setRockClimbingRoutesSuccess, (state, { rockClimbingRoutes }) => {
        return rockClimbingRouteAdapter.setMany(rockClimbingRoutes, { ...state, error: null });
    }),
    on(RockClimbingRouteActions.clearRockClimbingRoutes, state => {
        return rockClimbingRouteAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RockClimbingRouteActions.addRockClimbingRoutesFailure,
        RockClimbingRouteActions.addRockClimbingRouteFailure,
        RockClimbingRouteActions.deleteRockClimbingRoutesFailure,
        RockClimbingRouteActions.deleteRockClimbingRouteByPredicateFailure, 
        RockClimbingRouteActions.deleteRockClimbingRouteFailure, 
        RockClimbingRouteActions.loadRockClimbingRoutesFailure, 
        RockClimbingRouteActions.mapRockClimbingRoutesFailure, 
        RockClimbingRouteActions.mapRockClimbingRouteFailure, 
        RockClimbingRouteActions.updateRockClimbingRoutesFailure,
        RockClimbingRouteActions.updateRockClimbingRouteFailure,
        RockClimbingRouteActions.upsertRockClimbingRoutesFailure,
        RockClimbingRouteActions.upsertRockClimbingRouteFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return rockClimbingRouteAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = rockClimbingRouteAdapter.getSelectors();

export const selectRockClimbingRouteIds = selectIds;
 
export const selectRockClimbingRouteEntities = selectEntities;
 
export const selectAllRockClimbingRoutes = selectAll;
 
export const selectRockClimbingRouteTotal = selectTotal;