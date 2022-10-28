import { YtVideosState } from './reducers/youtube-api.reducer';
import { AdminCardsState } from './reducers/admin.reducer';

export type AppState = {
  adminCards: AdminCardsState;
  youtubeApiState: YtVideosState;
};
