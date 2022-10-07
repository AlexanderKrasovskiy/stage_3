import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  show = false;
  private dateSort?: 'oldToNew' | 'newToOld';
  private viewsSort?: 'ascending' | 'descending';
  @Output() private dateOrder = new EventEmitter<'oldToNew' | 'newToOld'>();
  @Output() private viewsOrder = new EventEmitter<'ascending' | 'descending'>();
  @Output() private wordFilter = new EventEmitter<string>();

  toggleVisibility(): void {
    this.show = !this.show;
  }

  setDateOrder(): void {
    if (this.dateSort === 'oldToNew') {
      this.dateSort = 'newToOld';
    } else {
      this.dateSort = 'oldToNew';
    }

    this.dateOrder.emit(this.dateSort);
  }

  setViewsOrder(): void {
    if (this.viewsSort === 'ascending') {
      this.viewsSort = 'descending';
    } else {
      this.viewsSort = 'ascending';
    }

    this.viewsOrder.emit(this.viewsSort);
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
