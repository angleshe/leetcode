function handlePow(a: number, pow: number, base: number): number {
  let res: number = 1;
  for (let i: number = 0; i < pow; i++) {
    res *= a;
    res %= base;
  }
  return res;
}
/**
 * @description a^[b]对1337取模
 * @author angle
 * @date 2021-08-25
 * @export
 * @param {number} a
 * @param {number[]} b
 * @returns {number}
 */
export function superPow(a: number, b: number[]): number {
  if (b.length) {
    const lastPow = b.pop()!;
    const part1 = handlePow(a, lastPow, 1337);
    const part2 = handlePow(superPow(a, b), 10, 1337);
    return (part1 * part2) % 1337;
  }
  return 1;
}
