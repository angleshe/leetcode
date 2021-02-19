/**
 * @description 查找第一个错误的版本
 * @author angle
 * @date 2021-02-19
 * @export
 * @param {(version: number) => boolean} isBadVersion
 * @returns
 */
export function solution(isBadVersion: (version: number) => boolean) {
  return function(n: number): number {
    if (n < 1) {
      return n;
    }
    if (isBadVersion(1)) {
      return 1;
    }
    if (!isBadVersion(n)) {
      return 0;
    }
    let left: number = 1;
    let right: number = n;
    while (right - left > 1) {
      const mid: number = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return right;
  };
}
