import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { customInterceptorProvider } from './interceptors/custom-interceptor-provider';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    customInterceptorProvider, provideRouter(routes),
  provideClientHydration(),
  provideAnimationsAsync(),
  provideHttpClient(withFetch(),
    withInterceptorsFromDi(),
  ),
  ]
};
