import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]',
})
export class BorderHighlightDirective implements OnInit {
  @Input() date!: string;
  private colors = {
    red: '#eb5757',
    green: '#27ae60',
    blue: '#2f80ed',
    yellow: '#f2c94c',
  };
  private color?: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.resolveBottomColor();

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color,
    );
  }

  private resolveBottomColor(): void {
    const todayStamp = new Date().getTime();
    const publishStamp = new Date(this.date).getTime();

    const dayInMs = 1000 * 60 * 60 * 24;
    const diffMs = todayStamp - publishStamp;
    const days = Math.floor(diffMs / dayInMs);

    if (days > 182) {
      this.color = this.colors.red;
    } else if (days >= 30) {
      this.color = this.colors.yellow;
    } else if (days > 7) {
      this.color = this.colors.green;
    } else {
      this.color = this.colors.blue;
    }
  }
}
