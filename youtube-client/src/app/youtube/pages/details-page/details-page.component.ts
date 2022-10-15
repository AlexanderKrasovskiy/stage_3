import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YtItem } from '../../models/search-item.model';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { FiltersService } from '../../../core/services/filters.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  item!: YtItem;

  constructor(
    private route: ActivatedRoute,
    private youtubeApiService: YoutubeApiService,
    private location: Location,
    private filtersService: FiltersService,
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    const videoItem = this.youtubeApiService.items.find(
      (item) => item.id === id,
    );
    if (videoItem) {
      this.item = videoItem;
    }

    this.filtersService.isVisible = false;
  }

  goBack(): void {
    this.location.back();
  }
}
