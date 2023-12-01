import { createAction, props } from '@ngrx/store';
import { Country } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';

export const loadCountries = createAction('[Country/API] Load Country');
export const loadCountriesSuccess = createAction('[Country/API] Load Country Success', props<{ countries: Country[] }>());
export const loadCountriesFailure = createAction('[Country/API] Load Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const setCountry = createAction('[Country/API] Set Country', props<{ country: Country }>());
export const setCountrySuccess = createAction('[Country/API] Set Country Success', props<{ country: Country }>());
export const setCountryFailure = createAction('[Country/API] Set Country Failure', props<{ error: string }>());

export const setCountries = createAction('[Country/API] Set Countries', props<{ countries: Country[] }>());
export const setCountriesSuccess = createAction('[Country/API] Set Countries Success', props<{ countries: Country[] }>());
export const setCountriesFailure = createAction('[Country/API] Set Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const addCountry = createAction('[Country/API] Add Country', props<{ country: Country }>());
export const addCountrySuccess = createAction('[Country/API] Add Country Success', props<{ country: Country }>());
export const addCountryFailure = createAction('[Country/API] Add Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertCountry = createAction('[Country/API] Upsert Country', props<{ country: Country }>());
export const upsertCountrySuccess = createAction('[Country/API] Upsert Country Success', props<{ country: Country }>());
export const upsertCountryFailure = createAction('[Country/API] Upsert Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const addCountries = createAction('[Country/API] Add Countries', props<{ countries: Country[] }>());
export const addCountriesSuccess = createAction('[Country/API] Add Countries Success', props<{ countries: Country[] }>());
export const addCountriesFailure = createAction('[Country/API] Add Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const upsertCountries = createAction('[Country/API] Upsert Countries', props<{ countries: Country[] }>());
export const upsertCountriesSuccess = createAction('[Country/API] Upsert Countries Success', props<{ countries: Country[] }>());
export const upsertCountriesFailure = createAction('[Country/API] Upsert Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateCountry = createAction('[Country/API] Update Country', props<{ update: Update<Country> }>());
export const updateCountrySuccess = createAction('[Country/API] Update Country Success', props<{ update: Update<Country> }>());
export const updateCountryFailure = createAction('[Country/API] Update Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const updateCountries = createAction('[Country/API] Update Countries', props<{ updates: Update<Country>[] }>());
export const updateCountriesSuccess = createAction('[Country/API] Update Countries Success', props<{ updates: Update<Country>[] }>());
export const updateCountriesFailure = createAction('[Country/API] Update Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapCountry = createAction('[Country/API] Map Country', props<{ entityMap: EntityMapOne<Country> }>());
export const mapCountrySuccess = createAction('[Country/API] Map Country Success', props<{ entityMap: EntityMapOne<Country> }>());
export const mapCountryFailure = createAction('[Country/API] Map Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const mapCountries = createAction('[Country/API] Map Countries', props<{ entityMap: EntityMap<Country> }>());
export const mapCountriesSuccess = createAction('[Country/API] Map Countries', props<{ entityMap: EntityMap<Country> }>());
export const mapCountriesFailure = createAction('[Country/API] Map Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteCountry = createAction('[Country/API] Delete Country', props<{ id: string }>());
export const deleteCountrySuccess = createAction('[Country/API] Delete Country Success', props<{ id: string }>());
export const deleteCountryFailure = createAction('[Country/API] Delete Country Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteCountries = createAction('[Country/API] Delete Countries', props<{ ids: string[] }>());
export const deleteCountriesSuccess = createAction('[Country/API] Delete Countries Success', props<{ ids: string[] }>());
export const deleteCountriesFailure = createAction('[Country/API] Delete Countries Failure', props<{ clearOnfail:boolean, error: string }>());

export const deleteCountryByPredicate = createAction('[Country/API] Delete Country By Predicate', props<{ predicate: Predicate<Country> }>());
export const deleteCountryByPredicateSuccess = createAction('[Country/API] Delete Country By Predicate Success', props<{ predicate: Predicate<Country> }>());
export const deleteCountryByPredicateFailure = createAction('[Country/API] Delete Country By Predicate Failure', props<{ clearOnfail:boolean, error: string }>());

export const clearCountries = createAction('[Country/API] Clear Country');