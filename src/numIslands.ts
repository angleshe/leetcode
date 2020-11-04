const DIRECTIONS: number[][] = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0]
];
function dfs(visited: boolean[][], x: number, y: number, grid: string[][]): boolean {
  if (
    y >= 0 &&
    x >= 0 &&
    y < grid.length &&
    x < grid[y].length &&
    grid[y][x] === '1' &&
    !visited[y][x]
  ) {
    visited[y][x] = true;
    for (let i: number = 0; i < 4; i++) {
      dfs(visited, x + DIRECTIONS[i][0], y + DIRECTIONS[i][1], grid);
    }
    return true;
  }
  return false;
}
/**
 * @description 计算网格中岛屿的数量。
 * @author angle
 * @date 2020-11-04
 * @export
 * @param {string[][]} grid '1'（陆地）和 '0'（水）
 * @returns {number}
 */
export function numIslands(grid: string[][]): number {
  if (grid.length) {
    const visited: boolean[][] = Array.from<string[], boolean[]>(grid, () =>
      Array.from<string, boolean>(grid[0], () => false)
    );
    let count: number = 0;
    for (let i: number = 0; i < grid.length; i++) {
      for (let j: number = 0; j < grid[i].length; j++) {
        if (dfs(visited, j, i, grid)) {
          count++;
        }
      }
    }
    return count;
  }
  return 0;
}
