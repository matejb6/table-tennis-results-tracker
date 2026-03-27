import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPageComponent } from './players-page.component';

describe('PlayersPageComponent', () => {
  let fixture: ComponentFixture<PlayersPageComponent>;
  let component: PlayersPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersPageComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
