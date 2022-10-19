import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { VideoStatsComponent } from './components/video-stats/video-stats.component';

@NgModule({
  declarations: [VideoStatsComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [FormsModule, MaterialModule, VideoStatsComponent],
})
export class SharedModule {}
