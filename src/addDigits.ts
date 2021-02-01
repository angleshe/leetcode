/**
 * @description 反复将一个非负整数各个位上的数字相加，直到结果为一位数
 * @author angle
 * @date 2021-02-01
 * @export
 * @param {number} num
 * @returns {number}
 */
export function addDigits(num: number): number {
  let res: number = 0;
  while (num) {
    res += num % 10;
    if (res > 9) {
      res = (res % 10) + Math.floor(res / 10);
    }
    num = Math.floor(num / 10);
  }
  return res;
}
