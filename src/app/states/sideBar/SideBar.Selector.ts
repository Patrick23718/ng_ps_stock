import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const selectCounterState = (state: AppState) => state.counter;
export const selectSideBarState = (state: AppState) => state.sideBar;

export const selectCounter = createSelector(selectCounterState, (state) => state.counter);

export const selectSideBar = createSelector(selectSideBarState, (state) => state.sideBar);
