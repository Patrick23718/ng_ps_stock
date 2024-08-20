import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {counterReducer} from "./states/sideBar/SideBar.Reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// @ts-ignore
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideState({name: 'counter', reducer: counterReducer}), provideAnimationsAsync(),
]
};
