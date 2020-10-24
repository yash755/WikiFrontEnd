import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global';
import {Observable} from 'rxjs';


@Injectable()
export class CategoryService {
  categoryURL = global.BASE_URL + global.CATEGORY_URL;


  constructor(private http: HttpClient) {
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.categoryURL);
  }

}
