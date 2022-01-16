/**
 * @description 找出所有在 [1, n] 范围内但没有出现在 nums 中的数字
 * @author angle
 * @date 2022-01-16
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  return nums.reduce<number[]>((prev, curr, index) => {
    if (curr - 1 !== index) {
      prev.push(index + 1);
    }
    return prev;
  }, []);
}
