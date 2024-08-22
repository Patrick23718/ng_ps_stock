import {ICounter} from "./sideBar/SideBar.Reducer";
import {ISidebar} from "../shared/interfaces/sidebar";

export interface AppState {
  counter: ICounter;
  sideBar: {
    sideBar: ISidebar[];
    activeIndex: number;
  }
}
