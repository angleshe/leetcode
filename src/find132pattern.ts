/**
 * @description nums中是否存在132模式的子序列
 * @author angle
 * @date 26/01/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {boolean}
 */
export function find132pattern(nums: number[]): boolean {
  const minArr: number[] = [];
  let max: number = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (max > nums[i]) {
      return true;
    }
    while (minArr.length && nums[i] > minArr[minArr.length - 1]) {
      max = Math.max(max, minArr.pop()!);
    }
    minArr.push(nums[i]);
  }
  return false;
}
