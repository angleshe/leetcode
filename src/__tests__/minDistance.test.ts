import assert from 'power-assert';
import { minDistance } from '../minDistance';

describe('src/minDistance', () => {
  describe('minDistance', () => {
    it('horse, ros', () => {
      assert.strictEqual(minDistance('horse', 'ros'), 3);
    });
    it('intention, execution', () => {
      assert.strictEqual(minDistance('intention', 'execution'), 5);
    });
  });
});
