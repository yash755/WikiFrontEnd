import { Component, OnInit } from '@angular/core';
import {UrlService} from '../service/url.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UrlService]
})
export class HomeComponent implements OnInit {

  urls = [];

  constructor(private urlService: UrlService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.fetchURL();
  }


  public fetchURL() {
    this.spinner.show();
    this.urlService.getURLS()
      .subscribe(data => {
        this.urls = data;
        this.spinner.hide();
      }, (err) => {
        console.log(err);
      });
  }

}
