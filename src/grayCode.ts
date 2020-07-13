/**
 * @description 返回所有n位的格雷编码序列
 * @author angle
 * @date 2020-07-13
 * @export
 * @param {number} n
 * @returns {number[]}
 */
export function grayCode(n: number): number[] {
  const res: number[] = [0];
  let head: number = 1;
  while (n) {
    for (let i: number = res.length - 1; i >= 0; i--) {
      res.push(head + res[i]);
    }
    // eslint-disable-next-line no-bitwise
    head <<= 1;
    n--;
  }
  return res;
}
