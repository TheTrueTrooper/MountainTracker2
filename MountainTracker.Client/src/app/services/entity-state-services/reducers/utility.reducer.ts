import { createReducer, on } from '@ngrx/store';
import * as utilityActions from '../actions/utility.actions';

export interface State {
    lasterror: string | null;
}

const initialState: State = {
    lasterror: null
  };

const errorMessageStart = "Graph API Error logged in State Reducer:"

export const utilityReducer = createReducer(
    initialState,
    on(utilityActions.onError, (state, { apiName, error }) => {
        console.error(`${utilityActions.onError.name}:${errorMessageStart}${apiName}:\n${error}`)
        return {
         ...state, 
         lasterror: error
        }
    }),
  );