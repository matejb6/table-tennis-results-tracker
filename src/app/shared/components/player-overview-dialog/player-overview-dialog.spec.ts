import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PlayerOverviewDialog } from './player-overview-dialog';

describe('PlayerOverviewDialog', () => {
  let fixture: ComponentFixture<PlayerOverviewDialog>;
  let component: PlayerOverviewDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerOverviewDialog],
      providers: [provideZonelessChangeDetection(), { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerOverviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
