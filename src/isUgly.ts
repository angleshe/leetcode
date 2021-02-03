/**
 * @description 判断给定的数是否为丑数(只包含质因数 2, 3, 5 的正整数)
 * @author angle
 * @date 2021-02-03
 * @export
 * @param {number} num
 * @returns {boolean}
 */
export function isUgly(num: number): boolean {
  if (num > 0) {
    let last: number = 0;
    do {
      last = num;
      if (num % 2 === 0) {
        num /= 2;
      }
      if (num % 3 === 0) {
        num /= 3;
      }
      if (num % 5 === 0) {
        num /= 5;
      }
      if (num === 1) {
        return true;
      }
    } while (last !== num);
  }
  return false;
}
