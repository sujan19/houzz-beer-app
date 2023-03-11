import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(url, params) {
    return this.http.get(API_BASE_URL + url, {
      params: params,
    });
  }
}
