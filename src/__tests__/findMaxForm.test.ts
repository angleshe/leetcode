import assert from 'power-assert';
import { findMaxForm, getZeroAndOneCount } from '../findMaxForm';

describe('src/findMaxForm', () => {
  describe('getZeroAndOneCount', () => {
    it('0001', () => assert.deepStrictEqual(getZeroAndOneCount('0001'), [3, 1]));
    it('1', () => assert.deepStrictEqual(getZeroAndOneCount('1'), [0, 1]));
    it('0', () => assert.deepStrictEqual(getZeroAndOneCount('0'), [1, 0]));
  });
  describe('findMaxForm', () => {
    it('["10", "0001", "111001", "1", "0"], 5, 3', () =>
      assert.strictEqual(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3), 4));
    it('["10", "0", "1"], 1, 1', () => assert.strictEqual(findMaxForm(['10', '0', '1'], 1, 1), 2));
  });
});
