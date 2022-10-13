import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [HeaderComponent, FiltersComponent], // m.b. refactor to MainPageComponent
})
export class CoreModule {}
