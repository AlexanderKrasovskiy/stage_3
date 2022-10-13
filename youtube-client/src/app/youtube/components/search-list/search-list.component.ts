import { Component } from '@angular/core';
import { DateSortOrder, ViewsSortOrder } from 'src/app/shared/constants';
import { YtItem } from '../../models/search-item.model';
import data from './mock-response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  items?: YtItem[];
  dateOrder = DateSortOrder.default;
  viewsOrder = ViewsSortOrder.default;
  word = '';
  query = '';

  getResponse(query: string): void {
    this.query = query;
    this.items = data.items;
  }

  setDateOrder(order: DateSortOrder): void {
    this.dateOrder = order;
    this.viewsOrder = ViewsSortOrder.default;
  }

  setViewsOrder(order: ViewsSortOrder): void {
    this.viewsOrder = order;
    this.dateOrder = DateSortOrder.default;
  }

  setWordFilter(word: string): void {
    this.word = word;
  }
}
