/**
 * @description 求以 1 - n 为节点组成的二叉搜索树有多少种
 * @author angle
 * @date 2020-07-23
 * @export
 * @param {number} n
 * @returns {number}
 */
export function numTrees(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const dp: number[] = [1, 1];
  for (let i: number = 2; i <= n; i++) {
    dp.push(dp.reduce((prev, curr, index) => prev + curr * dp[i - 1 - index], 0));
  }
  return dp[n];
}
