/**
 * @description 判定青蛙能否成功过河
 * @author angle
 * @date 2021-11-17
 * @export
 * @param {number[]} stones
 * @returns {boolean}
 */
export function canCross(stones: number[]): boolean {
  if (stones.length < 2) {
    return true;
  }
  if (stones[1] !== 1) {
    return false;
  }
  const dp: boolean[][] = [[], [false, true]];
  for (let i: number = 2; i < stones.length; i++) {
    const arr: boolean[] = [false];
    for (let j: number = 1; j < i; j++) {
      const k = stones[i] - stones[j];
      if (k <= j + 1) {
        arr[k] = dp[j][k] || dp[j][k - 1] || dp[j][k + 1];
      }
    }
    dp.push(arr);
  }
  return dp[dp.length - 1].some((val) => val);
}
