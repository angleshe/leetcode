/**
 * @description 是否存在i < j < k，使得 nums[i] < nums[j] < nums[k]
 * @author angle
 * @date 2021-05-13
 * @export
 * @param {number[]} nums
 * @returns {boolean}
 */
export function increasingTriplet(nums: number[]): boolean {
  if (nums.length >= 3) {
    let small = Infinity;
    let mid = Infinity;
    return nums.some((num) => {
      if (num <= small) {
        small = num;
      } else if (num <= mid) {
        mid = num;
      } else if (num > mid) {
        return true;
      }
      return false;
    });
  }
  return false;
}
