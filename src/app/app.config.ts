import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { customInterceptorProvider } from './interceptors/custom-interceptor-provider';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects, appStore } from './store/store';
 import { CustomPaginatorIntl } from './core/custom-paginator-intl';
 import { MatPaginatorIntl } from '@angular/material/paginator';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    customInterceptorProvider, provideRouter(routes),
  provideClientHydration(),
  provideAnimationsAsync(),
  provideHttpClient(withFetch(),
    withInterceptorsFromDi(),
  ),
  provideStore(appStore),
  provideEffects(appEffects),
  { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ]
};
