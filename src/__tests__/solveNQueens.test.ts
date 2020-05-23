import assert from 'power-assert';
import { solveNQueens, updateCheckoerboard } from '../solveNQueens';
import { showContent } from '../utils';

describe('src/solveNQueens', () => {
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
  describe('solveNQueens', () => {
    it('4', () => {
      assert.deepStrictEqual(
        [
          ['.Q..', '...Q', 'Q...', '..Q.'],
          ['..Q.', 'Q...', '...Q', '.Q..']
        ],
        solveNQueens(4)
      );
    });
    it('5', () => {
      assert.deepStrictEqual(
        [
          ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
          ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
          ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
          ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
          ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
          ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
          ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
          ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
          ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
          ['....Q', '..Q..', 'Q....', '...Q.', '.Q...']
        ],
        solveNQueens(5)
      );
    });
  });
});
