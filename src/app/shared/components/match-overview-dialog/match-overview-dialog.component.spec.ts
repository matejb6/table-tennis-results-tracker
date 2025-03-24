import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverviewDialogComponent } from './match-overview-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MatchOverviewDialogComponent', () => {
  let fixture: ComponentFixture<MatchOverviewDialogComponent>;
  let component: MatchOverviewDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
