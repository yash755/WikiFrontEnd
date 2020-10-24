import { Component, OnInit } from '@angular/core';
import {UrlService} from '../service/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UrlService]
})
export class HomeComponent implements OnInit {

  urls = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.fetchURL();
  }


  public fetchURL() {
    this.urlService.getURLS()
      .subscribe(data => {
        this.urls = data;
      }, (err) => {
        console.log(err);
      });
  }

}
