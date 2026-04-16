import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { FormParseService } from './form-parse.service';

describe('FormParseService', () => {
  let service: FormParseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(FormParseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
