import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public show = false;
  private dateSort?: 'oldToNew' | 'newToOld';
  private viewsSort?: 'ascending' | 'descending';
  @Output() private dateOrder = new EventEmitter<'oldToNew' | 'newToOld'>();
  @Output() private viewsOrder = new EventEmitter<'ascending' | 'descending'>();
  @Output() private wordFilter = new EventEmitter<string>();

  public toggleVisibility() {
    this.show = !this.show;
  }

  public setDateOrder() {
    this.viewsSort = undefined;

    if (this.dateSort === 'oldToNew') {
      this.dateSort = 'newToOld';
    } else {
      this.dateSort = 'oldToNew';
    }
    this.dateOrder.emit(this.dateSort);
  }

  public setViewsOrder() {
    this.dateSort = undefined;

    if (this.viewsSort === 'ascending') {
      this.viewsSort = 'descending';
    } else {
      this.viewsSort = 'ascending';
    }
    this.viewsOrder.emit(this.viewsSort);
  }

  public setWordFilter(value: string) {
    this.wordFilter.emit(value);
  }
}
