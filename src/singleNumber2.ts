/* eslint-disable no-bitwise */
/**
 * @description 找出只出现了一次的元素
 * @author angle
 * @date 2020-09-15
 * @export
 * @param {number[]} nums 除了某个元素只出现一次以外，其余每个元素均出现了三次
 * @returns {number}
 */
export function singleNumber(nums: number[]): number {
  let ones: number = 0;
  let twos: number = 0;
  for (const num of nums) {
    ones = (ones ^ num) & ~twos;
    twos = (twos ^ num) & ~ones;
  }
  return ones;
}
