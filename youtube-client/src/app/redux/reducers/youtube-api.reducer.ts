import { createReducer, on } from '@ngrx/store';
import { YtItem } from 'src/app/youtube/models/search-item.model';
import * as ApiActions from '../actions/youtube-api.actions';

export type YtVideosState = {
  items: YtItem[];
  error: string;
  isLoading: boolean;
  currentCard: YtItem | null;
};

const initialState: YtVideosState = {
  items: [],
  error: '',
  isLoading: false,
  currentCard: null,
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
  on(
    ApiActions.loadByIdAction,
    (state): YtVideosState => ({ ...state, isLoading: true }),
  ),
  on(
    ApiActions.loadByIdSuccessAction,
    (state, { item }): YtVideosState => ({
      ...state,
      error: '',
      isLoading: false,
      currentCard: item,
    }),
  ),
  on(
    ApiActions.loadByIdFailureAction,
    (state, { error }): YtVideosState => ({
      ...state,
      items: [],
      error,
      isLoading: false,
      currentCard: null,
    }),
  ),
);
