import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UrlService} from '../service/url.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [UrlService]
})
export class DetailComponent implements OnInit {
  url = -1;
  term = '';
  order = '';
  finalData;
  finalobject;

  keys;

  constructor(private activatedRoute: ActivatedRoute, private urlService: UrlService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.url) {
          this.url = params.url;
          this.fetchData();
        }
      });
  }

  public fetchData() {
    const body = {url : this.url };
    this.urlService.getDetailedData(body)
      .subscribe(data => {
        this.finalData = data;
        this.calData();
      }, (err) => {
        console.log(err);
      });
  }


  public calData() {
    let max = -1;
    let index = -1;
    for (let i = 0 ; i < this.finalData.length; i++) {
      const len = Object.keys(this.finalData[i]).length;
      if (len > max){
        max = len;
        index = i;
      }
    }
    this.finalobject = this.finalData[index];
    this.keys = Object.keys(this.finalobject);
    this.order = Object.keys(this.finalobject)[0];
  }

  public changeOrder(key){
    this.order = key;
  }

}
