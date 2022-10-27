import { createAction, props } from '@ngrx/store';

const ADMIN_CREATE = '[Admin Page] Create Card';

export const createCardAction = createAction(
  ADMIN_CREATE,
  props<{
    title: string;
    description: string;
    imglink: string;
    videolink: string;
    date: string;
  }>(),
);
