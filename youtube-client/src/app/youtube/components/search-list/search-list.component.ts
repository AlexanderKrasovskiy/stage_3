import { Component } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import { YtItem } from '../../models/search-item.model';
import data from './mock-response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  items?: YtItem[];
  word = '';
  query = '';

  constructor(public filtersService: FiltersService) {}

  getResponse(query: string): void {
    this.query = query;
    this.items = data.items;
  }

  setWordFilter(word: string): void {
    this.word = word;
  }
}
