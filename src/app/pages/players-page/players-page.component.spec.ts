import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersPageModule } from './players-page.module';
import { PlayersPageComponent } from './players-page.component';

describe('PlayersPageComponent', () => {
  let fixture: ComponentFixture<PlayersPageComponent>;
  let component: PlayersPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, PlayersPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});