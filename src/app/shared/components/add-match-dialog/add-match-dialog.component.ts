import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Player } from '@core/models/player';

@Component({
  selector: 'app-add-match-dialog',
  templateUrl: './add-match-dialog.component.html',
  styleUrls: ['./add-match-dialog.component.scss']
})
export class AddMatchDialogComponent implements OnInit {
  public addMatchFormGroup: FormGroup = new FormGroup({
    firstPlayerName: new FormControl(),
    secondPlayerName: new FormControl()
  });

  constructor(
    private matDialogRef: MatDialogRef<AddMatchDialogComponent, AddMatchForm>,
    @Inject(MAT_DIALOG_DATA) public players: Player[]
  ) {}

  ngOnInit() {
    this.initAddMatchFormGroup();
  }

  /**
   * @description Inits add match form group with validations
   */
  private initAddMatchFormGroup(): void {
    this.addMatchFormGroup = new FormGroup({
      firstPlayerName: new FormControl('', [Validators.required]),
      secondPlayerName: new FormControl('', [Validators.required])
    });
  }

  /**
   * @description Submits form, closes dialog and emits form values
   */
  public onSubmit(): void {
    this.matDialogRef.close(this.addMatchFormGroup.value);
  }
}

export interface AddMatchForm {
  firstPlayerName: string;
  secondPlayerName: string;
}
