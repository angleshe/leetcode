/**
 * @description 计算并返回 x 的平方根 结果只保留整数的部分
 * @author angle
 * @date 2020-06-15
 * @export
 * @param {number} x
 * @returns {number}
 */
export function mySqrt(x: number): number {
  let left: number = 0;
  let right: number = Math.floor(x / 2);
  if (x <= 1) {
    return x;
  }
  if (right * right <= x) {
    return right;
  }
  while (right - left > 1) {
    const num: number = left + Math.floor((right - left) / 2);
    const res: number = num * num;
    if (res === x) {
      return num;
    } else if (res > x) {
      right = num;
    } else if (res < x) {
      left = num;
    }
  }
  return left;
}
