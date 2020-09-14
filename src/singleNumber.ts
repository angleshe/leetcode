/**
 * @description 找出那个只出现了一次的元素
 * @author angle
 * @date 2020-09-14
 * @export
 * @param {number[]} nums 除了某个元素只出现一次以外，其余每个元素均出现两次
 * @returns {number}
 */
export function singleNumber(nums: number[]): number {
  // eslint-disable-next-line no-bitwise
  return nums.reduce<number>((prev, curr) => prev ^ curr, 0);
}
