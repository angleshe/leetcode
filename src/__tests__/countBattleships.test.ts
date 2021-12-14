import assert from 'power-assert';
import { countBattleships } from '../countBattleships';

describe('src/countBattleships', () => {
  describe('countBattleships', () => {
    it('[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]', () =>
      assert.strictEqual(
        countBattleships([
          ['X', '.', '.', 'X'],
          ['.', '.', '.', 'X'],
          ['.', '.', '.', 'X']
        ]),
        2
      ));
    it('[["."]]', () => assert.strictEqual(countBattleships([['.']]), 0));
  });
});
