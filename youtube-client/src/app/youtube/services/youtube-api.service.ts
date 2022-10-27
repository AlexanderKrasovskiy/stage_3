import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, map, switchMap, Observable } from 'rxjs';
import { YTApiRoutes } from 'src/app/shared/constants';
import { YtItem } from '../models/search-item.model';
import { YtResponse, YtVideoResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  constructor(private router: Router, private http: HttpClient) {}

  searchVideos(query: string) {
    const URL = `${YTApiRoutes.search}?type=video&part=snippet&maxResults=15&q=${query}`;

    return this.http.get<YtVideoResponse>(URL).pipe(
      map((res) =>
        res.items.reduce((acc: string[], curr) => {
          acc.push(curr.id.videoId);
          return acc;
        }, []),
      ),
      switchMap((idsArr) => this.searchWithStats(idsArr)),
      catchError((err) => {
        console.error(err);
        return of([]) as Observable<YtItem[]>;
      }),
    );
  }

  searchWithStats(idsArr: string[]) {
    const URL = `${
      YTApiRoutes.videos
    }?id=${idsArr.join()}&part=snippet,statistics`;

    return this.http.get<YtResponse>(URL).pipe(
      map((res) => {
        res.items.map((item) => {
          const randomDislikes = Math.ceil(Math.random() * 500) + 500;
          const tempItem = item;
          tempItem.statistics.dislikeCount = `${randomDislikes}`;
          return tempItem;
        });
        return res.items;
      }),
    );
  }

  searchById(id: string) {
    const URL = `${YTApiRoutes.videos}?id=${id}&part=snippet,statistics`;

    return this.http.get<YtResponse>(URL).pipe(
      map((res) => {
        res.items.map((item) => {
          const tempItem = item;
          const randomDislikes = Math.ceil(Math.random() * 500) + 500;
          tempItem.statistics.dislikeCount = `${randomDislikes}`;
          return tempItem;
        });
        return res.items[0];
      }),
    );
  }

  onDetails(id: string) {
    this.router.navigate(['main', id]);
  }
}
