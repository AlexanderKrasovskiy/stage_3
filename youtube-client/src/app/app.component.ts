import { Component, ViewChild } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { SearchListComponent } from './search-list/search-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FiltersComponent) filters!: FiltersComponent;
  @ViewChild(SearchListComponent) search!: SearchListComponent;

  toggleFilters() {
    this.filters.toggleVisibility();
  }

  getResponse(query: string) {
    this.search.getResponse(query);
  }
}
