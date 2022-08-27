import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player-dialog',
  templateUrl: './add-player-dialog.component.html',
  styleUrls: ['./add-player-dialog.component.scss']
})
export class AddPlayerDialogComponent implements OnInit {
  public addPlayerFormGroup: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor() {}

  ngOnInit(): void {
    this.addPlayerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  public onSubmit(): void {
    console.log(this.addPlayerFormGroup);
  }
}

export interface AddPlayerForm {
  name: string;
}
