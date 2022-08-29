import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';

import { AddMatchDialogModule } from './add-match-dialog.module';
import { AddMatchDialogComponent } from './add-match-dialog.component';

describe('AddMatchDialogComponent', () => {
  let fixture: ComponentFixture<AddMatchDialogComponent>;
  let component: AddMatchDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AddMatchDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMatchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
