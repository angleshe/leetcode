import assert from 'power-assert';
import { grayCode } from '../grayCode';

describe('src/grayCode', () => {
  describe('grayCode', () => {
    it('2', () => {
      assert.deepStrictEqual(grayCode(2), [0, 1, 3, 2]);
    });
    it('0', () => {
      assert.deepStrictEqual(grayCode(0), [0]);
    });
  });
});
