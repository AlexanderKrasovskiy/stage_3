import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchListComponent } from './components/search-list/search-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FiltersComponent) private filters!: FiltersComponent;
  @ViewChild(SearchListComponent) private search!: SearchListComponent;

  public toggleFilters() {
    this.filters.toggleVisibility();
  }

  public getResponse(query: string) {
    this.search.getResponse(query);
  }

  public setDateOrder(order: 'oldToNew' | 'newToOld') {
    this.search.setDateOrder(order);
  }

  public setViewsOrder(order: 'ascending' | 'descending') {
    this.search.setViewsOrder(order);
  }

  public setWordFilter(word: string) {
    this.search.setWordFilter(word);
  }
}
