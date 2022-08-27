import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AddPlayerDialogComponent } from './add-player-dialog.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule],
  exports: [AddPlayerDialogComponent],
  declarations: [AddPlayerDialogComponent],
  providers: []
})
export class AddPlayerDialogModule {}
