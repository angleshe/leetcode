function guess(num: number): -1 | 0 | 1 {
  const target = 4;
  if (num === target) {
    return 0;
  }
  if (num < target) {
    return 1;
  }
  return -1;
}
/**
 * @description 猜数字游戏
 * @author angle
 * @date 2021-09-16
 * @export
 * @param {number} n
 * @returns {number}
 */
export function guessNumber(n: number): number {
  if (guess(1) === 0) {
    return 1;
  } else if (guess(n) === 0) {
    return n;
  }
  let left: number = 0;
  let right: number = n;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
