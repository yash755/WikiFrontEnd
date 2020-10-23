import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'wiki-tables';
  term = '';
  order = '';
  // tslint:disable-next-line:variable-name
  private _jsonURL = 'assets/data.json';
  finalData;
  finalobject = [];

  constructor(private http: HttpClient) {
  }



  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.finalData = data;
      this.fetchData();
    });
  }

  public fetchData() {
    let max = -1;
    let index = -1;
    for (let i = 0 ; i < this.finalData.length; i++) {
      const len = Object.keys(this.finalData[i]).length;
      console.log(len);
      if (len > max){
        max = len;
        index = i;
      }
    }
    this.finalobject = this.finalData[index];
    this.order = Object.keys(this.finalobject)[0];
  }


  public getJSON(): Observable<any> {
    return this.http.get<any>(this._jsonURL);
  }
  public getKey(key, object) {
    return object.has(key);

  }

  public changeOrder(key){
    this.order = key;
  }


}
