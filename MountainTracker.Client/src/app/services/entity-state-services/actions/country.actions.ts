import { createAction, props } from '@ngrx/store';
import { Country } from '../../../models';
import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { services } from './shared-action-constants';

const service = 'Country'

export const loadCountries = createAction(`[${services}/${service}] Load Countries`);
export const loadCountriesSuccess = createAction(`[${services}/${service}] Load Countries Success`, props<{ countries: Country[] }>());
export const loadCountriesFailure = createAction(`[${services}/${service}] Load Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const setCountry = createAction(`[${services}/${service}] Set Country`, props<{ country: Country }>());
export const setCountrySuccess = createAction(`[${services}/${service}] Set Country Success`, props<{ country: Country }>());
export const setCountryFailure = createAction(`[${services}/${service}] Set Country Failure`, props<{ error: string }>());

export const setCountries = createAction(`[${services}/${service}] Set Countries`, props<{ countries: Country[] }>());
export const setCountriesSuccess = createAction(`[${services}/${service}] Set Countries Success`, props<{ countries: Country[] }>());
export const setCountriesFailure = createAction(`[${services}/${service}] Set Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addCountry = createAction(`[${services}/${service}] Add Country`, props<{ country: Country }>());
export const addCountrySuccess = createAction(`[${services}/${service}] Add Country Success`, props<{ country: Country }>());
export const addCountryFailure = createAction(`[${services}/${service}] Add Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertCountry = createAction(`[${services}/${service}] Upsert Country`, props<{ country: Country }>());
export const upsertCountrySuccess = createAction(`[${services}/${service}] Upsert Country Success`, props<{ country: Country }>());
export const upsertCountryFailure = createAction(`[${services}/${service}] Upsert Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const addCountries = createAction(`[${services}/${service}] Add Countries`, props<{ countries: Country[] }>());
export const addCountriesSuccess = createAction(`[${services}/${service}] Add Countries Success`, props<{ countries: Country[] }>());
export const addCountriesFailure = createAction(`[${services}/${service}] Add Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const upsertCountries = createAction(`[${services}/${service}] Upsert Countries`, props<{ countries: Country[] }>());
export const upsertCountriesSuccess = createAction(`[${services}/${service}] Upsert Countries Success`, props<{ countries: Country[] }>());
export const upsertCountriesFailure = createAction(`[${services}/${service}] Upsert Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateCountry = createAction(`[${services}/${service}] Update Country`, props<{ update: Update<Country> }>());
export const updateCountrySuccess = createAction(`[${services}/${service}] Update Country Success`, props<{ update: Update<Country> }>());
export const updateCountryFailure = createAction(`[${services}/${service}] Update Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const updateCountries = createAction(`[${services}/${service}] Update Countries`, props<{ updates: Update<Country>[] }>());
export const updateCountriesSuccess = createAction(`[${services}/${service}] Update Countries Success`, props<{ updates: Update<Country>[] }>());
export const updateCountriesFailure = createAction(`[${services}/${service}] Update Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapCountry = createAction(`[${services}/${service}] Map Country`, props<{ entityMap: EntityMapOne<Country> }>());
export const mapCountrySuccess = createAction(`[${services}/${service}] Map Country Success`, props<{ entityMap: EntityMapOne<Country> }>());
export const mapCountryFailure = createAction(`[${services}/${service}] Map Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const mapCountries = createAction(`[${services}/${service}] Map Countries`, props<{ entityMap: EntityMap<Country> }>());
export const mapCountriesSuccess = createAction(`[${services}/${service}] Map Countries Success`, props<{ entityMap: EntityMap<Country> }>());
export const mapCountriesFailure = createAction(`[${services}/${service}] Map Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteCountry = createAction(`[${services}/${service}] Delete Country`, props<{ id: string }>());
export const deleteCountrySuccess = createAction(`[${services}/${service}] Delete Country Success`, props<{ id: string }>());
export const deleteCountryFailure = createAction(`[${services}/${service}] Delete Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteCountries = createAction(`[${services}/${service}] Delete Countries`, props<{ ids: string[] }>());
export const deleteCountriesSuccess = createAction(`[${services}/${service}] Delete Countries Success`, props<{ ids: string[] }>());
export const deleteCountriesFailure = createAction(`[${services}/${service}] Delete Countries Failure`, props<{ clearOnfail:boolean, error: string }>());

export const deleteCountryByPredicate = createAction(`[${services}/${service}] Delete Country By Predicate`, props<{ predicate: Predicate<Country> }>());
export const deleteCountryByPredicateSuccess = createAction(`[${services}/${service}] Delete Country By Predicate Success`, props<{ predicate: Predicate<Country> }>());
export const deleteCountryByPredicateFailure = createAction(`[${services}/${service}] Delete Country By Predicate Failure`, props<{ clearOnfail:boolean, error: string }>());

export const clearCountries = createAction(`[${services}/${service}] Clear Countries`);