import assert from 'power-assert';
import { hammingDistance } from '../hammingDistance';

describe('src/hammingDistance', () => {
  describe('hammingDistance', () => {
    it('1, 4', () => assert.strictEqual(hammingDistance(1, 4), 2));
    it('3, 1', () => assert.strictEqual(hammingDistance(3, 1), 1));
  });
});
