import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllAdminCards } from 'src/app/redux/selectors/admin.selectors';
import { AppState } from 'src/app/redux/state.models';
import { YoutubeApiService } from '../../services/youtube-api.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  customCards$ = this.store.select(selectAllAdminCards);

  constructor(
    public filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
    private store: Store<AppState>,
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
