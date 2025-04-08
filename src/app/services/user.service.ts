import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private prefix = 'users'; // URL du backend via API Gateway

  constructor(private http: HttpClient ,private baseUrl :BaseUrlService) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl.api + this.prefix);
  }

}
