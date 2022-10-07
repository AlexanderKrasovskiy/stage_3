import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  show = false;
  private dateSortOrder?: 'oldToNew' | 'newToOld' | null;
  private viewsSortOrder?: 'ascending' | 'descending' | null;
  @Output() private dateOrder = new EventEmitter<
    'oldToNew' | 'newToOld' | null
  >();
  @Output() private viewsOrder = new EventEmitter<
    'ascending' | 'descending' | null
  >();
  @Output() private wordFilter = new EventEmitter<string>();

  toggleVisibility(): void {
    this.show = !this.show;
  }

  setDateOrder(): void {
    this.dateSortOrder =
      this.dateSortOrder === 'oldToNew' ? 'newToOld' : 'oldToNew';

    this.dateOrder.emit(this.dateSortOrder);
  }

  setViewsOrder(): void {
    this.viewsSortOrder =
      this.viewsSortOrder === 'ascending' ? 'descending' : 'ascending';

    this.viewsOrder.emit(this.viewsSortOrder);
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
