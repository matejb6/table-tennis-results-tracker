import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AddMatchDialogComponent } from './add-match-dialog.component';

describe('AddMatchDialogComponent', () => {
  let fixture: ComponentFixture<AddMatchDialogComponent>;
  let component: AddMatchDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMatchDialogComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMatchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
