import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './header/filters/filters.component';
import { AuthComponent } from './main/auth/auth.component';
import { SearchListComponent } from './main/search/search-list/search-list.component';
import { SearchCardComponent } from './main/search/search-card/search-card.component';
import { SearchDetailsComponent } from './main/search/search-details/search-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    AuthComponent,
    SearchListComponent,
    SearchCardComponent,
    SearchDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
