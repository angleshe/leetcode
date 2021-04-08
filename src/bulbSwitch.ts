/**
 * @description n 轮后有多少个亮着的灯泡。
 * @author angle
 * @date 2021-04-08
 * @export
 * @param {number} n
 * @returns {number}
 */
export function bulbSwitch(n: number): number {
  if (n < 1) {
    return 0;
  }
  let res: number = 0;

  while (res * res <= n) {
    res++;
  }
  return res - 1;
}
