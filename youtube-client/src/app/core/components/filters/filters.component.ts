import { Component, Output, EventEmitter } from '@angular/core';
import { DateSortOrder, ViewsSortOrder } from 'src/app/core/constants';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  show = false;
  private dateSortOrder = DateSortOrder.default;
  private viewsSortOrder = ViewsSortOrder.default;
  @Output() private dateOrder = new EventEmitter<DateSortOrder>();
  @Output() private viewsOrder = new EventEmitter<ViewsSortOrder>();
  @Output() private wordFilter = new EventEmitter<string>();

  toggleVisibility(): void {
    this.show = !this.show;
  }

  setDateOrder(): void {
    this.dateSortOrder =
      this.dateSortOrder === DateSortOrder.oldToNew
        ? DateSortOrder.newToOld
        : DateSortOrder.oldToNew;

    this.viewsSortOrder = ViewsSortOrder.default;

    this.dateOrder.emit(this.dateSortOrder);
  }

  setViewsOrder(): void {
    this.viewsSortOrder =
      this.viewsSortOrder === ViewsSortOrder.ascending
        ? ViewsSortOrder.descending
        : ViewsSortOrder.ascending;

    this.dateSortOrder = DateSortOrder.default;

    this.viewsOrder.emit(this.viewsSortOrder);
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
