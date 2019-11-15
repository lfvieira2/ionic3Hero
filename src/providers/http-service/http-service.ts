import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpServiceProvider {
  API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient) {

  }

  get(endpoint: string) {
    return this.http.get<Observable<any[]>>(`${this.API_URL}/${endpoint}`);
  }

  getById(endpoint: string) {
    return this.http.get<any>(`${this.API_URL}/${endpoint}`);
  }

  post(endpoint: string, data: Object) {
    return this.http.post(`${this.API_URL}/${endpoint}`, data);
  }

  put(endpoint: string, data: Object) {
    return this.http.put(`${this.API_URL}/${endpoint}`, data);
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.API_URL}/${endpoint}`);
  }

}
