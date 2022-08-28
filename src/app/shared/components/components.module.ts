import { NgModule } from '@angular/core';

import { AddPlayerDialogModule } from './add-player-dialog/add-player-dialog.module';
import { PlayerOverviewDialogModule } from './player-overview-dialog/player-overview-dialog.module';
import { TableModule } from './table/table.module';

@NgModule({
  imports: [AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule],
  exports: [AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
