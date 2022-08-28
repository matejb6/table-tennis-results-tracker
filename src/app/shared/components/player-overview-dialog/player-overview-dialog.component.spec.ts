import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewDialogModule } from './player-overview-dialog.module';
import { PlayerOverviewDialogComponent } from './player-overview-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('PlayerOverviewDialogComponent', () => {
  let fixture: ComponentFixture<PlayerOverviewDialogComponent>;
  let component: PlayerOverviewDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerOverviewDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
