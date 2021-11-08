import assert from 'power-assert';
import { integerReplacement } from '../integerReplacement';

describe('src/integerReplacement', () => {
  describe('integerReplacement', () => {
    it('8', () => assert.strictEqual(integerReplacement(8), 3));
    it('7', () => assert.strictEqual(integerReplacement(7), 4));
    it('4', () => assert.strictEqual(integerReplacement(4), 2));
  });
});
