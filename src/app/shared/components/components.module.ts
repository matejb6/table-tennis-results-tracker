import { NgModule } from '@angular/core';

import { AddPlayerDialogModule } from './add-player-dialog/add-player-dialog.module';
import { TableModule } from './table/table.module';

@NgModule({
  imports: [AddPlayerDialogModule, TableModule],
  exports: [AddPlayerDialogModule, TableModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
