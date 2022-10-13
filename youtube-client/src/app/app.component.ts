import { Component, ViewChild } from '@angular/core';
import { SearchListComponent } from './youtube/components/search-list/search-list.component';
import { DateSortOrder, ViewsSortOrder } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(SearchListComponent)
  private searchListComponent?: SearchListComponent;

  getResponse(query: string): void {
    this.searchListComponent?.getResponse(query);
  }

  setDateOrder(order: DateSortOrder): void {
    this.searchListComponent?.setDateOrder(order);
  }

  setViewsOrder(order: ViewsSortOrder): void {
    this.searchListComponent?.setViewsOrder(order);
  }

  setWordFilter(word: string): void {
    this.searchListComponent?.setWordFilter(word);
  }
}
