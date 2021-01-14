/**
 * @description 算所有小于等于 n 的非负整数中数字 1 出现的个数
 * @author angle
 * @date 2021-01-14
 * @export
 * @param {number} n
 * @returns {number}
 */
export function countDigitOne(n: number): number {
  let count: number = 0;
  for (let i: number = 1; i <= n; i *= 10) {
    const abc = n % i;
    const xyzd = Math.floor(n / i);
    const d = xyzd % 10;
    const xyz = Math.floor((xyzd + 8) / 10);
    count += xyz * i;
    if (d === 1) {
      count += abc + 1;
    }
  }

  return count;
}
