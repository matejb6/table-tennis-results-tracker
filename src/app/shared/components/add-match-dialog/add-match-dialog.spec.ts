import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddMatchDialog } from './add-match-dialog';

describe('AddMatchDialog', () => {
  let fixture: ComponentFixture<AddMatchDialog>;
  let component: AddMatchDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMatchDialog],
      providers: [
        provideZonelessChangeDetection(),
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMatchDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
