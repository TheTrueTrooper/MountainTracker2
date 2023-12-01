import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Country } from "../../../models";
import { genericSort, selectCountryId } from "../../../models/service-models/service-model-functions/country";
import { createReducer, on } from "@ngrx/store";
import * as CountryActions from '../actions/country.actions';

export interface CountryState extends EntityState<Country> {
    error: string | null;
    lastError: string | null;
}

const countryAdapter: EntityAdapter<Country> = createEntityAdapter<Country>({
    selectId: selectCountryId,
    sortComparer: genericSort,
  });

const countryInitialState: CountryState = countryAdapter.getInitialState({ 
    error: null,
    lastError: null
});

export const countryReducer = createReducer(
    countryInitialState,
    on(CountryActions.addCountrySuccess, (state, { country }) => {
        return countryAdapter.addOne(country, { ...state, error: null })
    }),
    on(CountryActions.setCountrySuccess, (state, { country }) => {
        return countryAdapter.setOne(country, { ...state, error: null })
    }),
    on(CountryActions.upsertCountrySuccess, (state, { country }) => {
        return countryAdapter.upsertOne(country, { ...state, error: null });
    }),
    on(CountryActions.addCountriesSuccess, (state, { countries }) => {
        return countryAdapter.addMany(countries, { ...state, error: null });
    }),
    on(CountryActions.upsertCountriesSuccess, (state, { countries }) => {
        return countryAdapter.upsertMany(countries, { ...state, error: null });
    }),
    on(CountryActions.updateCountrySuccess, (state, { update }) => {
        return countryAdapter.updateOne(update, { ...state, error: null });
    }),
    on(CountryActions.updateCountriesSuccess, (state, { updates }) => {
        return countryAdapter.updateMany(updates, { ...state, error: null });
    }),
    on(CountryActions.mapCountrySuccess, (state, { entityMap }) => {
        return countryAdapter.mapOne(entityMap, { ...state, error: null });
    }),
    on(CountryActions.mapCountriesSuccess, (state, { entityMap }) => {
        return countryAdapter.map(entityMap, { ...state, error: null });
    }),
    on(CountryActions.deleteCountrySuccess, (state, { id }) => {
        return countryAdapter.removeOne(id, { ...state, error: null });
    }),
    on(CountryActions.deleteCountriesSuccess, (state, { ids }) => {
        return countryAdapter.removeMany(ids, { ...state, error: null });
    }),
    on(CountryActions.deleteCountryByPredicateSuccess, (state, { predicate }) => {
        return countryAdapter.removeMany(predicate, { ...state, error: null });
    }),
    on(CountryActions.loadCountriesSuccess, (state, { countries }) => {
        return countryAdapter.setAll(countries, { ...state, error: null });
    }),
    on(CountryActions.setCountriesSuccess, (state, { countries }) => {
        return countryAdapter.setMany(countries, { ...state, error: null });
    }),
    on(CountryActions.clearCountries, state => {
        return countryAdapter.removeAll({ ...state, error: null });
    }),
    on(
        CountryActions.addCountriesFailure,
        CountryActions.addCountryFailure,
        CountryActions.deleteCountriesFailure,
        CountryActions.deleteCountryByPredicateFailure, 
        CountryActions.deleteCountryFailure, 
        CountryActions.loadCountriesFailure, 
        CountryActions.mapCountriesFailure, 
        CountryActions.mapCountryFailure, 
        CountryActions.updateCountriesFailure,
        CountryActions.updateCountryFailure,
        CountryActions.upsertCountriesFailure,
        CountryActions.upsertCountryFailure,
        (state, { clearOnfail, error }) => {
        if(clearOnfail)
        {
            return countryAdapter.removeAll({ ...state, error: error, lastError: error });
        }
        return { ...state, error: error, lastError: error };
    }));

const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
      } = countryAdapter.getSelectors();

export const selectCountryIds = selectIds;
 
export const selectCountryEntities = selectEntities;
 
export const selectAllCountries = selectAll;
 
export const selectCountryTotal = selectTotal;