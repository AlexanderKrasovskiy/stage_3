import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YtItem } from '../../models/search-item.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() card!: YtItem;

  constructor(private router: Router) {}

  onDetails() {
    this.router.navigate(['main', this.card.id]);
  }
}
