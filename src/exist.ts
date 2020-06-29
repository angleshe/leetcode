/**
 * @description 判断边界
 * @author angle
 * @date 2020-06-29
 * @param {string[][]} area 数据源
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 * @returns {boolean} 是否在区域内
 */
function isArea(area: string[][], x: number, y: number): boolean {
  return x >= 0 && y >= 0 && y < area.length && x < area[y].length;
}
/**
 * @description 深度遍历
 * @author angle
 * @date 2020-06-29
 * @param {string[][]} board 网格
 * @param {string} word 单词
 * @param {number} x 网格横坐标
 * @param {number} y 网格纵坐标
 * @param {number} start 匹配单词索引
 * @param {boolean[][]} boardMap 网格是否遍历过视图
 * @returns {boolean}
 */
function dfs(
  board: string[][],
  word: string,
  x: number,
  y: number,
  start: number,
  boardMap: boolean[][]
): boolean {
  if (start === word.length - 1) {
    return word.endsWith(board[y][x]);
  }
  if (word[start] === board[y][x]) {
    boardMap[y][x] = true;
    if (
      isArea(board, x, y - 1) &&
      !boardMap[y - 1][x] &&
      dfs(board, word, x, y - 1, start + 1, boardMap)
    ) {
      return true;
    }
    if (
      isArea(board, x, y + 1) &&
      !boardMap[y + 1][x] &&
      dfs(board, word, x, y + 1, start + 1, boardMap)
    ) {
      return true;
    }
    if (
      isArea(board, x - 1, y) &&
      !boardMap[y][x - 1] &&
      dfs(board, word, x - 1, y, start + 1, boardMap)
    ) {
      return true;
    }
    if (
      isArea(board, x + 1, y) &&
      !boardMap[y][x + 1] &&
      dfs(board, word, x + 1, y, start + 1, boardMap)
    ) {
      return true;
    }
  }
  boardMap[y][x] = false;
  return false;
}
/**
 * @description 判断单词是否存在于网格中 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * @author angle
 * @date 2020-06-29
 * @export
 * @param {string[][]} board 单词网格
 * @param {string} word 单词
 * @returns {boolean} 单词是否在网格中
 */
export function exist(board: string[][], word: string): boolean {
  const boardMap: boolean[][] = board.map<boolean[]>((item) => item.map<boolean>(() => false));
  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board[i].length; j++) {
      if (dfs(board, word, j, i, 0, boardMap)) {
        return true;
      }
    }
  }
  return false;
}
