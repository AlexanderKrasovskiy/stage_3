import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public show = false;
  private dateSort?: 'oldToNew' | 'newToOld';
  @Output() dateOrder = new EventEmitter<'oldToNew' | 'newToOld'>();

  public toggleVisibility() {
    this.show = !this.show;
  }

  setDateOrder() {
    if (this.dateSort === 'oldToNew') {
      this.dateSort = 'newToOld';
    } else {
      this.dateSort = 'oldToNew';
    }
    this.dateOrder.emit(this.dateSort);
  }
}
