import assert from 'power-assert';
import { minCut } from '../minCut';

describe('src/minCut', () => {
  describe('minCut', () => {
    it('aab', () => assert.strictEqual(minCut('aab'), 1));
    it('abbab', () => assert.strictEqual(minCut('abbab'), 1));
  });
});
