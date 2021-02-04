/**
 * @description 找出第 n 个丑数
 * @author angle
 * @date 2021-02-04
 * @export
 * @param {number} n
 * @returns {number}
 */
export function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i: number = 1; i < n; i++) {
    dp.push(Math.min(2 * dp[p2], 3 * dp[p3], 5 * dp[p5]));
    if (dp[i] === 2 * dp[p2]) {
      p2++;
    }
    if (dp[i] === 3 * dp[p3]) {
      p3++;
    }
    if (dp[i] === 5 * dp[p5]) {
      p5++;
    }
  }
  return dp[n - 1];
}
