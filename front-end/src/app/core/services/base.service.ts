import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor(private http: HttpClient) { }

  protected get(path: string): Observable<any> {
    return this.http.get(`${ API_URL }/${ path }`);
  }

  protected post(path: string, data: any): Observable<any> {
    return this.http.post(`${ API_URL }/${ path }`, data);
  }
}
