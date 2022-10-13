import { Component } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import { YoutubeApiService } from '../../services/youtube-api.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  constructor(
    public filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
  ) {}
}
