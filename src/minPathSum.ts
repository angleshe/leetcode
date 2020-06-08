/**
 * @description 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。每次只能向下或者向右移动一步。
 * @author angle
 * @date 2020-06-08
 * @export
 * @param {number[][]} grid 网格数据
 * @returns {number} 最小和
 */
export function minPathSum(grid: number[][]): number {
  for (let i: number = 0; i < grid.length; i++) {
    for (let j: number = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (j === 0) {
        grid[i][j] += grid[i - 1][j];
      } else {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[grid.length - 1][grid[grid.length - 1].length - 1];
}
