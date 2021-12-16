/* eslint-disable no-bitwise */
/**
 * @description 返回 nums[i] XOR nums[j] 的最大运算结果
 * @author angle
 * @date 2021-12-16
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function findMaximumXOR(nums: number[]): number {
  let res: number = 0;
  let mask: number = 0;
  for (let i = 30; i >= 0; i--) {
    mask |= 1 << i;
    const set = new Set<number>();
    // eslint-disable-next-line no-loop-func
    nums.forEach((num) => set.add(num & mask));
    const targetMax = res | (1 << i);

    for (const num of set) {
      if (set.has(num ^ targetMax)) {
        res = targetMax;
        break;
      }
    }
  }

  return res;
}
