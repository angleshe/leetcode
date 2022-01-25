/**
 * @description 尽可能满足越多数量的孩子的最大值
 * @author angle
 * @date 25/01/2022
 * @export
 * @param {number[]} g
 * @param {number[]} s
 * @return {*}  {number}
 */
export function findContentChildren(g: number[], s: number[]): number {
  const gArr = g.sort((a, b) => a - b);
  const sArr = s.sort((a, b) => a - b);
  let res: number = 0;
  let j: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (sArr[i] >= gArr[j]) {
      res++;
      j++;
    }
  }

  return res;
}
