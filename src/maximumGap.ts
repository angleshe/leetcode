/**
 * @description 找出无序数组在排序之后，相邻元素之间最大的差值
 * @author angle
 * @date 2020-10-13
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function maximumGap(nums: number[]): number {
  if (nums.length >= 2) {
    const [min, max] = nums.reduce<[number, number]>(
      (prev, curr) => [Math.min(prev[0], curr), Math.max(prev[1], curr)],
      [Infinity, -Infinity]
    );
    const bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
    const buckets = Array.from<undefined, [number, number]>(
      Array(Math.floor((max - min) / bucketSize) + 1),
      () => [Infinity, -Infinity]
    );
    nums.forEach((num) => {
      const index = Math.floor((num - min) / bucketSize);
      buckets[index] = [Math.min(num, buckets[index][0]), Math.max(num, buckets[index][1])];
    });
    const { maxGap } = buckets.reduce<{
      previousMax: number;
      maxGap: number;
    }>(
      (prev, curr) => {
        if (curr[0] !== Infinity) {
          if (prev.previousMax !== Infinity) {
            prev.maxGap = Math.max(prev.maxGap, curr[0] - prev.previousMax);
          }
          prev.previousMax = curr[1];
          prev.maxGap = Math.max(prev.maxGap, curr[1] - curr[0]);
        }
        return prev;
      },
      {
        previousMax: Infinity,
        maxGap: -Infinity
      }
    );
    return maxGap;
  }
  return 0;
}
