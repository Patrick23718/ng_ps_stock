import {createAction} from "@ngrx/store";

// export const LOAD_SIDEBAR_STATES = '[SideBar] Load SideBar States';
export const INCREMENT = '[SideBar Component] Increment';
export const DECREMENT = '[SideBar Component] Decrement';
export const RESET = '[SideBar Component] Reset';

// export const loadSideBarState = createAction(LOAD_SIDEBAR_STATES);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
