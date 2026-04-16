import { FirstLetterUppercase } from './first-letter-uppercase';

describe('FirstLetterUppercase', () => {
  const pipe = new FirstLetterUppercase();

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
