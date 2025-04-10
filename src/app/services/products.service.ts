import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import { Observable } from 'rxjs';
import {Products} from "../interfaces/Products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private prefix = 'products'; // URL du backend via API Gateway

  constructor(private http: HttpClient ,private baseUrl :BaseUrlService) {}

  getData(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseUrl.api + this.prefix);
  }

}
