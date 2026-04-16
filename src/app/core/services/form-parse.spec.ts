import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { FormParse } from './form-parse';

describe('FormParse', () => {
  let service: FormParse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(FormParse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
