function dfs(board: string[][], row: number, col: number): void {
  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[row].length ||
    board[row][col] !== 'O'
  ) {
    return;
  }
  board[row][col] = '#';
  dfs(board, row - 1, col);
  dfs(board, row, col + 1);
  dfs(board, row + 1, col);
  dfs(board, row, col - 1);
}
/**
 * @description 找到二维的矩阵中所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充
 * @author angle
 * @date 2020-09-04
 * @export
 * @param {string[][]} board
 */
export function solve(board: string[][]): void {
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      if (
        (i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1) &&
        board[i][j] === 'O'
      ) {
        dfs(board, i, j);
      }
    }
  }
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
}
