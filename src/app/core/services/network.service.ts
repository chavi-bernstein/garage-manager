import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

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
