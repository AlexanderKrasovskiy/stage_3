import { Component, Input } from '@angular/core';
import { YtItem } from '../models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() item!: YtItem;
}
