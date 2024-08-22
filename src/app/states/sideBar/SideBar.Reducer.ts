import {createReducer, on} from "@ngrx/store";
import {decrement, increment, loadSideBarState, reset} from "./SideBar.Actions";
import {ISidebarModel} from "../../shared/interfaces/sidebar";

export interface ICounter {
  counter: number;
}

export const initialState: ICounter = {
  counter: 0,
}

export const initialSideBarState: ISidebarModel = {
  sidebar:  [
    {
      index: 0,
      name: "sidebar.dashboard",
      icon: "./assets/icons/dashboard.svg",
      link: "#",
    },
    {
      index: 1,
      name: "sidebar.staff",
      icon: "./assets/icons/staff.svg",
      link: "#",
    },
    {
      index: 2,
      name: "sidebar.voucher",
      icon: "./assets/icons/staff.svg",
      link: "#",
    },
    {
      index: 3,
      name: "sidebar.payment",
      icon: "./assets/icons/paiement.svg",
      link: "#",
    },
    {
      index: 4,
      name: "sidebar.memo",
      icon: "./assets/icons/memo.svg",
      link: "#",
    },
    {
      index: 5,
      name: "sidebar.maintenance",
      icon: "./assets/icons/maintenance.svg",
      link: "#",
    },
  ],
  activeIndex: 0,
}

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({...state, counter: state.counter + 1})),
  on(decrement, state => ({...state, counter: state.counter - 1})),
  on(reset, state => ({...state, counter: 0})),
)

export const sideBarReducer = createReducer(
  initialSideBarState,
  on(
    loadSideBarState,
    (state, index) => (
      {
        ...state,
        sideBar: {
          ...state.sidebar,
          activeIndex: index
        }
      }
      )
  ),
)
