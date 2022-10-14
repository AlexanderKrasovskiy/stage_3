import { Component, Input } from '@angular/core';
import { YtItem } from '../../models/search-item.model';
import { YoutubeApiService } from '../../services/youtube-api.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() item!: YtItem;

  constructor(private youtubeApiService: YoutubeApiService) {}

  onDetails() {
    this.youtubeApiService.onDetails(this.item.id);
  }
}
