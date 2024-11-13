import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './custom-http-interceptor.interceptor';
import { HttpTestingController } from '@angular/common/http/testing';

describe('CustomHttpInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), 
        { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(CustomHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should handle HTTP request errors correctly', () => {
    httpClient.get('/test').subscribe({
      next: () => fail('expected an error'),
      error: (error) => {
        expect(error.message).toBe('Unknown error occurred'); 
      }
    });

    const req = httpTestingController.expectOne('/test');
    req.error(new ProgressEvent('error', { bubbles: true, cancelable: true, lengthComputable: false }));
  });
});
