import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public query: string = '';
  @Output() public search = new EventEmitter<string>();
  @Output() public toggle = new EventEmitter();

  public onSearch() {
    if (this.query) {
      // console.log(this.query);
      this.search.emit(this.query);
    }
  }

  public toggleFilters() {
    this.toggle.emit();
  }
}
