import { createAction, props } from "@ngrx/store";

export const onError = createAction('[Utility] Handle Error', props<{ apiName: string, error: string }>());