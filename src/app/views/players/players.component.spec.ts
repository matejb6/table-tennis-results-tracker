import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersModule } from './players.module';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let fixture: ComponentFixture<PlayersComponent>;
  let component: PlayersComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, PlayersModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
