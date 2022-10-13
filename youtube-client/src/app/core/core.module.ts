import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [HeaderComponent, FiltersComponent], // just MainComponent ?
})
export class CoreModule {}
