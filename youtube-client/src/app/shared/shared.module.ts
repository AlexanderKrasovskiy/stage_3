import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { VideoStatsComponent } from './components/video-stats/video-stats.component';

@NgModule({
  declarations: [VideoStatsComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [MaterialModule, VideoStatsComponent, ReactiveFormsModule],
})
export class SharedModule {}
