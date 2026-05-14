import { ChangeDetectionStrategy, Component, inject, InjectionToken, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  AddMatchForm,
  AddMatchFormData,
  GameSetForm,
  GameSetFormData,
  Player,
} from '@app/core/interfaces';
import { CustomValidators } from '../../validators';

@Component({
  selector: 'app-add-match-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './add-match-dialog.html',
  styleUrl: './add-match-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMatchDialog implements OnInit {
  private matDialogRef = inject(MatDialogRef<AddMatchDialog, Partial<AddMatchFormData>>);
  players = inject(MAT_DIALOG_DATA as InjectionToken<Player[]>);

  playerNames: string[] = [];
  addMatchFormGroup = new FormGroup<AddMatchForm>({
    firstPlayer: new FormControl('', [Validators.required]),
    secondPlayer: new FormControl('', [Validators.required]),
    sets: new FormArray(
      [
        new FormGroup<GameSetForm>(
          {
            firstPlayerScore: new FormControl(0, [
              Validators.required,
              Validators.pattern('^[0-9]+$'),
              Validators.maxLength(2),
            ]),
            secondPlayerScore: new FormControl(0, [
              Validators.required,
              Validators.pattern('^[0-9]+$'),
              Validators.maxLength(2),
            ]),
          },
          CustomValidators.setGems,
        ),
      ],
      CustomValidators.matchSets,
    ),
  });

  get setControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('sets') as FormArray).controls;
  }

  get addSetDisabled(): boolean {
    return (
      this.setControls.some((item) => item.invalid) ||
      (this.addMatchFormGroup.get('sets') as FormArray).valid
    );
  }

  get removeSetDisabled(): boolean {
    return this.setControls.length < 2;
  }

  ngOnInit() {
    this.initPlayerNames();
  }

  /**
   * Initializes player names
   */
  private initPlayerNames(): void {
    this.playerNames = this.players.map((item) => item.name);
  }

  /**
   * Option is disabled if already selected in another selection
   * @returns Option disabled
   */
  isOptionDisabled(formGroupControl: string, option: string): boolean {
    return formGroupControl === 'firstPlayer'
      ? this.addMatchFormGroup.get('secondPlayer')?.value === option
      : this.addMatchFormGroup.get('firstPlayer')?.value === option;
  }

  /**
   * Adds set form group to sets form array
   */
  addSet(): void {
    (this.addMatchFormGroup.get('sets') as FormArray).push(
      new FormGroup<GameSetForm>(
        {
          firstPlayerScore: new FormControl(0, [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2),
          ]),
          secondPlayerScore: new FormControl(0, [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2),
          ]),
        },
        CustomValidators.setGems,
      ),
    );
  }

  /**
   * Removes set from set form array
   */
  removeSet(): void {
    ((this.addMatchFormGroup.get('sets') as FormArray).value as GameSetFormData[]).pop();
    this.setControls.pop();
    this.addMatchFormGroup.get('sets')?.updateValueAndValidity();
  }

  /**
   * Submits form, closes dialog and emits form values
   */
  submit(): void {
    this.matDialogRef.close(this.addMatchFormGroup.value);
  }
}
