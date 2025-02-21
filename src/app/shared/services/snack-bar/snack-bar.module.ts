import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackBarService } from './snack-bar.service';

@NgModule({
  imports: [MatSnackBarModule],
  exports: [],
  declarations: [],
  providers: [SnackBarService]
})
export class SnackBarModule {}
