import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatchOverviewDialog } from './match-overview-dialog';

describe('MatchOverviewDialog', () => {
  let fixture: ComponentFixture<MatchOverviewDialog>;
  let component: MatchOverviewDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewDialog],
      providers: [provideZonelessChangeDetection(), { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
