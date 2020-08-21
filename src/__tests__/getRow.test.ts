import assert from 'power-assert';
import { getRow } from '../getRow';

describe('src/getRow', () => {
  describe('getRow', () => {
    it('3', () => assert.deepStrictEqual(getRow(3), [1, 3, 3, 1]));
  });
});
