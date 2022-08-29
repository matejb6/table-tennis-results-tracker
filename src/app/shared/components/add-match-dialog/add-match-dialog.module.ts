import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddMatchDialogComponent } from './add-match-dialog.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule],
  exports: [AddMatchDialogComponent],
  declarations: [AddMatchDialogComponent],
  providers: []
})
export class AddMatchDialogModule {}
