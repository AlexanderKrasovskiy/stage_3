import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { CardBottomBorderColors } from '../constants';

@Directive({
  selector: '[appBorderHighlight]',
})
export class BorderHighlightDirective implements OnInit {
  @Input() dateOfPublishing?: string;
  private color?: CardBottomBorderColors;
  @HostBinding('style.backgroundColor') backgroundColor?: string;

  ngOnInit(): void {
    this.resolveBottomColor();

    this.backgroundColor = this.color;
  }

  private resolveBottomColor(): void {
    if (!this.dateOfPublishing) {
      this.color = CardBottomBorderColors.Red;
    } else {
      const todayStamp = new Date().getTime();
      const publishStamp = new Date(this.dateOfPublishing).getTime();

      const dayInMs = 1000 * 60 * 60 * 24;
      const diffMs = todayStamp - publishStamp;
      const days = Math.floor(diffMs / dayInMs);

      if (days > 182) {
        this.color = CardBottomBorderColors.Red;
      } else if (days >= 30) {
        this.color = CardBottomBorderColors.Yellow;
      } else if (days > 7) {
        this.color = CardBottomBorderColors.Green;
      } else {
        this.color = CardBottomBorderColors.Blue;
      }
    }
  }
}
