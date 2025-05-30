import { NgModule } from '@angular/core';

import { DialogModule } from './dialog/dialog.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';

@NgModule({
  imports: [DialogModule, SnackBarModule],
  exports: [],
  declarations: [],
  providers: []
})
export class ServicesModule {}
