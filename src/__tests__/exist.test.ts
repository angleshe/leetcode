import assert from 'power-assert';
import { exist } from '../exist';
import { showContent } from '../utils';

describe('src/exist', () => {
  describe('exist', () => {
    const board: string[][] = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ];
    it(`${showContent(board)}, ABCCED`, () => {
      assert.ok(exist(board, 'ABCCED'));
    });
    it(`${showContent(board)}, SEE`, () => {
      assert.ok(exist(board, 'SEE'));
    });
    it(`${showContent(board)}, ABCB`, () => {
      assert.ok(!exist(board, 'ABCB'));
    });
  });
});
