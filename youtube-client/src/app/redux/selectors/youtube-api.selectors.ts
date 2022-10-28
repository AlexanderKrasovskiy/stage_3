import { createSelector } from '@ngrx/store';
import { YtVideosState } from '../reducers/youtube-api.reducer';
import { AppState } from '../state.models';

const selectYoutubeApiState = (state: AppState) => state.youtubeApiState;

export const selectAllYoutubeItems = createSelector(
  selectYoutubeApiState,
  (state: YtVideosState) => state.items,
);

export const selectCurrentApiCard = createSelector(
  selectYoutubeApiState,
  (state: YtVideosState) => state.currentCard,
);
