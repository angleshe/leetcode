import assert from 'power-assert';
import { constructRectangle } from '../constructRectangle';

describe('src/constructRectangle', () => {
  describe('constructRectangle', () => {
    it('4', () => assert.deepStrictEqual(constructRectangle(4), [2, 2]));
    it('37', () => assert.deepStrictEqual(constructRectangle(37), [37, 1]));
    it('122122', () => assert.deepStrictEqual(constructRectangle(122122), [427, 286]));
  });
});
