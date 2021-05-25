/**
 * @description 0 ≤ i ≤ n范围内二进制数中的 1 的数目
 * @author angle
 * @date 2021-05-25
 * @export
 * @param {number} n
 * @returns {number[]}
 */
export function countBits(n: number): number[] {
  const res: number[] = [];
  for (let i: number = 0; i <= n; i++) {
    if (i === 0) {
      res.push(0);
    } else if (i % 2) {
      res.push(res[i - 1] + 1);
    } else {
      res.push(res[i / 2]);
    }
  }
  return res;
}
