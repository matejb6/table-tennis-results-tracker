import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-player-dialog',
  templateUrl: './add-player-dialog.component.html',
  styleUrls: ['./add-player-dialog.component.scss']
})
export class AddPlayerDialogComponent implements OnInit {
  public addPlayerFormGroup: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private matDialogRef: MatDialogRef<AddPlayerDialogComponent, AddPlayerForm>) {}

  ngOnInit(): void {
    this.addPlayerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  public onSubmit(): void {
    this.matDialogRef.close(this.addPlayerFormGroup.value);
  }
}

export interface AddPlayerForm {
  name: string;
}
