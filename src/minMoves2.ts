function select(nums: number[], left: number, right: number, target: number): number {
  let i: number = left;
  const targetValue = nums[right];
  for (let j = left; j < right; j++) {
    if (targetValue > nums[j]) {
      if (i !== j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      i++;
    }
  }
  if (i !== right) {
    [nums[i], nums[right]] = [nums[right], nums[i]];
  }
  if (i === target) {
    return targetValue;
  }
  if (i < target) {
    return select(nums, i + 1, right, target);
  }
  return select(nums, left, i - 1, target);
}
/**
 * @description 找到使所有数组元素相等所需的最小移动(选定的一个元素加1或减1)数
 * @author angle
 * @date 09/02/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {number}
 */
export function minMoves2(nums: number[]): number {
  const num = select(nums, 0, nums.length - 1, Math.floor(nums.length / 2));
  return nums.reduce((prev, curr) => prev + Math.abs(num - curr), 0);
}
