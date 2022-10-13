import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { BorderHighlightDirective } from './directives/border-highlight.directive';

@NgModule({
  declarations: [BorderHighlightDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, BorderHighlightDirective],
})
export class SharedModule {}
