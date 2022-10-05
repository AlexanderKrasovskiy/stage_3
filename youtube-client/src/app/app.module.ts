import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchCardComponent } from './search-list/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchListComponent,
    SearchCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
