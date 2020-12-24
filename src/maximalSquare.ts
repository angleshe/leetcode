/**
 * @description 找到只包含 '1' 的最大正方形，并返回其面积。
 * @author angle
 * @date 2020-12-24
 * @export
 * @param {string[][]} matrix
 * @returns {number}
 */
export function maximalSquare(matrix: string[][]): number {
  const dp: number[] = [];
  let maxSize: number = 0;
  let northwest: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        if (matrix[i][j] === '1') {
          dp.push(1);
          maxSize = Math.max(maxSize, 1);
        } else {
          dp.push(0);
        }
      } else if (j === 0) {
        northwest = dp[j];
        if (matrix[i][j] === '1') {
          dp[j] = 1;
          maxSize = Math.max(maxSize, 1);
        } else {
          dp[j] = 0;
        }
      } else {
        if (matrix[i][j] === '1') {
          const width = Math.min(northwest, dp[j], dp[j - 1]) + 1;
          northwest = dp[j];
          dp[j] = width;
          maxSize = Math.max(maxSize, width);
        } else {
          northwest = dp[j];
          dp[j] = 0;
        }
      }
    }
  }
  return maxSize * maxSize;
}
