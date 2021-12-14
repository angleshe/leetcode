/**
 * @description 返回在甲板board上放置的战舰的数量
 * @author angle
 * @date 2021-12-14
 * @export
 * @param {string[][]} board
 * @returns {number}
 */
export function countBattleships(board: string[][]): number {
  let res: number = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        if ((i === 0 || board[i - 1][j] !== 'X') && (j === 0 || board[i][j - 1] !== 'X')) {
          res++;
        }
      }
    }
  }
  return res;
}
