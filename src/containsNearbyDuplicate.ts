/**
 * @description 判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k
 * @author angle
 * @date 2020-12-22
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hash = new Set<number>();
  return nums.some((item, index) => {
    if (hash.has(item)) {
      return true;
    }
    hash.add(item);
    if (hash.size > k) {
      hash.delete(nums[index - k]);
    }
    return false;
  });
}
