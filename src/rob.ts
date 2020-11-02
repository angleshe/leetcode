/**
 * @description 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @author angle
 * @date 2020-11-02
 * @export
 * @param {number[]} nums 每个房屋存放金额,如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * @returns {number}
 */
export function rob(nums: number[]): number {
  let dp0: number = 0;
  let dp1: number = 0;
  nums.forEach((item) => {
    const temp: number = dp1;
    dp1 = Math.max(dp1, dp0 + item);
    dp0 = temp;
  });
  return dp1;
}
