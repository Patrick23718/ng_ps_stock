import {createReducer, on} from "@ngrx/store";
import {decrement, increment, reset} from "./SideBar.Actions";

export interface ICounter {
  counter: number;
}

export const initialState: ICounter = {
  counter: 0,
}

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({...state, counter: state.counter + 1})),
  on(decrement, state => ({...state, counter: state.counter - 1})),
  on(reset, state => ({...state, counter: 0})),
)
