import { createAction, props } from "@ngrx/store";

const services = 'AdminisrtationFeature'
const service = 'Area'

export const selectCountry = createAction(`[${services}/${service}] Select Country`, props<{ id: number }>());
export const selectCountrySuccess = createAction(`[${services}/${service}] Select Country Success`, props<{ id: number }>());
export const selectCountryFailure = createAction(`[${services}/${service}] Select Country Failure`, props<{ clearOnfail:boolean, error: string }>());