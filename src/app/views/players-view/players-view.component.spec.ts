import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersViewModule } from './players-view.module';
import { PlayersViewComponent } from './players-view.component';

describe('PlayersViewComponent', () => {
  let fixture: ComponentFixture<PlayersViewComponent>;
  let component: PlayersViewComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, PlayersViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
