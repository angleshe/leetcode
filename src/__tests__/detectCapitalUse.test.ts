import assert from 'power-assert';
import { detectCapitalUse } from '../detectCapitalUse';

describe('src/detectCapitalUse', () => {
  describe('detectCapitalUse', () => {
    it('USA', () => assert.ok(detectCapitalUse('USA')));
    it('FlaG', () => assert.ok(!detectCapitalUse('FlaG')));
    it('G', () => assert.ok(detectCapitalUse('G')));
  });
});
