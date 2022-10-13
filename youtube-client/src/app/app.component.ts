import { Component, ViewChild } from '@angular/core';
import { SearchListComponent } from './youtube/components/search-list/search-list.component';

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

  setWordFilter(word: string): void {
    this.searchListComponent?.setWordFilter(word);
  }
}
