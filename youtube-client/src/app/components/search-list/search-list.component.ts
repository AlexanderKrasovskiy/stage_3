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
  dateOrder?: 'oldToNew' | 'newToOld' | null;
  viewsOrder?: 'ascending' | 'descending' | null;
  word?: string;
  query = '';

  getResponse(query: string): void {
    this.query = query;
    this.items = data.items;
  }

  setDateOrder(order: 'oldToNew' | 'newToOld' | null): void {
    this.dateOrder = order;
    this.viewsOrder = null;
  }

  setViewsOrder(order: 'ascending' | 'descending' | null): void {
    this.viewsOrder = order;
    this.dateOrder = null;
  }

  setWordFilter(word: string): void {
    this.word = word;
  }
}
