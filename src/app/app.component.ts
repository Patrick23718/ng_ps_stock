import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterOutlet} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {SideBarComponent} from "./inc/side-bar/side-bar.component";
import {HeaderComponent} from "./inc/header/header.component";
import {Store} from "@ngrx/store";
import {AppState} from "./states/app.state";
import {Observable} from "rxjs";
import {selectCounter} from "./states/sideBar/SideBar.Selector";
import {AsyncPipe} from "@angular/common";
import {decrement, increment, reset} from "./states/sideBar/SideBar.Actions";
import {CardComponent, CardData} from "./inc/card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, SideBarComponent, TranslateModule, HeaderComponent, AsyncPipe, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'stock';
  selectedLanguage = '';
  count$: Observable<number>;
  cards: CardData[]= [
    {
      quantity: 250,
      description: "Total number of staff",
      icon: "./assets/icons/card1.svg",
      asc: true,
      subDescription: "12 more than last quarter"
    },
    {
      quantity: 100,
      description: "Total application",
      icon: "./assets/icons/card2.svg",
      asc: false,
      subDescription: "0.2% lower than last quarter"
    },
    {
      quantity: 10,
      description: "Total projects",
      icon: "./assets/icons/card3.svg",
      asc: true,
      subDescription: "2% more than last quarter"
    },
    {
      quantity: 15,
      description: "Total departments",
      icon: "./assets/icons/card4.svg",
      asc: null,
      subDescription: null
    }
  ]

  constructor(private store: Store<AppState>, private translateService: TranslateService){
  this.count$ = this.store.select(selectCounter)
  }

  ngOnInit(){
    this.selectedLanguage = localStorage.getItem('lang') || 'fr';
  }

  onLanguageChange() {
    localStorage.setItem('lang', this.selectedLanguage);
    this.translateService.use(this.selectedLanguage)
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  };
  reset(){
    this.store.dispatch(reset());
  };


}
