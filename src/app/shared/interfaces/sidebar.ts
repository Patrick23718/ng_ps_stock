export interface Sidebar {
  // index: number;
  name: string;
  icon: string;
  link: string;
}

export interface SidebarModel {
  sidebar: Sidebar[];
  activeIndex: number;
}
