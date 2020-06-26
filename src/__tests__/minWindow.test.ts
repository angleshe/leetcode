import assert from 'power-assert';
import { minWindow } from '../minWindow';

describe('src/minWindow', () => {
  describe('minWindow', () => {
    it('ADOBECODEBANC, ABC', () => {
      assert.strictEqual(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
    });
    it('a, aa', () => {
      assert.strictEqual(minWindow('a', 'aa'), '');
    });
    it('abbb, aa', () => {
      assert.strictEqual(minWindow('abbbb', 'aa'), '');
    });
  });
});
