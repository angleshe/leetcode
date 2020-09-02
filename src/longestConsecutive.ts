/**
 * @description 找出整数数组最长连续序列的长度
 * @author angle
 * @date 2020-09-02
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function longestConsecutive(nums: number[]): number {
  const numsSet: Set<number> = new Set(nums);
  let res: number = 0;
  let target: number = 0;
  let len: number = 0;
  for (const item of numsSet) {
    if (!numsSet.has(item - 1)) {
      target = item + 1;
      len = 1;
      while (numsSet.has(target)) {
        len++;
        target++;
      }
      res = Math.max(len, res);
    }
  }
  return res;
}
