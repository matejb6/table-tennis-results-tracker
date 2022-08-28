import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PlayerOverviewDialogComponent } from './player-overview-dialog.component';

@NgModule({
  imports: [MatButtonModule, MatDialogModule],
  exports: [PlayerOverviewDialogComponent],
  declarations: [PlayerOverviewDialogComponent],
  providers: []
})
export class PlayerOverviewDialogModule {}
