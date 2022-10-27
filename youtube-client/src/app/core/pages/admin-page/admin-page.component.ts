import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { createCardAction } from 'src/app/redux/actions/admin.actions';
import { Store } from '@ngrx/store';
import { AdminCardType } from '../../../redux/state.models';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  createForm: FormGroup = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', Validators.maxLength(255)],
    imglink: ['', [Validators.required, this.urlValidator()]],
    videolink: ['', [Validators.required, this.urlValidator()]],
    date: ['', [Validators.required, this.dateValidator()]],
  });

  get title() {
    return this.createForm.controls['title'];
  }

  get description() {
    return this.createForm.controls['description'];
  }

  get imglink() {
    return this.createForm.controls['imglink'];
  }

  get videolink() {
    return this.createForm.controls['videolink'];
  }

  get date() {
    return this.createForm.controls['date'];
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,
  ) {}

  onCreate() {
    const cardData = this.createForm.value as AdminCardType;
    console.log(cardData);
    this.store.dispatch(createCardAction(cardData));
    // this.router.navigate(['']);
  }

  urlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      if (!value) return null;

      const urlRegex =
        // eslint-disable-next-line no-useless-escape
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      const isValid = urlRegex.test(value);

      return isValid ? null : { urlCheck: true };
    };
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      if (!value) return null;

      const creationDate = new Date(value).getTime();
      const today = Date.now();

      const isValid = creationDate < today;

      return isValid ? null : { dateCheck: true };
    };
  }
}
