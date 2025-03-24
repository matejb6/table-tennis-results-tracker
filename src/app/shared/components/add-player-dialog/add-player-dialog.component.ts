import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AddPlayerForm } from '@core/interfaces/add-player-form';
import { AddPlayerFormData } from '@core/interfaces/add-player-form-data';

@Component({
  selector: 'app-add-player-dialog',
  templateUrl: './add-player-dialog.component.html',
  styleUrl: './add-player-dialog.component.scss'
})
export class AddPlayerDialogComponent {
  public addPlayerFormGroup: FormGroup<AddPlayerForm> = new FormGroup<AddPlayerForm>({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z]+$')
    ])
  });

  constructor(private matDialogRef: MatDialogRef<AddPlayerDialogComponent, Partial<AddPlayerFormData>>) {}

  /**
   * Submits form, closes dialog and emits form data
   */
  public submit(): void {
    this.matDialogRef.close(this.addPlayerFormGroup.value);
  }
}
