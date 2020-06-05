/**
 * @description 每次只能向下或者向右移动一步给定网格返回左上角到右下角的路径数,
 * @author angle
 * @date 2020-06-05
 * @export
 * @param {number[][]} obstacleGrid 网格数据  1为障碍
 * @returns {number} 路径数
 */
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  for (let i: number = 0; i < obstacleGrid.length; i++) {
    for (let j: number = 0; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else if (i === 0) {
        obstacleGrid[i][j] = j === 0 ? 1 : obstacleGrid[i][j - 1];
      } else if (j === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j];
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}
