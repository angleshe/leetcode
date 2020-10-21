/**
 * @description 返回 n! 结果尾数中零的数量
 * @author angle
 * @date 2020-10-21
 * @export
 * @param {number} n
 * @returns {number}
 */
export function trailingZeroes(n: number): number {
  let res: number = 0;
  while (n) {
    const num = Math.floor(n / 5);
    res += num;
    n = num;
  }
  return res;
}
