/**
 * @description 更新棋盘
 * @author angle
 * @date 2020-05-24
 * @export
 * @param {boolean[][]} checkoerboard 棋盘
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 */
export function updateCheckoerboard(checkoerboard: boolean[][], x: number, y: number): void {
  checkoerboard[y][x] = true;
  for (let i: number = 1; i + y < checkoerboard.length; i++) {
    checkoerboard[i + y][x] = true;
    if (x + i < checkoerboard.length) {
      checkoerboard[i + y][x + i] = true;
    }
    if (x - i >= 0) {
      checkoerboard[i + y][x - i] = true;
    }
  }
}

function _totalNQueens(checkoerboard: boolean[][], count: number, y: number): number {
  if (y === checkoerboard.length) {
    return count + 1;
  }
  for (let i: number = 0; i < checkoerboard.length; i++) {
    if (!checkoerboard[y][i]) {
      const checkerboardSnapshort: boolean[][] = JSON.parse(JSON.stringify(checkoerboard));
      updateCheckoerboard(checkerboardSnapshort, i, y);
      count = _totalNQueens(checkerboardSnapshort, count, y + 1);
    }
  }
  return count;
}

/**
 * @description 如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * @author angle
 * @date 2020-05-24
 * @export
 * @param {number} n 皇后个数
 * @returns {number} 解法数
 */
export function totalNQueens(n: number): number {
  return _totalNQueens(
    Array.from<undefined, boolean[]>(Array<undefined>(n), () => Array<boolean>(n).fill(false)),
    0,
    0
  );
}
