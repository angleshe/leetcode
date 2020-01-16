/**
 * @description 判断行是否为数独
 * @author angle
 * @date 2020-01-16
 * @export
 * @param {string[][]} board 数独数据
 * @param {number} row 行
 * @returns {boolean} 是否为数独
 */
export function isValidRow(board: string[][], row: number): boolean {
  const obj: Record<string, boolean> = {};
  for (let i: number = 0; i < board[row].length; i++) {
    if (board[row][i] !== '.' && obj[board[row][i]]) {
      return false;
    }
    obj[board[row][i]] = true;
  }
  return true;
}
/**
 * @description 判断列是否为数独
 * @author angle
 * @date 2020-01-16
 * @export
 * @param {string[][]} board 数独数据
 * @param {number} col 列
 * @returns {boolean} 是否为数独
 */
export function isValidCol(board: string[][], col: number): boolean {
  const obj: Record<string, boolean> = {};
  for (let i: number = 0; i < board.length; i++) {
    if (board[i][col] !== '.' && obj[board[i][col]]) {
      return false;
    }
    obj[board[i][col]] = true;
  }
  return true;
}
/**
 * @description 判断是9宫格是否为数独
 * @author angle
 * @date 2020-01-16
 * @export
 * @param {string[][]} board 数独数据
 * @param {number} box 9宫格的索引
 * @returns {boolean} 是否为数独
 */
export function isValidBox(board: string[][], box: number): boolean {
  const x: number = (box % 3) * 3;
  const y: number = Math.floor(box / 3) * 3;
  const obj: Record<string, boolean> = {};
  for (let i: number = 0; i < 3; i++) {
    for (let j: number = 0; j < 3; j++) {
      if (board[y + i][x + j] !== '.' && obj[board[y + i][x + j]]) {
        return false;
      }
      obj[board[y + i][x + j]] = true;
    }
  }
  return true;
}
/**
 * @description 判断一个 9x9 的数独是否有效
 * @author angle
 * @date 2020-01-16
 * @export
 * @param {string[][]} board 数独数据
 * @returns {boolean} 数独是否有效
 */
export function isValidSudoku(board: string[][]): boolean {
  const obj: Record<string, Record<number, boolean>> = {
    col: {},
    box: {}
  };
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      if (j !== 0 || isValidRow(board, i)) {
        if (obj.col[j] === undefined && !isValidCol(board, j)) {
          return false;
        }
        obj.col[j] = true;
        const boxIndex: number = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (obj.box[boxIndex] === undefined && !isValidBox(board, boxIndex)) {
          return false;
        }
        obj.box[boxIndex] = true;
      } else {
        return false;
      }
    }
  }
  return true;
}
