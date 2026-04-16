import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesPage } from './matches-page';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MatchesPage', () => {
  let fixture: ComponentFixture<MatchesPage>;
  let component: MatchesPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesPage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
