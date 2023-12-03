import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RockClimbingWall } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/rock-climbing-wall";
import { createReducer, on } from "@ngrx/store";
import * as RockClimbingWallActions from '../actions/rock-climbing-wall.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RockClimbingWallState extends EntityState<RockClimbingWall> {
    error: string | null;
    lastError: string | null;
}

const rockClimbingWallAdapter: EntityAdapter<RockClimbingWall> = createEntityAdapter<RockClimbingWall>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const rockClimbingWallInitialState: RockClimbingWallState = rockClimbingWallAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const rockClimbingWallReducer = createReducer(
    rockClimbingWallInitialState,
    on(RockClimbingWallActions.addRockClimbingWallSuccess, (state, { rockClimbingWall }) => {
        return rockClimbingWallAdapter.addOne(rockClimbingWall, { ...state, error: null })
    }),
    on(RockClimbingWallActions.setRockClimbingWallSuccess, (state, { rockClimbingWall }) => {
        return rockClimbingWallAdapter.setOne(rockClimbingWall, { ...state, error: null })
    }),
    on(RockClimbingWallActions.upsertRockClimbingWallSuccess, (state, { rockClimbingWall }) => {
        return rockClimbingWallAdapter.upsertOne(rockClimbingWall, { ...state, error: null });
    }),
    on(RockClimbingWallActions.addRockClimbingWallsSuccess, (state, { rockClimbingWalls }) => {
        return rockClimbingWallAdapter.addMany(rockClimbingWalls, { ...state, error: null });
    }),
    on(RockClimbingWallActions.upsertRockClimbingWallsSuccess, (state, { rockClimbingWalls }) => {
        return rockClimbingWallAdapter.upsertMany(rockClimbingWalls, { ...state, error: null });
    }),
    on(RockClimbingWallActions.updateRockClimbingWallSuccess, (state, { update }) => {
        return rockClimbingWallAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RockClimbingWallActions.updateRockClimbingWallsSuccess, (state, { updates }) => {
        return rockClimbingWallAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RockClimbingWallActions.mapRockClimbingWallSuccess, (state, { entityMap }) => {
        return rockClimbingWallAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RockClimbingWallActions.mapRockClimbingWallsSuccess, (state, { entityMap }) => {
        return rockClimbingWallAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RockClimbingWallActions.deleteRockClimbingWallSuccess, (state, { id }) => {
        return rockClimbingWallAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RockClimbingWallActions.deleteRockClimbingWallsSuccess, (state, { ids }) => {
        return rockClimbingWallAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RockClimbingWallActions.deleteRockClimbingWallByPredicateSuccess, (state, { predicate }) => {
        return rockClimbingWallAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RockClimbingWallActions.loadRockClimbingWallsSuccess, (state, { rockClimbingWalls }) => {
        return rockClimbingWallAdapter.setAll(rockClimbingWalls, { ...state, error: null });
    }),
    on(RockClimbingWallActions.setRockClimbingWallsSuccess, (state, { rockClimbingWalls }) => {
        return rockClimbingWallAdapter.setMany(rockClimbingWalls, { ...state, error: null });
    }),
    on(RockClimbingWallActions.clearRockClimbingWalls, state => {
        return rockClimbingWallAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RockClimbingWallActions.addRockClimbingWallsFailure,
        RockClimbingWallActions.addRockClimbingWallFailure,
        RockClimbingWallActions.deleteRockClimbingWallsFailure,
        RockClimbingWallActions.deleteRockClimbingWallByPredicateFailure, 
        RockClimbingWallActions.deleteRockClimbingWallFailure, 
        RockClimbingWallActions.loadRockClimbingWallsFailure, 
        RockClimbingWallActions.mapRockClimbingWallsFailure, 
        RockClimbingWallActions.mapRockClimbingWallFailure, 
        RockClimbingWallActions.updateRockClimbingWallsFailure,
        RockClimbingWallActions.updateRockClimbingWallFailure,
        RockClimbingWallActions.upsertRockClimbingWallsFailure,
        RockClimbingWallActions.upsertRockClimbingWallFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return rockClimbingWallAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = rockClimbingWallAdapter.getSelectors();

export const selectRockClimbingWallIds = selectIds;
 
export const selectRockClimbingWallEntities = selectEntities;
 
export const selectAllRockClimbingWalls = selectAll;
 
export const selectRockClimbingWallTotal = selectTotal;