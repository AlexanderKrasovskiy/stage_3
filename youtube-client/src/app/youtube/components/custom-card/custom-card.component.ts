import { Component, Input } from '@angular/core';
import { AdminCardType } from 'src/app/redux/state.models';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() card!: AdminCardType;
  defaultStats = {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    commentCount: '0',
  };
}
