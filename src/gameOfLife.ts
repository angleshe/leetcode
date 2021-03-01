/* eslint-disable no-bitwise */
/**
 * @description 生命游戏
 * @author angle
 * @date 2021-03-01
 * @export
 * @param {number[][]} board
 */
export function gameOfLife(board: number[][]): void {
  const position = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      let count: number = 0;
      for (let k: number = 0; k < position.length; k++) {
        const x = j + position[k][0];
        const y = i + position[k][1];
        if (x >= 0 && y >= 0 && x < board[i].length && y < board.length) {
          if (board[y][x] & 1) {
            count++;
          }
        }
      }

      if (board[i][j] & 1) {
        if (count === 2 || count === 3) {
          board[i][j] |= 2;
        }
      } else {
        if (count === 3) {
          board[i][j] |= 2;
        }
      }
    }
  }

  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      board[i][j] >>= 1;
    }
  }
}
