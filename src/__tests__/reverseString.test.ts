import assert from 'power-assert';
import { reverseString } from '../reverseString';
import { showContent } from '../utils';

describe('src/reverseString', () => {
  describe('reverseString', () => {
    const test1 = ['h', 'e', 'l', 'l', 'o'];
    const test2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    it(showContent(test1), () => {
      reverseString(test1);
      assert.deepStrictEqual(test1, ['o', 'l', 'l', 'e', 'h']);
    });
    it(showContent(test2), () => {
      reverseString(test2);
      assert.deepStrictEqual(test2, ['h', 'a', 'n', 'n', 'a', 'H']);
    });
  });
});
