import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatchOverviewDialogComponent } from './match-overview-dialog.component';

@NgModule({
  imports: [MatButtonModule, MatDialogModule],
  exports: [MatchOverviewDialogComponent],
  declarations: [MatchOverviewDialogComponent],
  providers: []
})
export class MatchOverviewDialogModule {}
