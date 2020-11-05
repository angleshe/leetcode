import { rangeBitwiseAnd } from '../rangeBitwiseAnd';
import assert from 'power-assert';

describe('src/rangeBitwiseAnd', () => {
  describe('rangeBitwiseAnd', () => {
    it('5, 7', () => assert.strictEqual(rangeBitwiseAnd(5, 7), 4));
    it('0, 1', () => assert.strictEqual(rangeBitwiseAnd(0, 1), 0));
  });
});
