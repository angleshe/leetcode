import assert from 'power-assert';
import { solve } from '../solve';

describe('src/solve', () => {
  describe('solve', () => {
    const test1: string[][] = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ];
    it(JSON.stringify(test1), () => {
      solve(test1);
      assert.deepStrictEqual(test1, [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X']
      ]);
    });
  });
});
