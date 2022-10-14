import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module'; // move to Router + Auth
import { AuthModule } from './auth/auth.module'; // move to Router + Auth

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    YoutubeModule, // move to Router + Auth
    AuthModule, // move to Router + Auth
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
