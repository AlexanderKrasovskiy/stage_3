import { createAction, props } from '@ngrx/store';
import { YtItem } from 'src/app/youtube/models/search-item.model';

const LOAD_VIDEOS = '[Header Input] Load Videos';
const LOAD_VIDEOS_SUCCESS = '[YT API] Load Videos Success';
const LOAD_VIDEOS_FAILURE = '[YT API] Load Videos Failure';

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
