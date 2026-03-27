import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatchOverviewDialogComponent } from './match-overview-dialog.component';

// TODO Resolve test
describe('MatchOverviewDialogComponent', () => {
  let fixture: ComponentFixture<MatchOverviewDialogComponent>;
  let component: MatchOverviewDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewDialogComponent],
      providers: [provideZonelessChangeDetection(), { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
