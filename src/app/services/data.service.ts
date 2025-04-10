import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BaseUrlService} from "./base-url.service";
import {DataItem} from "../interfaces/DataItem";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private prefix = 'tables';

  constructor(private http: HttpClient,private baseUrl :BaseUrlService) {}

  getData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.baseUrl.api+ this.prefix);
  }
}
