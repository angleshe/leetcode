/**
 * @description 计算你至少需要拥有多少现金才能确保你能赢游戏
 * @author angle
 * @date 2021-09-23
 * @export
 * @param {number} n
 * @returns {number}
 */
export function getMoneyAmount(n: number): number {
  const dp: number[][] = Array.from<undefined, number[]>(Array<undefined>(n), () =>
    Array<number>(n).fill(Infinity)
  );
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (i === 0) {
        dp[j][j] = 0;
      } else {
        const l = i + j;
        for (let k = j; k <= l; k++) {
          if (k === j) {
            dp[j][l] = k + 1 + dp[j + 1][l];
          } else if (k === l) {
            dp[j][l] = Math.min(k + 1 + dp[j][l - 1], dp[j][l]);
          } else {
            dp[j][l] = Math.min(k + 1 + Math.max(dp[j][k - 1], dp[k + 1][l]), dp[j][l]);
          }
        }
      }
    }
  }
  return dp[0][n - 1];

  // const dp: number[][] = Array.from<undefined, number[]>(Array<undefined>(n + 1), () =>
  //   Array<number>(n + 1).fill(Infinity)
  // );

  // for (let i = 1; i <= n; i++) {
  //   dp[i][i] = 0;
  // }

  // for (let j = 2; j <= n; j++) {
  //   for (let i = j - 1; i >= 1; i--) {
  //     for (let k = i + 1; k <= j - 1; k++) {
  //       dp[i][j] = Math.min(k + Math.max(dp[i][k - 1], dp[k + 1][j]), dp[i][j]);
  //     }
  //     dp[i][j] = Math.min(i + dp[i + 1][j], dp[i][j]);
  //     dp[i][j] = Math.min(j + dp[i][j - 1], dp[i][j]);
  //   }
  // }

  // console.log('dp', dp);

  // return dp[1][n];
}
