import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YtItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent {
  @Input() item!: YtItem;

  constructor(private router: Router) {}

  onDetails() {
    this.router.navigate(['main', this.item.id]);
  }
}
