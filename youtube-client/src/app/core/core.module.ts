import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { httpInterceptorProviders } from '../youtube/interceptors';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent, FiltersComponent, NotFoundComponent],
  providers: [...httpInterceptorProviders],
})
export class CoreModule {}
