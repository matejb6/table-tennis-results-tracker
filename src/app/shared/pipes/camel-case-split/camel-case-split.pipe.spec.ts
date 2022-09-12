import { CamelCaseSplitPipe } from './camel-case-split.pipe';

describe('CamelCaseSplitPipe', () => {
  const pipe = new CamelCaseSplitPipe();

  it('should transform "abcDef" to "abc Def"', () => {
    expect(pipe.transform('abcDef')).toBe('abc Def');
  });
});
