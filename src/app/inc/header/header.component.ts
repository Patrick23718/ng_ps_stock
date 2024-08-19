import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../states/app.state";
import {selectCounter} from "../../states/sideBar/SideBar.Selector";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'ps-header',
  standalone: true,
  imports: [
    TranslateModule, FormsModule,
    ReactiveFormsModule, AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  title = 'stock';
  selectedLanguage = '';
  count$: Observable<number>;

  constructor(private store: Store<AppState>, private translateService: TranslateService){
    this.count$ = this.store.select(selectCounter)
    console.log(localStorage.getItem('lang'))
  }

  ngOnInit(){
    this.selectedLanguage = localStorage.getItem('lang') || 'fr';
  }

  onLanguageChange() {
    localStorage.setItem('lang', this.selectedLanguage);
    this.translateService.use(this.selectedLanguage)
  }
}
