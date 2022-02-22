/* eslint-disable no-bitwise */
/**
 * @description 计算并返回nums中任意两个数之间 汉明距离的总和
 * @author angle
 * @date 22/02/2022
 * @export
 * @param {number[]} nums
 * @return {*}  {number}
 */
export function totalHammingDistance(nums: number[]): number {
  const bitArr: number[] = Array(30).fill(0);

  return nums.reduce<number>((prev, curr, index) => {
    for (let i = 0; i < bitArr.length; i++) {
      const num = curr & 1;
      if (index !== 0) {
        prev += num ? index - bitArr[i] : bitArr[i];
      }
      bitArr[i] += num;
      curr >>= 1;
    }
    return prev;
  }, 0);
}
