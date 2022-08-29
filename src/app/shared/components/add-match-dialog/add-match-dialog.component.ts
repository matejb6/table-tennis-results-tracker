import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Player } from '@core/models/player';

@Component({
  selector: 'app-add-match-dialog',
  templateUrl: './add-match-dialog.component.html',
  styleUrls: ['./add-match-dialog.component.scss']
})
export class AddMatchDialogComponent implements OnInit {
  public playerNames: string[] = [];
  public addMatchFormGroup: FormGroup = new FormGroup({
    players: new FormArray([]),
    sets: new FormArray([])
  });

  constructor(
    private matDialogRef: MatDialogRef<AddMatchDialogComponent, AddMatchForm>,
    @Inject(MAT_DIALOG_DATA) public players: Player[]
  ) {}

  ngOnInit() {
    this.playerNames = this.players instanceof Array ? this.players.map((item) => item.name) : [];
    this.initAddMatchFormGroup();
  }

  /**
   * @description Inits add match form group with validations
   */
  private initAddMatchFormGroup(): void {
    this.addMatchFormGroup = new FormGroup({
      players: new FormArray([new FormControl('', [Validators.required]), new FormControl('', [Validators.required])]),
      sets: new FormArray([], this.matchSets.bind(this))
    });
    this.addSet();
  }

  /**
   * @description Validator for match sets, valid if at least one player reaches 3 sets won
   */
  private matchSets(control: AbstractControl): ValidationErrors | null {
    let firstPlayerSetsWon = 0;
    let secondPlayerSetsWon = 0;
    const sets: { firstPlayerScore: number; secondPlayerScore: number }[] = control.value;

    sets.forEach((item) => {
      if (item.firstPlayerScore > item.secondPlayerScore) {
        firstPlayerSetsWon = ++firstPlayerSetsWon;
      } else {
        secondPlayerSetsWon = ++secondPlayerSetsWon;
      }
    });
    const valid = firstPlayerSetsWon >= 3 || secondPlayerSetsWon >= 3;

    return !valid ? { matchValid: true } : null;
  }

  /**
   * @description Validator for set gems,
   * valid if gem is won by 11 points and more than 1 point difference or by 12 or more points and 2 points difference
   */
  private setGems(control: AbstractControl): ValidationErrors | null {
    const firstPlayerScore: number = control.value.firstPlayerScore;
    const secondPlayerScore: number = control.value.secondPlayerScore;
    let valid = false;

    if (firstPlayerScore === 11 && secondPlayerScore < 10) {
      valid = true;
    } else if (secondPlayerScore === 11 && firstPlayerScore < 10) {
      valid = true;
    } else if (firstPlayerScore > 11 && secondPlayerScore === firstPlayerScore - 2) {
      valid = true;
    } else if (secondPlayerScore > 11 && firstPlayerScore === secondPlayerScore - 2) {
      valid = true;
    }

    return !valid ? { setValid: true } : null;
  }

  /**
   * @returns Player controls
   * @description Player form controls
   */
  public getPlayersControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('players') as FormArray).controls;
  }

  /**
   * @returns Option disabled
   * @description Option is disabled if already selected in another selection
   */
  public isOptionDisabled(index: number, playerName: string): boolean {
    const oppositeControl = index ? this.getPlayersControls()[0] : this.getPlayersControls()[1];
    return oppositeControl.value === playerName;
  }

  /**
   * @returns Set controls
   * @description Set form controls
   */
  public getSetControls(): AbstractControl[] {
    return (this.addMatchFormGroup.get('sets') as FormArray).controls;
  }

  /**
   * @returns Add set disabled
   * @description Add set button disabled if some sets are invalid of if 5 sets are reached
   */
  public addSetDisabled(): boolean {
    return this.getSetControls().some((item) => item.invalid) || this.getSetControls().length >= 5;
  }

  /**
   * @description Adds set form group to sets form array
   */
  public addSet(): void {
    (this.addMatchFormGroup.get('sets') as FormArray).push(
      new FormGroup(
        {
          firstPlayerScore: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2)
          ]),
          secondPlayerScore: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.maxLength(2)
          ])
        },
        [this.setGems.bind(this)]
      )
    );
  }

  /**
   * @returns Remove set disabled
   * @description Remove set button disabled if one set is present
   */
  public removeSetDisabled(): boolean {
    return this.getSetControls().length < 2;
  }

  /**
   * @description Removes set from set form array
   */
  public removeSet(): void {
    this.getSetControls().pop();
  }
  /**
   * @description Submits form, closes dialog and emits form values
   */
  public onSubmit(): void {
    this.matDialogRef.close(this.addMatchFormGroup.value);
  }
}

export interface AddMatchForm {
  players: string[];
  sets: [number, number][];
}
