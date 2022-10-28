import { createAction, props } from '@ngrx/store';
import { Snippet, Statistics } from 'src/app/youtube/models/search-item.model';

const ADMIN_CREATE = '[Admin Page] Create Card';
const ADMIN_DELETE = '[Header Logout] Delete Admin Cards';
const ADMIN_SEARCH = '[Details Page] Search Admin Card by ID';

export const createCardAction = createAction(
  ADMIN_CREATE,
  props<{
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    statistics: Statistics;
  }>(),
);

export const deleteAdminCards = createAction(ADMIN_DELETE);

export const searchAdminCardAction = createAction(
  ADMIN_SEARCH,
  props<{ id: string }>(),
);
