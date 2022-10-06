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
  @Output() dateOrder = new EventEmitter<'oldToNew' | 'newToOld'>();
  @Output() viewsOrder = new EventEmitter<'ascending' | 'descending'>();

  public toggleVisibility() {
    this.show = !this.show;
  }

  setDateOrder() {
    this.viewsSort = undefined;

    if (this.dateSort === 'oldToNew') {
      this.dateSort = 'newToOld';
    } else {
      this.dateSort = 'oldToNew';
    }
    this.dateOrder.emit(this.dateSort);
  }

  setViewsOrder() {
    this.dateSort = undefined;

    if (this.viewsSort === 'ascending') {
      this.viewsSort = 'descending';
    } else {
      this.viewsSort = 'ascending';
    }
    this.viewsOrder.emit(this.viewsSort);
  }
}
