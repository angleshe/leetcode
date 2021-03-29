/**
 * @description 查找第 n 个超级丑数
 * @author angle
 * @date 2021-03-29
 * @export
 * @param {number} n
 * @param {number[]} primes
 * @returns {number}
 */
export function nthSuperUglyNumber(n: number, primes: number[]): number {
  const dp: number[] = [1];
  const indexs: number[] = Array(primes.length).fill(0);
  for (let i: number = 1; i < n; i++) {
    let min: number = Infinity;
    for (let j: number = 0; j < indexs.length; j++) {
      min = Math.min(min, primes[j] * dp[indexs[j]]);
    }

    dp.push(min);

    for (let j: number = 0; j < indexs.length; j++) {
      if (min === primes[j] * dp[indexs[j]]) {
        indexs[j]++;
      }
    }
  }

  return dp[n - 1];
}
