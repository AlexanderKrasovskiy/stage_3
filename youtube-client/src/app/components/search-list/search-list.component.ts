import { Component } from '@angular/core';
import { YtItem } from './models/search-item.model';
import data from './mock-response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  items?: YtItem[];
  dateOrder?: 'oldToNew' | 'newToOld';
  viewsOrder?: 'ascending' | 'descending';
  word?: string;
  query = '';

  getResponse(query: string): void {
    this.query = query;
    this.items = data.items;
  }

  setDateOrder(order: 'oldToNew' | 'newToOld'): void {
    this.dateOrder = order;
  }

  setViewsOrder(order: 'ascending' | 'descending'): void {
    this.viewsOrder = order;
  }

  setWordFilter(word: string): void {
    this.word = word;
  }
}
