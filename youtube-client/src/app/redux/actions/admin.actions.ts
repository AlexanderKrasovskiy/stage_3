import { createAction, props } from '@ngrx/store';

const ADMIN_CREATE = '[Admin Page] Create Card';
const ADMIN_DELETE = '[Header Logout] Delete Admin Cards';

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

export const deleteAdminCards = createAction(ADMIN_DELETE);
