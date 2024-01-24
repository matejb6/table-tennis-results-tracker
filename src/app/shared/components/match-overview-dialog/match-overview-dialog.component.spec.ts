import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverviewDialogModule } from './match-overview-dialog.module';
import { MatchOverviewDialogComponent } from './match-overview-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MatchOverviewDialogComponent', () => {
  let fixture: ComponentFixture<MatchOverviewDialogComponent>;
  let component: MatchOverviewDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewDialogModule],
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
