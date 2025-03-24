import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PlayerOverviewDialogComponent } from './player-overview-dialog.component';

describe('PlayerOverviewDialogComponent', () => {
  let fixture: ComponentFixture<PlayerOverviewDialogComponent>;
  let component: PlayerOverviewDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerOverviewDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
