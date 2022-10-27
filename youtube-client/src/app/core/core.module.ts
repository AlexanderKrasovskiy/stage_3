import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { httpInterceptorProviders } from '../youtube/interceptors';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { adminCardsReducer } from '../redux/reducers/admin.reducer';

@NgModule({
  declarations: [
    HeaderComponent,
    FiltersComponent,
    NotFoundComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('adminCards', adminCardsReducer),
  ],
  exports: [
    HeaderComponent,
    FiltersComponent,
    NotFoundComponent,
    AdminPageComponent,
  ],
  providers: [...httpInterceptorProviders],
})
export class CoreModule {}
