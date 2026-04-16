import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverview } from './match-overview';

describe('MatchOverview', () => {
  let fixture: ComponentFixture<MatchOverview>;
  let component: MatchOverview;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverview],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
