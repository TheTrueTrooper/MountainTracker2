import { createAction, props } from "@ngrx/store";

const service = 'Utility'

export const onError = createAction(`[${service}] Handle Error`, props<{ apiName: string, error: string }>());