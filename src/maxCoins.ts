function maxCoinsMS(
  nums: number[],
  start: number,
  end: number,
  caches: Map<string, number> = new Map<string, number>()
): number {
  const key = `${start},${end}`;
  if (caches.has(key)) {
    return caches.get(key)!;
  }
  let max: number = 0;
  for (let i = start + 1; i < end; i++) {
    max = Math.max(
      max,
      maxCoinsMS(nums, start, i, caches) +
        maxCoinsMS(nums, i, end, caches) +
        nums[start] * nums[i] * nums[end]
    );
  }
  caches.set(key, max);
  return max;
}
/**
 * @description 能获得硬币的最大数量。
 * @author angle
 * @date 2021-03-25
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function maxCoins(nums: number[]): number {
  return maxCoinsMS([1, ...nums, 1], 0, nums.length + 1);
}
