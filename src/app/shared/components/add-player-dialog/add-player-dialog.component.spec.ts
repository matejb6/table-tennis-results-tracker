import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';

import { AddPlayerDialogComponent } from './add-player-dialog.component';

describe('AddPlayerDialogComponent', () => {
  let fixture: ComponentFixture<AddPlayerDialogComponent>;
  let component: AddPlayerDialogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AddPlayerDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
