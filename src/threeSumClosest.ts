/**
 * @description 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。
 * @author angle
 * @date 2019-12-20
 * @export
 * @param {number[]} nums 整数的数组
 * @param {number} target 目标值
 * @returns {number} 最接近值
 */
export function threeSumClosest(nums: number[], target: number): number {
  let res: number = 0;
  let difference: number = Infinity;
  nums = nums.sort((a: number, b: number) => a - b);
  for (let i: number = 0; i < nums.length - 2; i++) {
    if (i < 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l: number = i + 1;
    let r: number = nums.length - 1;
    while (r !== l) {
      const _sum: number = nums[i] + nums[l] + nums[r];
      if (_sum < target) {
        const _dif: number = target - _sum;
        if (_dif < difference) {
          difference = _dif;
          res = _sum;
        }
        while (l < r && nums[l] === nums[++l]);
      } else if (_sum === target) {
        return target;
      } else {
        const _dif: number = _sum - target;
        if (_dif < difference) {
          difference = _dif;
          res = _sum;
        }
        while (l < r && nums[r] === nums[--r]);
      }
    }
  }
  return res;
}
