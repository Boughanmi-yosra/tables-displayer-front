import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BaseUrlService} from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private prefix = 'tables';

  constructor(private http: HttpClient,private baseUrl :BaseUrlService) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl.api+ this.prefix);
  }
}
