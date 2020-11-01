import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UrlService} from '../service/url.service';
import {NgxSpinnerService} from 'ngx-spinner';

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
  title = '';
  urls = [];

  keys;

  constructor(private activatedRoute: ActivatedRoute, private urlService: UrlService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.url) {
          this.url = params.url;
          this.fetchURL();
        }
      });
  }


  public fetchURL() {
    this.urlService.getURLS()
      .subscribe(data => {
        this.urls = data;
        for (let i = 0; i < this.urls.length; i++) {
          if (this.urls[i].id == this.url) {
            console.log(this.urls[i].id);
            this.title = this.urls[i].title;
            break;
          }
        }
        this.fetchData();
      }, (err) => {
        console.log(err);
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

    this.spinner.hide();
  }

  public changeOrder(key){
    this.order = key;
  }

}
