import assert from 'power-assert';
import { totalNQueens, updateCheckoerboard } from '../totalNQueens';
import { showContent } from '../utils';

describe('src/totalNQueens', () => {
  const testCheckoerboard: boolean[][] = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];
  describe('updateCheckoerboard', () => {
    it(`${showContent(testCheckoerboard)}, 1, 1`, () => {
      updateCheckoerboard(testCheckoerboard, 1, 1);
      assert.deepStrictEqual(
        [
          [false, false, false, false],
          [false, true, false, false],
          [true, true, true, false],
          [false, true, false, true]
        ],
        testCheckoerboard
      );
    });
  });
  describe('totalNQueens', () => {
    it('4', () => {
      assert.strictEqual(2, totalNQueens(4));
    });
  });
});
