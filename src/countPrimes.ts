/**
 * @description 统计所有小于非负整数 n 的质数的数量
 * @author angle
 * @date 2020-11-10
 * @export
 * @param {number} n
 * @returns {number}
 */
export function countPrimes(n: number): number {
  const isPrim: boolean[] = Array<boolean>(n).fill(true);
  for (let i: number = 2; i * i < n; i++) {
    if (isPrim[i]) {
      for (let j: number = i * i; j < n; j += i) {
        isPrim[j] = false;
      }
    }
  }
  let count: number = 0;
  for (let i: number = 2; i < n; i++) {
    if (isPrim[i]) {
      count++;
    }
  }
  return count;
}
