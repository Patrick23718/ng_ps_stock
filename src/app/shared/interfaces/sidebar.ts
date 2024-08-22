export interface ISidebar {
  index: number;
  name: string;
  icon: string;
  link: string;
}

export interface ISidebarModel {
  sidebar: ISidebar[];
  activeIndex: number;
}
