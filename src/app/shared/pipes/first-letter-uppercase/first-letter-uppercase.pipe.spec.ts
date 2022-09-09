import { FirstLetterUppercasePipe } from './first-letter-uppercase.pipe';

describe('FirstLetterUppercasePipe', () => {
  const pipe = new FirstLetterUppercasePipe();

  it('should transform "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
