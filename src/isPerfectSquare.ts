/**
 * @description 判断正整数num 是否是一个完全平方数
 * @author angle
 * @date 2021-07-26
 * @export
 * @param {number} num
 * @returns {boolean}
 */
export function isPerfectSquare(num: number): boolean {
  if (num !== 0) {
    let left: number = 0;
    let right: number = num;
    while (right >= left) {
      const mid = left + Math.floor((right - left) / 2);
      const val = mid * mid;
      if (val === num) {
        return true;
      }
      if (val > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }
  return true;
}
