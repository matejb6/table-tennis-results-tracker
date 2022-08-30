import { TestBed } from '@angular/core/testing';

import { CoreModule } from '@core/core.module';
import { FormParseService } from './form-parse.service';

describe('FormParseService', () => {
  let service: FormParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule]
    });
    service = TestBed.inject(FormParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
