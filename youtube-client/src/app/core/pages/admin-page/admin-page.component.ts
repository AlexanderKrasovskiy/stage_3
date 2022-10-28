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
import { YtItem } from 'src/app/youtube/models/search-item.model';

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
    const cardData = this.generateCardData();
    this.store.dispatch(createCardAction(cardData));
    this.router.navigate(['']);
  }

  generateCardData(): YtItem {
    type AdminCardType = {
      title: string;
      description: string;
      imglink: string;
      videolink: string;
      date: string;
    };

    const formValues = this.createForm.value as AdminCardType;
    return {
      kind: '',
      etag: '',
      id: `custom_${Date.now()}`,
      snippet: {
        publishedAt: formValues.date,
        channelId: '',
        title: formValues.title,
        description: formValues.description,
        thumbnails: {
          default: { url: formValues.imglink, width: 0, height: 0 },
          medium: { url: formValues.imglink, width: 0, height: 0 },
          high: { url: formValues.imglink, width: 0, height: 0 },
          standard: { url: formValues.imglink, width: 0, height: 0 },
          maxres: { url: formValues.imglink, width: 0, height: 0 },
        },
        channelTitle: '',
        tags: [],
        categoryId: '',
        liveBroadcastContent: '',
        localized: {
          title: formValues.title,
          description: formValues.description,
        },
        defaultAudioLanguage: '',
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        favoriteCount: '0',
        commentCount: '0',
      },
    };
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
