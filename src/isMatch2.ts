/**
 * @description 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '?' 和 '*' 的正则表达式匹配。
 * @author angle
 * @date 2020-05-14
 * @export
 * @param {string} s 字符串
 * @param {string} p 字符规律
 * @returns {boolean} 是否匹配
 */
export function isMatch(s: string, p: string): boolean {
  const dp: boolean[][] = [];
  for (let i: number = 0; i <= s.length; i++) {
    for (let j: number = 0; j <= p.length; j++) {
      if (i === 0 && j === 0) {
        dp.push([true]);
      } else if (i === 0) {
        dp[0].push(dp[0][j - 1] && p[j - 1] === '*');
      } else if (j === 0) {
        dp.push([false]);
      } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i].push(dp[i - 1][j - 1]);
      } else if (p[j - 1] === '*') {
        dp[i].push(dp[i][j - 1] || dp[i - 1][j]);
      } else {
        dp[i].push(false);
      }
    }
  }
  return dp[s.length][p.length];
}
