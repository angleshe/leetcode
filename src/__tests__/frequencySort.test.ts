import assert from 'power-assert';
import { frequencySort } from '../frequencySort';

describe('src/frequencySort', () => {
  describe('frequencySort', () => {
    it('tree', () => assert.strictEqual(frequencySort('tree'), 'eetr'));
    it('cccaaa', () => assert.strictEqual(frequencySort('cccaaa'), 'cccaaa'));
    it('cccaaAabba', () => assert.strictEqual(frequencySort('Aabb'), 'bbAa'));
  });
});
