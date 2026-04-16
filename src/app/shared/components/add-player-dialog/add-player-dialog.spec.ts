import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AddPlayerDialog } from './add-player-dialog';

describe('AddPlayerDialog', () => {
  let fixture: ComponentFixture<AddPlayerDialog>;
  let component: AddPlayerDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayerDialog],
      providers: [provideZonelessChangeDetection(), { provide: MatDialogRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
