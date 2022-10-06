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

  getResponse(query: string) {
    console.log(query);
    this.items = data.items;
  }

  setDateOrder(order: 'oldToNew' | 'newToOld') {
    this.dateOrder = order;
  }
}
