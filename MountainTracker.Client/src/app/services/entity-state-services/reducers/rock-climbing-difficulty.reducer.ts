import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RockClimbingDifficulty } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/rock-climbing-type";
import { createReducer, on } from "@ngrx/store";
import * as RockClimbingDifficultyActions from '../actions/rock-climbing-difficulty.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RockClimbingDifficultyState extends EntityState<RockClimbingDifficulty> {
    error: string | null;
    lastError: string | null;
}

const rockClimbingDifficultyAdapter: EntityAdapter<RockClimbingDifficulty> = createEntityAdapter<RockClimbingDifficulty>({
    selectId: (obj)=>selectQlIdFieldValue(RockClimbingDifficulty, obj) as number,
    sortComparer: genericSort,
  });

const rockClimbingDifficultyInitialState: RockClimbingDifficultyState = rockClimbingDifficultyAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const rockClimbingDifficultyReducer = createReducer(
    rockClimbingDifficultyInitialState,
    on(RockClimbingDifficultyActions.addRockClimbingDifficultySuccess, (state, { rockClimbingDifficulty }) => {
        return rockClimbingDifficultyAdapter.addOne(rockClimbingDifficulty, { ...state, error: null })
    }),
    on(RockClimbingDifficultyActions.setRockClimbingDifficultySuccess, (state, { rockClimbingDifficulty }) => {
        return rockClimbingDifficultyAdapter.setOne(rockClimbingDifficulty, { ...state, error: null })
    }),
    on(RockClimbingDifficultyActions.upsertRockClimbingDifficultySuccess, (state, { rockClimbingDifficulty }) => {
        return rockClimbingDifficultyAdapter.upsertOne(rockClimbingDifficulty, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.addRockClimbingDifficultiesSuccess, (state, { rockClimbingDifficulties }) => {
        return rockClimbingDifficultyAdapter.addMany(rockClimbingDifficulties, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.upsertRockClimbingDifficultiesSuccess, (state, { rockClimbingDifficulties }) => {
        return rockClimbingDifficultyAdapter.upsertMany(rockClimbingDifficulties, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.updateRockClimbingDifficultySuccess, (state, { update }) => {
        return rockClimbingDifficultyAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.updateRockClimbingDifficultiesSuccess, (state, { updates }) => {
        return rockClimbingDifficultyAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.mapRockClimbingDifficultySuccess, (state, { entityMap }) => {
        return rockClimbingDifficultyAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.mapRockClimbingDifficultiesSuccess, (state, { entityMap }) => {
        return rockClimbingDifficultyAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.deleteRockClimbingDifficultySuccess, (state, { id }) => {
        return rockClimbingDifficultyAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.deleteRockClimbingDifficultiesSuccess, (state, { ids }) => {
        return rockClimbingDifficultyAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.deleteRockClimbingDifficultyByPredicateSuccess, (state, { predicate }) => {
        return rockClimbingDifficultyAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.loadRockClimbingDifficultiesSuccess, (state, { rockClimbingDifficulties }) => {
        return rockClimbingDifficultyAdapter.setAll(rockClimbingDifficulties, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.setRockClimbingDifficultiesSuccess, (state, { rockClimbingDifficulties }) => {
        return rockClimbingDifficultyAdapter.setMany(rockClimbingDifficulties, { ...state, error: null });
    }),
    on(RockClimbingDifficultyActions.clearRockClimbingDifficulties, state => {
        return rockClimbingDifficultyAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RockClimbingDifficultyActions.addRockClimbingDifficultiesFailure,
        RockClimbingDifficultyActions.addRockClimbingDifficultyFailure,
        RockClimbingDifficultyActions.deleteRockClimbingDifficultiesFailure,
        RockClimbingDifficultyActions.deleteRockClimbingDifficultyByPredicateFailure, 
        RockClimbingDifficultyActions.deleteRockClimbingDifficultyFailure, 
        RockClimbingDifficultyActions.loadRockClimbingDifficultiesFailure, 
        RockClimbingDifficultyActions.mapRockClimbingDifficultiesFailure, 
        RockClimbingDifficultyActions.mapRockClimbingDifficultyFailure, 
        RockClimbingDifficultyActions.updateRockClimbingDifficultiesFailure,
        RockClimbingDifficultyActions.updateRockClimbingDifficultyFailure,
        RockClimbingDifficultyActions.upsertRockClimbingDifficultiesFailure,
        RockClimbingDifficultyActions.upsertRockClimbingDifficultyFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return rockClimbingDifficultyAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = rockClimbingDifficultyAdapter.getSelectors();

export const selectRockClimbingDifficultyIds = selectIds;
 
export const selectRockClimbingDifficultyEntities = selectEntities;
 
export const selectAllRockClimbingDifficulties = selectAll;
 
export const selectRockClimbingDifficultyTotal = selectTotal;