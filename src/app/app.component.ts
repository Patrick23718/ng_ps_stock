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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, SideBarComponent, TranslateModule, HeaderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'stock';
  selectedLanguage = '';
  count$: Observable<number>;

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

  increment() {}
  decrement(){};
  reset(){};
}
