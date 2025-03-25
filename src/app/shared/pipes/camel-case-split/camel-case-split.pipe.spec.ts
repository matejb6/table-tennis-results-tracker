import { CamelCaseSplitPipe } from './camel-case-split.pipe';

describe('CamelCaseSplitPipe', () => {
  let pipe: CamelCaseSplitPipe;

  beforeEach(() => {
    pipe = new CamelCaseSplitPipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "abcDef" to "abc Def"', () => {
    expect(pipe.transform('abcDef')).toBe('abc Def');
  });
});
