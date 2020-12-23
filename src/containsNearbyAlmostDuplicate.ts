/**
 * @description 是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ
 * @author angle
 * @date 2020-12-23
 * @export
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @returns {boolean}
 */
export function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const map: Map<number, number> = new Map<number, number>();
  const width: number = t + 1;
  for (let i: number = 0; i < nums.length; i++) {
    const id: number = Math.floor(nums[i] / width);
    if (map.has(id)) {
      return true;
    }
    if (map.has(id - 1) && nums[i] - map.get(id - 1)! < width) {
      return true;
    }
    if (map.has(id + 1) && map.get(id + 1)! - nums[i] < width) {
      return true;
    }
    map.set(id, nums[i]);
    if (i >= k) {
      map.delete(Math.floor(nums[i - k] / width));
    }
  }
  return false;
}
