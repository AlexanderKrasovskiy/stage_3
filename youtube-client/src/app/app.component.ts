import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { DateSortOrder, ViewsSortOrder } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FiltersComponent) private filtersComponent?: FiltersComponent;
  @ViewChild(SearchListComponent)
  private searchListComponent?: SearchListComponent;

  toggleFilters(): void {
    this.filtersComponent?.toggleVisibility();
  }

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
