import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {ISidebar} from "../../shared/interfaces/sidebar";

@Component({
  selector: 'ps-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  imports: [
    TranslateModule
  ],
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  sides:ISidebar[] = [
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
  ];


}
