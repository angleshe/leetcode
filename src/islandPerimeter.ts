/**
 * @description 计算岛屿的周长
 * @author angle
 * @date 10/02/2022
 * @export
 * @param {number[][]} grid
 * @return {*}  {number}
 */
export function islandPerimeter(grid: number[][]): number {
  let res: number = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        res += 4;
        if (i !== 0 && grid[i - 1][j]) {
          res -= 2;
        }
        if (j !== 0 && grid[i][j - 1]) {
          res -= 2;
        }
      }
    }
  }
  return res;
}
