import { Component, OnInit } from '@angular/core';
import * as globals from '../global';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UrlService} from '../service/url.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.css'],
  providers: [UrlService]
})
export class AddUrlComponent implements OnInit {
  url = -1;
  term = 'Enter URL';
  order = '';

  title = '';

  urlForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private urlService: UrlService, private spinner: NgxSpinnerService, private router: Router) {
    this.urlForm = this.formBuilder.group({
      url: [null, Validators.compose([ Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  submitComment() {
    this.spinner.show();
    if (this.urlForm.valid) {
      this.urlService.postURL(this.urlForm.value)
        .subscribe(data => {
          this.spinner.hide();
          this.router.navigate(['']);
          /*console.log(data);*/
        }, (err) => {
          this.spinner.hide();
          this.router.navigate(['']);
          console.log(err);
        });
    } else {
      globals.validateAllFormFields(this.urlForm);
    }
  }

  isCommentFieldValid(field: string) {
    return !this.urlForm.get(field).valid && this.urlForm.get(field).touched;
  }

}
