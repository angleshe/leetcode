/**
 * @description 判断值是否为合理
 * @author angle
 * @date 2020-01-19
 * @param {string[][]} board 数独表
 * @param {number} col 列
 * @param {number} row 行
 * @returns {boolean} 值是否为合理
 */
function recusiveSolveSudoku(
  board: string[][],
  col: number,
  row: number,
  rowUsed: Record<string, boolean>[],
  colUsed: Record<string, boolean>[],
  boxUsed: Record<string, boolean>[]
): boolean {
  if (row === board[col].length) {
    col++;
    if (col === board.length) {
      return true;
    }
    row = 0;
  }
  if (board[col][row] === '.') {
    for (let i: number = 1; i <= 9; i++) {
      const key: string = '' + i;
      const boxIndex: number = Math.floor(col / 3) * 3 + Math.floor(row / 3);
      if (
        rowUsed[col][key] !== true &&
        colUsed[row][key] !== true &&
        boxUsed[boxIndex][key] !== true
      ) {
        board[col][row] = key;
        rowUsed[col][key] = true;
        colUsed[row][key] = true;
        boxUsed[boxIndex][key] = true;
        if (!recusiveSolveSudoku(board, col, row + 1, rowUsed, colUsed, boxUsed)) {
          board[col][row] = '.';
          rowUsed[col][key] = false;
          colUsed[row][key] = false;
          boxUsed[boxIndex][key] = false;
        } else {
          return true;
        }
      }
    }
    return false;
  }
  return recusiveSolveSudoku(board, col, row + 1, rowUsed, colUsed, boxUsed);
}
/**
 * @description 填充的空格来解决数独问题
 * @author angle
 * @date 2020-01-19
 * @export
 * @param {string[][]} board 待填充数独表
 */
export function solveSudoku(board: string[][]): void {
  /**
   * 行用过的数字
   */
  const rowUsed: Record<string, boolean>[] = new Array(9).fill(undefined).map(() => ({}));
  /**
   * 列用过的数字
   */
  const colUsed: Record<string, boolean>[] = new Array(9).fill(undefined).map(() => ({}));
  /**
   * 格子用过的数字
   */
  const boxUsed: Record<string, boolean>[] = new Array(9).fill(undefined).map(() => ({}));
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        rowUsed[i][board[i][j]] = true;
        colUsed[j][board[i][j]] = true;
        boxUsed[Math.floor(i / 3) * 3 + Math.floor(j / 3)][board[i][j]] = true;
      }
    }
  }
  recusiveSolveSudoku(board, 0, 0, rowUsed, colUsed, boxUsed);
}
