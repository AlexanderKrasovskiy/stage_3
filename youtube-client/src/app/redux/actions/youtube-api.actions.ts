import { createAction, props } from '@ngrx/store';
import { YtItem } from 'src/app/youtube/models/search-item.model';

const LOAD_VIDEOS = '[Header Input] Load Videos';
const LOAD_VIDEOS_SUCCESS = '[YT API] Load Videos Success';
const LOAD_VIDEOS_FAILURE = '[YT API] Load Videos Failure';

const LOAD_BY_ID = '[Details Page] Load API Card by ID';
const LOAD_BY_ID_SUCCESS = '[YT API] Load API Card by ID Success';
const LOAD_BY_ID_FAILURE = '[YT API] Load API Card by ID Failure';

const CLEAR_API_STATE = '[Header Logout] Clear API State';

export const loadVideosAction = createAction(
  LOAD_VIDEOS,
  props<{ query: string }>(),
);

export const loadVideosSuccessAction = createAction(
  LOAD_VIDEOS_SUCCESS,
  props<{ items: YtItem[] }>(),
);

export const loadVideosFailureAction = createAction(
  LOAD_VIDEOS_FAILURE,
  props<{ error: string }>(),
);

export const loadByIdAction = createAction(LOAD_BY_ID, props<{ id: string }>());

export const loadByIdSuccessAction = createAction(
  LOAD_BY_ID_SUCCESS,
  props<{ item: YtItem }>(),
);

export const loadByIdFailureAction = createAction(
  LOAD_BY_ID_FAILURE,
  props<{ error: string }>(),
);

export const clearApiState = createAction(CLEAR_API_STATE);
