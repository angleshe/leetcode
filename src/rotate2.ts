/**
 * @description 将数组中的元素向右移动 k 个位置
 * @author angle
 * @date 2020-10-28
 * @export
 * @param {number[]} nums
 * @param {number} k
 */
export function rotate(nums: number[], k: number): void {
  if (nums.length) {
    for (let i: number = 0; i < k; i++) {
      nums.splice(0, 0, nums.pop()!);
    }
  }
}
