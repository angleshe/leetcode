/**
 * @description 验证 s3 是否是由 s1 和 s2 交错组成的
 * @author angle
 * @date 2020-07-24
 * @export
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @returns {boolean}
 */
export function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length === s3.length) {
    const dp: boolean[][] = [];
    for (let i: number = 0; i <= s1.length; i++) {
      for (let j: number = 0; j <= s2.length; j++) {
        if (j === 0) {
          if (i === 0) {
            dp.push([true]);
          } else {
            dp.push([s1[i - 1] === s3[i - 1] && dp[i - 1][0]]);
          }
        } else if (i === 0) {
          dp[0].push(s2[j - 1] === s3[j - 1] && dp[0][j - 1]);
        } else {
          dp[i].push(
            (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
              (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
          );
        }
      }
    }
    return dp[s1.length][s2.length];
  }
  return false;
}
