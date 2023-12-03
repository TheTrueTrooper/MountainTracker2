import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { BusyRating } from "../../../models";
import { genericSort } from "../../../models/service-models/service-model-functions/busy-rating";
import { createReducer, on } from "@ngrx/store";
import * as BusyRatingActions from '../actions/busy-rating.actions';
import { selectQlIdFieldValue } from "../../../graphql-helpers";

export interface BusyRatingState extends EntityState<BusyRating> {
    error: string | null;
    lastError: string | null;
}

const busyRatingAdapter: EntityAdapter<BusyRating> = createEntityAdapter<BusyRating>({
    selectId: (obj)=>selectQlIdFieldValue(obj) as number,
    sortComparer: genericSort,
  });

const busyRatingInitialState: BusyRatingState = busyRatingAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const busyRatingReducer = createReducer(
    busyRatingInitialState,
    on(BusyRatingActions.addBusyRatingSuccess, (state, { busyRating }) => {
        return busyRatingAdapter.addOne(busyRating, { ...state, error: null })
    }),
    on(BusyRatingActions.setBusyRatingSuccess, (state, { busyRating }) => {
        return busyRatingAdapter.setOne(busyRating, { ...state, error: null })
    }),
    on(BusyRatingActions.upsertBusyRatingSuccess, (state, { busyRating }) => {
        return busyRatingAdapter.upsertOne(busyRating, { ...state, error: null });
    }),
    on(BusyRatingActions.addBusyRatingsSuccess, (state, { busyRatings }) => {
        return busyRatingAdapter.addMany(busyRatings, { ...state, error: null });
    }),
    on(BusyRatingActions.upsertBusyRatingsSuccess, (state, { busyRatings }) => {
        return busyRatingAdapter.upsertMany(busyRatings, { ...state, error: null });
    }),
    on(BusyRatingActions.updateBusyRatingSuccess, (state, { update }) => {
        return busyRatingAdapter.updateOne(update, { ...state, error: null });
    }),
    on(BusyRatingActions.updateBusyRatingsSuccess, (state, { updates }) => {
        return busyRatingAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(BusyRatingActions.mapBusyRatingSuccess, (state, { entityMap }) => {
        return busyRatingAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(BusyRatingActions.mapBusyRatingsSuccess, (state, { entityMap }) => {
        return busyRatingAdapter.map(entityMap, { ...state, error: null });
    }),
    on(BusyRatingActions.deleteBusyRatingSuccess, (state, { id }) => {
        return busyRatingAdapter.removeOne(id, { ...state, error: null });
    }),
    on(BusyRatingActions.deleteBusyRatingsSuccess, (state, { ids }) => {
        return busyRatingAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(BusyRatingActions.deleteBusyRatingByPredicateSuccess, (state, { predicate }) => {
        return busyRatingAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(BusyRatingActions.loadBusyRatingsSuccess, (state, { busyRatings }) => {
        return busyRatingAdapter.setAll(busyRatings, { ...state, error: null });
    }),
    on(BusyRatingActions.setBusyRatingsSuccess, (state, { busyRatings }) => {
        return busyRatingAdapter.setMany(busyRatings, { ...state, error: null });
    }),
    on(BusyRatingActions.clearBusyRatings, state => {
        return busyRatingAdapter.removeAll({ ...state, error: null });
    }),
    on(
        BusyRatingActions.addBusyRatingsFailure,
        BusyRatingActions.addBusyRatingFailure,
        BusyRatingActions.deleteBusyRatingsFailure,
        BusyRatingActions.deleteBusyRatingByPredicateFailure, 
        BusyRatingActions.deleteBusyRatingFailure, 
        BusyRatingActions.loadBusyRatingsFailure, 
        BusyRatingActions.mapBusyRatingsFailure, 
        BusyRatingActions.mapBusyRatingFailure, 
        BusyRatingActions.updateBusyRatingsFailure,
        BusyRatingActions.updateBusyRatingFailure,
        BusyRatingActions.upsertBusyRatingsFailure,
        BusyRatingActions.upsertBusyRatingFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return busyRatingAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = busyRatingAdapter.getSelectors();

export const selectBusyRatingIds = selectIds;
 
export const selectBusyRatingEntities = selectEntities;
 
export const selectAllBusyRatings = selectAll;
 
export const selectBusyRatingTotal = selectTotal;