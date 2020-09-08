/**
 * @description 将 s 分割成一些子串，使每个子串都是回文串的最少分割次数
 * @author angle
 * @date 2020-09-08
 * @export
 * @param {string} s
 * @returns {number}
 */
export function minCut(s: string): number {
  const resDp: number[] = [];
  const dp: boolean[][] = [];
  if (s.length > 1) {
    for (let right: number = 0; right < s.length; right++) {
      for (let left: number = 0; left < s.length; left++) {
        const val: boolean =
          right >= left && s[left] === s[right] && (right - left <= 2 || dp[left + 1][right - 1]);
        if (right === 0) {
          dp.push([val]);
        } else {
          dp[left].push(val);
        }
      }
    }
    for (let i: number = 0; i < s.length; i++) {
      if (dp[0][i]) {
        resDp.push(0);
      } else {
        let val: number = i;
        for (let j: number = 0; j < i; j++) {
          if (dp[j + 1][i]) {
            val = Math.min(val, resDp[j] + 1);
          }
        }
        resDp.push(val);
      }
    }
    return resDp[resDp.length - 1];
  }
  return 0;
}
