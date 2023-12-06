import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { RockClimbingType } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/rock-climbing-type";
import { createReducer, on } from "@ngrx/store";
import * as RockClimbingTypeActions from '../actions/rock-climbing-type.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface RockClimbingTypeState extends EntityState<RockClimbingType> {
    error: string | null;
    lastError: string | null;
}

const rockClimbingTypeAdapter: EntityAdapter<RockClimbingType> = createEntityAdapter<RockClimbingType>({
    selectId: (obj)=>selectQlIdFieldValue(RockClimbingType, obj) as number,
    sortComparer: genericSort,
  });

const rockClimbingTypeInitialState: RockClimbingTypeState = rockClimbingTypeAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const rockClimbingTypeReducer = createReducer(
    rockClimbingTypeInitialState,
    on(RockClimbingTypeActions.addRockClimbingTypeSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.addOne(rockClimbingType, { ...state, error: null })
    }),
    on(RockClimbingTypeActions.setRockClimbingTypeSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.setOne(rockClimbingType, { ...state, error: null })
    }),
    on(RockClimbingTypeActions.upsertRockClimbingTypeSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.upsertOne(rockClimbingType, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.addRockClimbingTypesSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.addMany(rockClimbingType, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.upsertRockClimbingTypesSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.upsertMany(rockClimbingType, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.updateRockClimbingTypeSuccess, (state, { update }) => {
        return rockClimbingTypeAdapter.updateOne(update, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.updateRockClimbingTypesSuccess, (state, { updates }) => {
        return rockClimbingTypeAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.mapRockClimbingTypeSuccess, (state, { entityMap }) => {
        return rockClimbingTypeAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.mapRockClimbingTypesSuccess, (state, { entityMap }) => {
        return rockClimbingTypeAdapter.map(entityMap, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.deleteRockClimbingTypeSuccess, (state, { id }) => {
        return rockClimbingTypeAdapter.removeOne(id, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.deleteRockClimbingTypesSuccess, (state, { ids }) => {
        return rockClimbingTypeAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.deleteRockClimbingTypeByPredicateSuccess, (state, { predicate }) => {
        return rockClimbingTypeAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.loadRockClimbingTypesSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.setAll(rockClimbingType, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.setRockClimbingTypesSuccess, (state, { rockClimbingType }) => {
        return rockClimbingTypeAdapter.setMany(rockClimbingType, { ...state, error: null });
    }),
    on(RockClimbingTypeActions.clearRockClimbingTypes, state => {
        return rockClimbingTypeAdapter.removeAll({ ...state, error: null });
    }),
    on(
        RockClimbingTypeActions.addRockClimbingTypesFailure,
        RockClimbingTypeActions.addRockClimbingTypeFailure,
        RockClimbingTypeActions.deleteRockClimbingTypesFailure,
        RockClimbingTypeActions.deleteRockClimbingTypeByPredicateFailure, 
        RockClimbingTypeActions.deleteRockClimbingTypeFailure, 
        RockClimbingTypeActions.loadRockClimbingTypesFailure, 
        RockClimbingTypeActions.mapRockClimbingTypesFailure, 
        RockClimbingTypeActions.mapRockClimbingTypeFailure, 
        RockClimbingTypeActions.updateRockClimbingTypesFailure,
        RockClimbingTypeActions.updateRockClimbingTypeFailure,
        RockClimbingTypeActions.upsertRockClimbingTypesFailure,
        RockClimbingTypeActions.upsertRockClimbingTypeFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return rockClimbingTypeAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = rockClimbingTypeAdapter.getSelectors();

export const selectRockClimbingTypeIds = selectIds;
 
export const selectRockClimbingTypeEntities = selectEntities;
 
export const selectAllRockClimbingTypes = selectAll;
 
export const selectRockClimbingTypeTotal = selectTotal;