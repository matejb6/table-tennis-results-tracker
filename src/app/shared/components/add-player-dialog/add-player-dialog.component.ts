import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AddPlayerForm } from '@core/interfaces/add-player-form';
import { AddPlayerFormData } from '@core/interfaces/add-player-form-data';

@Component({
  selector: 'app-add-player-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule],
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
