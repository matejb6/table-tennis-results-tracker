import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddMatchForm, AddMatchFormData, GameSetForm, GameSetFormData, Player } from '@core/interfaces';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-add-match-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './add-match-dialog.component.html',
  styleUrl: './add-match-dialog.component.scss'
})
export class AddMatchDialogComponent implements OnInit {
  public playerNames: string[] = [];
  public addMatchFormGroup: FormGroup<AddMatchForm> = new FormGroup<AddMatchForm>({
    players: new FormArray([new FormControl('', [Validators.required]), new FormControl('', [Validators.required])]),
    sets: new FormArray(
      [
        new FormGroup<GameSetForm>(
          {
            firstPlayerScore: new FormControl(0, [
              Validators.required,
              Validators.pattern('^[0-9]+$'),
              Validators.maxLength(2)
            ]),
            secondPlayerScore: new FormControl(0, [
              Validators.required,
              Validators.pattern('^[0-9]+$'),
              Validators.maxLength(2)
            ])
          },
          [CustomValidators.setGems.bind(this)]
        )
      ],
      [CustomValidators.matchSets.bind(this)]
    )
  });

  public get playersControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('players') as FormArray).controls;
  }

  public get setControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('sets') as FormArray).controls;
  }

  constructor(
    private matDialogRef: MatDialogRef<AddMatchDialogComponent, Partial<AddMatchFormData>>,
    @Inject(MAT_DIALOG_DATA) public players: Player[]
  ) {}

  ngOnInit() {
    this.playerNames = this.players instanceof Array ? this.players.map((item) => item.name) : [];
  }

  /**
   * Option is disabled if already selected in another selection
   * @returns Option disabled
   */
  public isOptionDisabled(index: number, playerName: string): boolean {
    const oppositeControl = index ? this.playersControls[0] : this.playersControls[1];
    return oppositeControl.value === playerName;
  }

  /**
   * Add set button disabled if some sets are invalid of if 5 sets are reached
   * @returns Add set disabled
   */
  public addSetDisabled(): boolean {
    return this.setControls.some((item) => item.invalid) || (this.addMatchFormGroup.get('sets') as FormArray).valid;
  }

  /**
   * Adds set form group to sets form array
   */
  public addSet(): void {
    (this.addMatchFormGroup.get('sets') as FormArray).push(
      new FormGroup<GameSetForm>(
        {
          firstPlayerScore: new FormControl(0, [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2)
          ]),
          secondPlayerScore: new FormControl(0, [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2)
          ])
        },
        [CustomValidators.setGems.bind(this)]
      )
    );
  }

  /**
   * Remove set button disabled if one set is present
   * @returns Remove set disabled
   */
  public removeSetDisabled(): boolean {
    return this.setControls.length < 2;
  }

  /**
   * Removes set from set form array
   */
  public removeSet(): void {
    ((this.addMatchFormGroup.get('sets') as FormArray).value as GameSetFormData[]).pop();
    this.setControls.pop();
    this.addMatchFormGroup.get('sets')?.updateValueAndValidity();
  }

  /**
   * Submits form, closes dialog and emits form values
   */
  public submit(): void {
    this.matDialogRef.close(this.addMatchFormGroup.value);
  }
}
