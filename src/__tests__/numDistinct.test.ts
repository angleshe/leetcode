import assert from 'power-assert';
import { numDistinct } from '../numDistinct';

describe('src/numDistinct', () => {
  describe('numDistinct', () => {
    it('rabbbit, rabbit', () => {
      assert.strictEqual(numDistinct('rabbbit', 'rabbit'), 3);
    });
    it('babgbag, bag', () => {
      assert.strictEqual(numDistinct('babgbag', 'bag'), 5);
    });
  });
});
