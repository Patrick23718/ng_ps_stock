import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const selectCounterState = (state: AppState) => state.counter;

export const selectCounter = createSelector(selectCounterState, (state) => state.counter);
