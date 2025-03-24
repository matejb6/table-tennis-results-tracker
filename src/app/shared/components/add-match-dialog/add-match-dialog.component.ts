import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddMatchForm } from '@core/interfaces/add-match-form';
import { AddMatchFormData } from '@core/interfaces/add-match-form-data';
import { GameSetForm } from '@core/interfaces/game-set-form';
import { GameSetFormData } from '@core/interfaces/game-set-form-data';
import { Player } from '@core/interfaces/player';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-add-match-dialog',
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

  constructor(
    private matDialogRef: MatDialogRef<AddMatchDialogComponent, Partial<AddMatchFormData>>,
    @Inject(MAT_DIALOG_DATA) public players: Player[]
  ) {}

  ngOnInit() {
    this.playerNames = this.players instanceof Array ? this.players.map((item) => item.name) : [];
  }

  /**
   * Player form controls
   * @returns Player controls
   */
  public getPlayersControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('players') as FormArray).controls;
  }

  /**
   * Option is disabled if already selected in another selection
   * @returns Option disabled
   */
  public isOptionDisabled(index: number, playerName: string): boolean {
    const oppositeControl = index ? this.getPlayersControls()[0] : this.getPlayersControls()[1];
    return oppositeControl.value === playerName;
  }

  /**
   * Set form controls
   * @returns Set controls
   */
  public getSetControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('sets') as FormArray).controls;
  }

  /**
   * Add set button disabled if some sets are invalid of if 5 sets are reached
   * @returns Add set disabled
   */
  public addSetDisabled(): boolean {
    return (
      this.getSetControls().some((item) => item.invalid) || (this.addMatchFormGroup.get('sets') as FormArray).valid
    );
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
    return this.getSetControls().length < 2;
  }

  /**
   * Removes set from set form array
   */
  public removeSet(): void {
    ((this.addMatchFormGroup.get('sets') as FormArray).value as GameSetFormData[]).pop();
    this.getSetControls().pop();
    this.addMatchFormGroup.get('sets')?.updateValueAndValidity();
  }

  /**
   * Submits form, closes dialog and emits form values
   */
  public submit(): void {
    this.matDialogRef.close(this.addMatchFormGroup.value);
  }
}
