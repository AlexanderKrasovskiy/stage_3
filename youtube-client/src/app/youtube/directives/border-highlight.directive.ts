import { Directive, OnChanges, Input, HostBinding } from '@angular/core';
import { CardBottomBorderColors, DAY_IN_MS } from '../../shared/constants';

@Directive({
  selector: '[appBorderHighlight]',
})
export class BorderHighlightDirective implements OnChanges {
  @Input() dateOfPublishing?: string;
  private color?: CardBottomBorderColors;
  @HostBinding('style.borderBottom') borderBottom?: string;

  ngOnChanges(): void {
    this.resolveBottomColor();

    this.borderBottom = `5px solid ${this.color}`;
  }

  private resolveBottomColor(): void {
    if (!this.dateOfPublishing) {
      this.color = CardBottomBorderColors.Red;
      return;
    }
    const todayStamp = new Date().getTime();
    const publishStamp = new Date(this.dateOfPublishing).getTime();

    const diffMs = todayStamp - publishStamp;
    const days = Math.floor(diffMs / DAY_IN_MS);

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
