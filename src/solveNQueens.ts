/**
 * @description 更新棋盘
 * @author angle
 * @date 2020-05-23
 * @export
 * @param {boolean[][]} checkerboard 棋盘
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 */
export function updateCheckoerboard(checkerboard: boolean[][], x: number, y: number): void {
  checkerboard[y][x] = true;
  for (let i: number = y + 1; i < checkerboard.length; i++) {
    const step: number = i - y;
    checkerboard[i][x] = true;
    if (x + step < checkerboard.length) {
      checkerboard[i][x + i - y] = true;
    }
    if (x - step >= 0) {
      checkerboard[i][x - i + y] = true;
    }
  }
}
function _solveNQueens(
  checkerboard: boolean[][],
  res: string[][],
  path: number[],
  y: number
): void {
  if (y === checkerboard.length) {
    res.push(
      path.map<string>((item) =>
        Array.from<undefined, string>(Array<undefined>(checkerboard.length), (_, k) =>
          k === item ? 'Q' : '.'
        ).join('')
      )
    );
  } else {
    for (let x: number = 0; x < checkerboard.length; x++) {
      if (!checkerboard[y][x]) {
        const checkerboardSnapshort: boolean[][] = JSON.parse(JSON.stringify(checkerboard));
        updateCheckoerboard(checkerboard, x, y);
        path.push(x);
        _solveNQueens(checkerboard, res, path, y + 1);
        path.pop();
        checkerboard = checkerboardSnapshort;
      }
    }
  }
}
/**
 * @description 如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * @author angle
 * @date 2020-05-23
 * @export
 * @param {number} n
 * @returns {string[][]} 解集
 */
export function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  _solveNQueens(
    Array.from<undefined, boolean[]>(Array<undefined>(n), () => Array<boolean>(n).fill(false)),
    res,
    [],
    0
  );
  return res;
}
