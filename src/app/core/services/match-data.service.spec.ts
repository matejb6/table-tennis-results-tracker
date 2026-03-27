import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CoreModule } from '../core.module';
import { MatchDataService } from './match-data.service';

describe('MatchDataService', () => {
  let service: MatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(MatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
