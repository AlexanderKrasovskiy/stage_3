import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { YoutubeApiService } from 'src/app/youtube/services/youtube-api.service';
import * as ApiActions from '../actions/youtube-api.actions';
import * as AdminActions from '../actions/admin.actions';

@Injectable()
export class YoutubeApiEffects {
  loadVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApiActions.loadVideosAction),
      switchMap(({ query }) =>
        this.youtubeApiService.searchVideos(query).pipe(
          map((items) => ApiActions.loadVideosSuccessAction({ items })),
          catchError(() =>
            of(
              ApiActions.loadVideosFailureAction({
                error: 'YT Api - Failed to Load Videos',
              }),
            ),
          ),
        ),
      ),
    );
  });

  loadById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApiActions.loadByIdAction),
      switchMap(({ id }) =>
        this.youtubeApiService.searchById(id).pipe(
          map((item) => ApiActions.loadByIdSuccessAction({ item })),
          catchError(() =>
            of(
              ApiActions.loadByIdFailureAction({
                error: 'YT Api - Failed to Load Video By ID',
              }),
            ),
          ),
        ),
      ),
    );
  });

  clearApiState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApiActions.clearAppState),
      map(() => ApiActions.clearApiState()),
    );
  });

  clearAdminCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ApiActions.clearAppState),
      map(() => AdminActions.clearAdminCards()),
    );
  });

  constructor(
    private actions$: Actions,
    private youtubeApiService: YoutubeApiService,
  ) {}
}
