/**
 * @description 给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
 * @author angle
 * @date 2020-07-10
 * @export
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
export function isScramble(s1: string, s2: string): boolean {
  if (s1 === s2) {
    return true;
  } else if (s1.length !== s2.length) {
    return false;
  }
  const dp: boolean[][][] = Array.from<undefined, boolean[][]>(Array(s1.length), () =>
    Array.from<undefined, boolean[]>(Array(s1.length), () => Array(s1.length + 1).fill(false))
  );
  for (let i: number = 0; i < s1.length; i++) {
    for (let j: number = 0; j < s1.length; j++) {
      dp[i][j][1] = s1[i] === s2[j];
    }
  }
  for (let len: number = 2; len <= s1.length; len++) {
    for (let i: number = 0; i <= s1.length - len; i++) {
      for (let j: number = 0; j <= s1.length - len; j++) {
        for (let k: number = 1; k < len; k++) {
          if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
            dp[i][j][len] = true;
          } else if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
            dp[i][j][len] = true;
          }
        }
      }
    }
  }
  return dp[0][0][s1.length];
}
