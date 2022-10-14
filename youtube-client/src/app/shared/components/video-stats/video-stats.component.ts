import { Component, Input } from '@angular/core';
import { Statistics } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-video-stats',
  templateUrl: './video-stats.component.html',
  styleUrls: ['./video-stats.component.scss'],
})
export class VideoStatsComponent {
  @Input() statistics!: Statistics;
}
