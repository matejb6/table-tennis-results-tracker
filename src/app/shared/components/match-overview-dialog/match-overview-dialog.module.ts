import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatchOverviewModule } from './match-overview/match-overview.module';
import { MatchOverviewDialogComponent } from './match-overview-dialog.component';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatchOverviewModule],
  exports: [MatchOverviewDialogComponent],
  declarations: [MatchOverviewDialogComponent],
  providers: []
})
export class MatchOverviewDialogModule {}
