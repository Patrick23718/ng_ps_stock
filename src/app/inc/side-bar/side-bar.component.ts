import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Sidebar} from "../../shared/interfaces/sidebar";

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

  sides:Sidebar[] = [
    {
      name: "sidebar.dashboard",
      icon: "./assets/icons/dashboard.svg",
      link: "#",
    },
    {
      name: "sidebar.staff",
      icon: "./assets/icons/staff.svg",
      link: "#",
    },
    {
      name: "sidebar.voucher",
      icon: "./assets/icons/staff.svg",
      link: "#",
    },
    {
      name: "sidebar.payment",
      icon: "./assets/icons/paiement.svg",
      link: "#",
    },
    {
      name: "sidebar.memo",
      icon: "./assets/icons/memo.svg",
      link: "#",
    },
    {
      name: "sidebar.maintenance",
      icon: "./assets/icons/maintenance.svg",
      link: "#",
    },
  ];


}
