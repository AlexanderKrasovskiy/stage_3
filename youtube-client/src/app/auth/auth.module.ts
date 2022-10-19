import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';

@NgModule({
  declarations: [LogInPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [LogInPageComponent],
})
export class AuthModule {}
