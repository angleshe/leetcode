/**
 * @description 返回 无重复元素的有序整数数组  恰好覆盖数组中所有数字 的 最小有序 区间范围列表
 * @author angle
 * @date 2021-01-07
 * @export
 * @param {number[]} nums
 * @returns {string[]}
 */
export function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  if (nums.length) {
    let start: number = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i === 0 || nums[i] - nums[i - 1] > 1) {
        if (i !== 0) {
          if (nums[i - 1] === start) {
            res.push(start.toString());
          } else {
            res.push(`${start}->${nums[i - 1]}`);
          }
        }
        start = nums[i];
      }
    }
    if (nums[nums.length - 1] === start) {
      res.push(start.toString());
    } else {
      res.push(`${start}->${nums[nums.length - 1]}`);
    }
  }
  return res;
}
