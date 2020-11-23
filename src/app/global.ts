import {environment} from '../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';

export const BASE_URL = environment.apiUrl;
export const FETCH_URL = '/fetch_url.php';
export const FETCH_TABLE = '/fetch_data.php';
export const POST_URL = '/submit_url.php';

export function validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

