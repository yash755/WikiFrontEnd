import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as global from '../global';
import {Observable} from 'rxjs';


@Injectable()
export class UrlService {

  constructor(private http: HttpClient) {

  }
  getURLS(): Observable<any> {
    const storyURL = global.BASE_URL + global.FETCH_URL;
    return this.http.get<any>(storyURL);
  }



  getDetailedData(data): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const storyURL = global.BASE_URL + global.FETCH_TABLE;
    return this.http.post<any>(storyURL, JSON.stringify(data), httpOptions);
  }


  postURL(data): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const postURL = global.BASE_URL + global.POST_URL;
    return this.http.post<any>(postURL, JSON.stringify(data), httpOptions);
  }

}
