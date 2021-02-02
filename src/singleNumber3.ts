/* eslint-disable no-bitwise */
/**
 * @description 找出整数数组只出现一次的那两个元素。
 * @author angle
 * @date 2021-02-02
 * @export
 * @param {number[]} nums 有两个元素只出现一次，其余所有元素均出现两次的整数数组
 * @returns {number[]}
 */
export function singleNumber(nums: number[]): number[] {
  const xor = nums.reduce<number>((prev, curr) => {
    return prev ^ curr;
  }, 0);
  const mask = xor & -xor;
  return nums.reduce<[number, number]>(
    (prev, curr) => {
      if (mask & curr) {
        prev[0] ^= curr;
      } else {
        prev[1] ^= curr;
      }
      return prev;
    },
    [0, 0]
  );
}
