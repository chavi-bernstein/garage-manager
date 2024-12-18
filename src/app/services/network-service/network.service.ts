import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

/**
 * NetworkService
 * 
 * This service provides methods to make HTTP requests (GET, POST, DELETE) to a specified base URL.
 * It uses Angular's HttpClient to perform network operations and allows optional parameters and headers.
 * 
 * Usage:
 * Inject this service into your component or other services to make HTTP requests.
 * 
 * Example:
 * ```typescript
 * constructor(private networkService: NetworkService) { }
 * 
 * this.networkService.get<DataType>('endpoint', { key: 'value' }).subscribe(data => {
 *   console.log(data);
 * });
 * ```
 */
export class NetworkService {
    private _baseUrl: string = "http://localhost:3000";

    constructor(private _httpClient: HttpClient) { }


    get<T>(url?: string,
        params?: { [key: string]: string | number }): Observable<T> {
        let httpParams = new HttpParams();

        if (params) {
            Object.keys(params).forEach((key) => httpParams = httpParams.set(key, params[key]));
        }

        return this._httpClient.get<T>(`${this._baseUrl}${url ? '/' + url : ''}`, { params: httpParams });
    }

    post<T>(url: string, body: any, headers?: { [key: string]: string }): Observable<T> {
        let httpHeaders = new HttpHeaders(headers);

        return this._httpClient.post<T>(`${this._baseUrl}${url ? '/' + url : ''}`, body, { headers: httpHeaders });
    }

    delete<T>(url: string, params?: { [key: string]: string | number }, headers?: { [key: string]: string }): Observable<T> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => httpParams = httpParams.set(key, params[key]));
        }

        let httpHeaders = new HttpHeaders(headers);

        return this._httpClient.delete<T>(`${this._baseUrl}${url ? '/' + url : ''}`, { params: httpParams, headers: httpHeaders });
    }
}
