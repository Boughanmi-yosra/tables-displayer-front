import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  public api = 'https://tables-displayer-backend-latest.onrender.com/api/';

}
