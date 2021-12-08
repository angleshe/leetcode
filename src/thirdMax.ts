/**
 * @description 返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数
 * @author angle
 * @date 2021-12-08
 * @export
 * @param {number[]} nums
 * @returns {number}
 */
export function thirdMax(nums: number[]): number {
  let a: number = -Infinity;
  let b: number = -Infinity;
  let res: number = -Infinity;
  nums.forEach((n) => {
    if (n > a) {
      [a, b, res] = [n, a, b];
    } else if (n !== a && n > b) {
      [b, res] = [n, b];
    } else if (n !== a && n !== b && n > res) {
      res = n;
    }
  });

  return res === -Infinity ? a : res;
}
