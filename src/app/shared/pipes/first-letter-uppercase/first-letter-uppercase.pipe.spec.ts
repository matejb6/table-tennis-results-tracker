import { FirstLetterUppercasePipe } from './first-letter-uppercase.pipe';

describe('FirstLetterUppercasePipe', () => {
  let pipe: FirstLetterUppercasePipe;

  beforeEach(() => {
    pipe = new FirstLetterUppercasePipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
