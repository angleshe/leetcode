/**
 * @description 将所有 0 移动到数组的末尾
 * @author angle
 * @date 2021-02-24
 * @export
 * @param {number[]} nums
 */
export function moveZeroes(nums: number[]): void {
  let j: number = -1;
  for (let i: number = 0; i < nums.length; i++) {
    if (j !== -1 && nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    } else if (j === -1 && nums[i] === 0) {
      j = i;
    }
  }
}
