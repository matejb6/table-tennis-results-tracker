import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPage } from './players-page';

describe('PlayersPage', () => {
  let fixture: ComponentFixture<PlayersPage>;
  let component: PlayersPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersPage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
