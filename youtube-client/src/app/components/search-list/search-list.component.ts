import { Component } from '@angular/core';
import { YtItem } from './models/search-item.model';
import data from './mock-response.json';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  public items?: YtItem[];
  public dateOrder?: 'oldToNew' | 'newToOld';
  public viewsOrder?: 'ascending' | 'descending';
  public word?: string;

  public getResponse(query: string) {
    console.log(query);
    this.items = data.items;
  }

  public setDateOrder(order: 'oldToNew' | 'newToOld') {
    this.dateOrder = order;
  }

  public setViewsOrder(order: 'ascending' | 'descending') {
    this.viewsOrder = order;
  }

  public setWordFilter(word: string) {
    this.word = word;
  }
}
