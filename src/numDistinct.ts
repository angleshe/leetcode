/**
 * @description 计算在 S 的子序列中 T 出现的个数
 * @author angle
 * @date 2020-08-15
 * @export
 * @param {string} s
 * @param {string} t
 * @returns {number}
 */
export function numDistinct(s: string, t: string): number {
  if (s.length < t.length) {
    return 0;
  }
  if (s.length === t.length) {
    return s === t ? 1 : 0;
  }
  const dp: number[][] = [];
  for (let i: number = 0; i <= s.length; i++) {
    for (let j: number = 0; j <= t.length; j++) {
      if (i === 0) {
        if (j === 0) {
          dp.push([1]);
        } else {
          dp[0].push(0);
        }
      } else if (j === 0) {
        dp.push([1]);
      } else {
        if (j > i) {
          dp[i].push(0);
        } else {
          if (s[i - 1] !== t[j - 1]) {
            dp[i].push(dp[i - 1][dp[i].length]);
          } else {
            dp[i].push(dp[i - 1][dp[i].length] + dp[i - 1][dp[i].length - 1]);
          }
        }
      }
    }
  }
  return dp[s.length][t.length];
}
