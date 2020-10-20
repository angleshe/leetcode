import assert from 'power-assert';
import { titleToNumber } from '../titleToNumber';

describe('src/titleToNumber', () => {
  describe('titleToNumber', () => {
    it('A', () => assert.strictEqual(titleToNumber('A'), 1));
    it('AB', () => assert.strictEqual(titleToNumber('AB'), 28));
    it('ZY', () => assert.strictEqual(titleToNumber('ZY'), 701));
  });
});
