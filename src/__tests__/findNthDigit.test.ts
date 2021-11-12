import assert from 'power-assert';
import { findNthDigit } from '../findNthDigit';

describe('src/findNthDigit', () => {
  describe('findNthDigit', () => {
    it('3', () => assert.strictEqual(findNthDigit(3), 3));
    it('11', () => assert.strictEqual(findNthDigit(11), 0));
  });
});
