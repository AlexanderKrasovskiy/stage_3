import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  Observable,
} from 'rxjs';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { YtItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  items$?: Observable<YtItem[]>;

  constructor(
    public filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
  ) {}

  ngOnInit() {
    this.youtubeApiService.searchText$
      .pipe(
        filter((query) => query.length >= 3),
        debounceTime(700),
        distinctUntilChanged(),
        map((query) => query.toLowerCase()),
        switchMap((query) => this.youtubeApiService.searchVideos(query)),
      )
      .subscribe();
  }
}
