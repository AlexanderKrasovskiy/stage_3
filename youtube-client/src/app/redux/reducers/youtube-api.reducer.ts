import { createReducer, on } from '@ngrx/store';
import { YtItem } from 'src/app/youtube/models/search-item.model';
import * as ApiActions from '../actions/youtube-api.actions';

export type YtVideosState = {
  items: YtItem[];
  error: string;
  isLoading: boolean;
};

const initialState: YtVideosState = {
  items: [],
  error: '',
  isLoading: false,
};

export const apiVideosReducer = createReducer(
  initialState,
  on(
    ApiActions.loadVideosAction,
    (state): YtVideosState => ({ ...state, isLoading: true }),
  ),
  on(
    ApiActions.loadVideosSuccessAction,
    (state, { items }): YtVideosState => ({
      ...state,
      items,
      error: '',
      isLoading: false,
    }),
  ),
  on(
    ApiActions.loadVideosFailureAction,
    (state, { error }): YtVideosState => ({
      ...state,
      items: [],
      error,
      isLoading: false,
    }),
  ),
);
