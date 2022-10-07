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
    this.dateSort = this.dateSort === 'oldToNew' ? 'newToOld' : 'oldToNew';

    this.dateOrder.emit(this.dateSort);
  }

  setViewsOrder(): void {
    this.viewsSort =
      this.viewsSort === 'ascending' ? 'descending' : 'ascending';

    this.viewsOrder.emit(this.viewsSort);
  }

  setWordFilter(value: string): void {
    this.wordFilter.emit(value);
  }
}
