import { NgModule } from '@angular/core';

import { AddMatchDialogModule } from './add-match-dialog/add-match-dialog.module';
import { AddPlayerDialogModule } from './add-player-dialog/add-player-dialog.module';
import { PlayerOverviewDialogModule } from './player-overview-dialog/player-overview-dialog.module';
import { TableModule } from './table/table.module';
import { TitleBarModule } from './title-bar/title-bar.module';

@NgModule({
  imports: [AddMatchDialogModule, AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule, TitleBarModule],
  exports: [AddMatchDialogModule, AddPlayerDialogModule, PlayerOverviewDialogModule, TableModule, TitleBarModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
