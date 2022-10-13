import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchListComponent } from './components/search-list/search-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FiltersComponent) private filters?: FiltersComponent;
  @ViewChild(SearchListComponent) private search?: SearchListComponent;

  toggleFilters(): void {
    this.filters?.toggleVisibility();
  }

  getResponse(query: string): void {
    this.search?.getResponse(query);
  }

  setDateOrder(order: 'oldToNew' | 'newToOld' | ''): void {
    this.search?.setDateOrder(order);
  }

  setViewsOrder(order: 'ascending' | 'descending' | ''): void {
    this.search?.setViewsOrder(order);
  }

  setWordFilter(word: string): void {
    this.search?.setWordFilter(word);
  }
}
