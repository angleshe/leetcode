/**
 * @description 从左到右，从第一个数字开始，每隔一个数字进行删除，直到列表的末尾,从右到左，从倒数第一个数字开始，每隔一个数字进行删除，直到列表开头。从左到右和从右到左交替进行，返回直到只剩下一个数字。
 * @author angle
 * @date 2021-10-25
 * @export
 * @param {number} n
 * @returns {number}
 */
export function lastRemaining(n: number): number {
  const mid = Math.floor(n / 2);
  return n === 1 ? 1 : 2 * (mid + 1 - lastRemaining(mid));
}
