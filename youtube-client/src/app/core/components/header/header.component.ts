import { Component } from '@angular/core';
import { YoutubeApiService } from 'src/app/youtube/services/youtube-api.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private filtersService: FiltersService,
    public youtubeApiService: YoutubeApiService,
  ) {}

  onSearch(): void {
    this.youtubeApiService.onSearch();
  }

  toggleFilters(): void {
    this.filtersService.toggleFilters();
  }
}
