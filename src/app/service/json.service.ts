import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse } from '../model/ApiResponse';
import { Devise } from '../model/devise';
import { Pays } from '../model/pays';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private url_pays = 'localhost:8081/api/v2/pays/';
  private url_devise = 'localhost:8081/api/v2/devise/';

  constructor(public httpClient: HttpClient) { }

  public add(data: any): Observable<ApiResponse<Pays>> {
    return this.httpClient.post<ApiResponse<Pays>>(this.url_pays, data);
  }


  public getAll(): Observable<ApiResponse<Devise>> {
    return this.httpClient.get<ApiResponse<Devise>>(this.url_devise);
  }

}
