/**
 * @description 凑成总金额所需的最少的硬币个数
 * @author angle
 * @date 2021-04-14
 * @export
 * @param {number[]} coins
 * @param {number} amount
 * @returns {number}
 */
export function coinChange(coins: number[], amount: number): number {
  const dp: number[] = [0];
  for (let i: number = 1; i <= amount; i++) {
    let count = -1;
    coins.forEach((item) => {
      const index = i - item;
      if (index >= 0 && dp[index] >= 0) {
        if (count === -1) {
          count = dp[index] + 1;
        } else {
          count = Math.min(count, dp[index] + 1);
        }
      }
    });
    dp.push(count);
  }
  return dp[amount];
}
