/**
 * @description 从m*n网个的左上到右下角只能向下或者向右移动,有多少条不同的路径
 * @author angle
 * @date 2020-06-04
 * @export
 * @param {number} m
 * @param {number} n
 * @returns {number} 路径数
 */
export function uniquePaths(m: number, n: number): number {
  const dp: number[][] = [Array(m).fill(1)];
  for (let i: number = 1; i < n; i++) {
    for (let j: number = 0; j < m; j++) {
      if (j === 0) {
        dp.push([1]);
      } else {
        dp[i].push(dp[i - 1][j] + dp[i][j - 1]);
      }
    }
  }
  return dp[n - 1][m - 1];
}
