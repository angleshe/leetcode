import assert from 'power-assert';
import { isRectangleCover } from '../isRectangleCover';
import { showContent } from '../utils';

describe('src/isRectangleCover', () => {
  describe('isRectangleCover', () => {
    const test1 = [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [3, 2, 4, 4],
      [1, 3, 2, 4],
      [2, 3, 3, 4]
    ];
    it(showContent(test1), () => assert.ok(isRectangleCover(test1)));
    const test2 = [
      [1, 1, 2, 3],
      [1, 3, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 4, 4]
    ];
    it(showContent(test2), () => assert.ok(!isRectangleCover(test2)));
    const test3 = [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [3, 2, 4, 4]
    ];
    it(showContent(test3), () => assert.ok(!isRectangleCover(test3)));
    const test4 = [
      [1, 1, 3, 3],
      [3, 1, 4, 2],
      [1, 3, 2, 4],
      [2, 2, 4, 4]
    ];
    it(showContent(test4), () => assert.ok(!isRectangleCover(test4)));
  });
});
