import { TestBed } from '@angular/core/testing';

import { CoreModule } from '@core/core.module';
import { MatchDataService } from './match-data.service';

describe('MatchDataService', () => {
  let service: MatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
    service = TestBed.inject(MatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
