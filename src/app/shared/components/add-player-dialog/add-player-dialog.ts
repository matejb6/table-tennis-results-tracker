import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AddPlayerForm, AddPlayerFormData } from '@app/core/interfaces';

@Component({
  selector: 'app-add-player-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule],
  templateUrl: './add-player-dialog.html',
  styleUrl: './add-player-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlayerDialog {
  private matDialogRef = inject(MatDialogRef<AddPlayerDialog, Partial<AddPlayerFormData>>);

  addPlayerFormGroup: FormGroup<AddPlayerForm> = new FormGroup<AddPlayerForm>({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
  });

  /**
   * Submits form, closes dialog and emits form data
   */
  submit(): void {
    this.matDialogRef.close(this.addPlayerFormGroup.value);
  }
}
