import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesPageComponent } from './matches-page.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MatchesPageComponent', () => {
  let fixture: ComponentFixture<MatchesPageComponent>;
  let component: MatchesPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesPageComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
