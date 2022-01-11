/**
 * @description 找出所有出现 两次 的整数
 * @author angle
 * @date 2022-01-11
 * @export
 * @param {number[]} nums
 * @returns {number[]}
 */
export function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  nums.forEach((item, index) => {
    if (item - 1 !== index) {
      res.push(item);
    }
  });

  return res;
}
