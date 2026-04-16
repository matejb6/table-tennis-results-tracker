import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { MatchData } from './match-data';

describe('MatchData', () => {
  let service: MatchData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(MatchData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
