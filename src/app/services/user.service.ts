import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import { Observable } from 'rxjs';
import {Users} from "../interfaces/Users";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private prefix = 'users'; // URL du backend via API Gateway

  constructor(private http: HttpClient ,private baseUrl :BaseUrlService) {}

  getData(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl.api + this.prefix);
  }

}
