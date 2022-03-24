/**
 * @description 判断是否为完整数
 * @author angle
 * @date 2022-03-24
 * @export
 * @param {number} num
 * @returns {boolean}
 */
export function checkPerfectNumber(num: number): boolean {
  if (num === 1) {
    return false;
  }
  let count: number = 1;
  for (let i = 2; i < num / i; i++) {
    if (num % i === 0) {
      count += i;
      if (i * i !== num) {
        count += num / i;
      }
    }
  }
  return count === num;
}
