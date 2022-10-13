import { Injectable } from '@angular/core';
import { DateSortOrder, ViewsSortOrder } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  isVisible = false;
  dateSortOrder = DateSortOrder.default;
  viewsSortOrder = ViewsSortOrder.default;
  word = '';

  toggleFilters(): void {
    this.isVisible = !this.isVisible;
  }

  setDateOrder(): void {
    this.dateSortOrder =
      this.dateSortOrder === DateSortOrder.oldToNew
        ? DateSortOrder.newToOld
        : DateSortOrder.oldToNew;

    this.viewsSortOrder = ViewsSortOrder.default;
  }

  setViewsOrder(): void {
    this.viewsSortOrder =
      this.viewsSortOrder === ViewsSortOrder.ascending
        ? ViewsSortOrder.descending
        : ViewsSortOrder.ascending;

    this.dateSortOrder = DateSortOrder.default;
  }

  setWordFilter(value: string): void {
    this.word = value;
  }
}
