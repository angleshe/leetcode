export function prefixCount(prefix: number, n: number): number {
  let count: number = 0;
  let next: number = prefix + 1;
  while (prefix <= n) {
    count += Math.min(n + 1, next) - prefix;
    next *= 10;
    prefix *= 10;
  }
  return count;
}
/**
 * @description 找到 1 到 n 中字典序第 k 小的数字
 * @author angle
 * @date 2022-01-07
 * @export
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
export function findKthNumber(n: number, k: number): number {
  let prefix: number = 1;
  let targetCount: number = 1;
  while (targetCount !== k) {
    const count = prefixCount(prefix, n);
    if (targetCount + count > k) {
      prefix *= 10;
      targetCount++;
    } else {
      prefix++;
      targetCount += count;
    }
  }
  return prefix;
}
