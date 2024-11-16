import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './custom-http-interceptor.interceptor';

/** Provider for the Custom Interceptor. */
export const customInterceptorProvider: Provider =
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
    ;