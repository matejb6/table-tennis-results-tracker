import { NgModule } from '@angular/core';

import { AddPlayerDialogModule } from './add-player-dialog/add-player-dialog.module';
import { PlayerOverviewDialogModule } from './player-overview-dialog/player-overview-dialog.module';
import { TableModule } from './table/table.module';
import { TitleBarModule } from './title-bar/title-bar.module';

@NgModule({
  imports: [AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule, TitleBarModule],
  exports: [AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule, TitleBarModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
