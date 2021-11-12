/**
 * @description 返回第 n 位数字
 * @author angle
 * @date 2021-11-12
 * @export
 * @param {number} n
 * @returns {number}
 */
export function findNthDigit(n: number): number {
  n -= 1;
  let digits: number = 1;
  let firstNum: number = 10 ** (digits - 1);
  while (n > 9 * firstNum * digits) {
    n -= 9 * firstNum * digits;
    digits++;
    firstNum = 10 ** (digits - 1);
  }
  return parseInt((firstNum + Math.floor(n / digits)).toString()[n % digits]);
}
