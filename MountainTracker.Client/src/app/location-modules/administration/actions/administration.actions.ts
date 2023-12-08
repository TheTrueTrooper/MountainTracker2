import { createAction, props } from "@ngrx/store";

const services = 'AdminisrtationFeature'
const service = 'Area'

export const selectCountry = createAction(`[${services}/${service}] Select Country`, props<{ id: number | null }>());
export const selectCountrySuccess = createAction(`[${services}/${service}] Select Country Success`);
export const selectCountryFailure = createAction(`[${services}/${service}] Select Country Failure`, props<{ clearOnfail:boolean, error: string }>());

export const selectProvinceOrState = createAction(`[${services}/${service}] Select ProvinceOrState`, props<{ id: number | null }>());
export const selectProvinceOrStateSuccess = createAction(`[${services}/${service}] Select ProvinceOrState Success`);
export const selectProvinceOrStateFailure = createAction(`[${services}/${service}] Select ProvinceOrState Failure`, props<{ clearOnfail:boolean, error: string }>());

export const selectRegion = createAction(`[${services}/${service}] Select Region`, props<{ id: number | null }>());
export const selectRegionSuccess = createAction(`[${services}/${service}] Select Region Success`);
export const selectRegionFailure = createAction(`[${services}/${service}] Select Region Failure`, props<{ clearOnfail:boolean, error: string }>());

export const selectDistrict = createAction(`[${services}/${service}] Select District`, props<{ id: number | null }>());
export const selectDistrictSuccess = createAction(`[${services}/${service}] Select District Success`);
export const selectDistrictFailure = createAction(`[${services}/${service}] Select District Failure`, props<{ clearOnfail:boolean, error: string }>());