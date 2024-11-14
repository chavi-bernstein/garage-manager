import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { throwError, TimeoutError, Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

/**
 * CustomHttpInterceptor intercepts outgoing HTTP requests and handles potential errors
 * such as server connectivity issues, timeouts, and other HTTP errors.
 */
export class CustomHttpInterceptor implements HttpInterceptor {
  /**
   * Intercepts HTTP requests and adds error handling logic.
   * @param req - The HTTP request being made.
   * @param next - The next interceptor in the chain, or the backend if there are no further interceptors.
   * @returns An observable that either completes successfully or throws an error if one occurs.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: unknown) => {
        let errorMessage = 'Unknown error occurred';
        
        // Handles TimeoutError explicitly if the request exceeds the time limit.
        if (error instanceof TimeoutError) {
          errorMessage = 'Request timed out';
        }
        // Handles HTTP errors, which indicate that a response was received but with an error status.
        else if (error instanceof HttpErrorResponse) {
          // If the error status is 0, it likely means that the server is unreachable.
          if (error.status === 0) {
            errorMessage = 'Unable to connect to the server. Please check if the server is running and accessible.';
            
            // Additional handling for fetch failures, checking if the connection was explicitly refused.
            if (error.error instanceof TypeError && error.error?.message === 'fetch failed') {
              const cause = (error.error as any).cause;
              if (cause?.code === 'ECONNREFUSED') {
                errorMessage = 'Connection refused. Please ensure the server is running at the correct address and port.';
              }
            }
          }
          // For other HTTP errors, display the status code and message from the server.
          else {
            errorMessage = `Server Error: ${error.status} - ${error.message}`;
          }
        }

        // Logs detailed error information to the console for debugging purposes.
        console.error('Error details:', {
          type: error instanceof HttpErrorResponse ? 'HttpErrorResponse' : 'Unknown',
          status: error instanceof HttpErrorResponse ? error.status : 'N/A',
          message: errorMessage
        });

        // Returns an observable that emits an error, allowing the application to handle it.
        return throwError(() => ({ message: errorMessage, originalError: error }));
      })
    );
  }
}
