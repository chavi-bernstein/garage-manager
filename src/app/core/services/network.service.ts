import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NetworkService {
  private _baseUrl: string = "http://localhost:3000";

  constructor(private _httpClient: HttpClient) { }


  get(url?: string,
    params?: { [key: string]: string | number }): Observable<any> {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach((key) => httpParams = httpParams.set(key, params[key]));
    }
   
    return this._httpClient.get<any>(`${this._baseUrl}${url ? '/' + url : ''}`, { params: httpParams });
  }

  post(url: string, body: any, headers?: { [key: string]: string }): Observable<any> {
    let httpHeaders = new HttpHeaders(headers);

    return this._httpClient.post<any>(`${this._baseUrl}${url}`, body, { headers: httpHeaders });
  }
}