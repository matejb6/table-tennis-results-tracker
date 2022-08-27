import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddPlayerDialogModule } from './add-player-dialog.module';
import { AddPlayerDialogComponent } from './add-player-dialog.component';

describe('AddPlayerDialogComponent', () => {
  let fixture: ComponentFixture<AddPlayerDialogComponent>;
  let component: AddPlayerDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, AddPlayerDialogModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
