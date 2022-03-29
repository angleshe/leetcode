/**
 * @description 斐波那契数
 * @author angle
 * @date 2022-03-29
 * @export
 * @param {number} n
 * @returns {number}
 */
export function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  const arr: [number, number] = [0, 1];
  for (let i = 2; i <= n; i++) {
    const sum = arr[0] + arr[1];
    arr.shift();
    arr.push(sum);
  }
  return arr[1];
}
