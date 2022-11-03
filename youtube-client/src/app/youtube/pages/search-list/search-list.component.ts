import { Component } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import { Store } from '@ngrx/store';
import { selectAllAdminCards } from 'src/app/redux/selectors/admin.selectors';
import { AppState } from 'src/app/redux/state.models';
import { selectAllYoutubeItems } from 'src/app/redux/selectors/youtube-api.selectors';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  customCards$ = this.store.select(selectAllAdminCards);
  youtubeItems$ = this.store.select(selectAllYoutubeItems);

  constructor(
    public filtersService: FiltersService,
    private store: Store<AppState>,
  ) {}
}
