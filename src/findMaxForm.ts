const zeroCode = '0'.charCodeAt(0);
export function getZeroAndOneCount(str: string): [number, number] {
  const res: [number, number] = [0, 0];
  for (let i = 0; i < str.length; i++) {
    res[str.charCodeAt(i) - zeroCode]++;
  }
  return res;
}
/**
 * strs 的最多有 m 个 0 和 n 个 1子集的长度
 * @param strs
 * @param m
 * @param n
 */
export function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from(Array(m + 1), () => Array<number>(n + 1).fill(0));
  for (let i = 0; i < strs.length; i++) {
    const [zeroCount, oneCount] = getZeroAndOneCount(strs[i]);
    for (let j = dp.length - 1; j >= 0; j--) {
      for (let k = dp[j].length - 1; k >= 0; k--) {
        if (j >= zeroCount && k >= oneCount) {
          dp[j][k] = Math.max(dp[j][k], dp[j - zeroCount][k - oneCount] + 1);
        }
      }
    }
  }
  return dp[m][n];
}
