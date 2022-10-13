import { Component } from '@angular/core';
import { YtResponse } from '../models/search-response.model';
import { YtItem } from '../models/search-item.model';
import data from '../../services/response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  public response: YtResponse = data;
  public items: YtItem[] = data.items;
}
