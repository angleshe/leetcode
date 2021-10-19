function lexicalOrderHandle(res: number[], max: number, current: number = 0): void {
  if (current <= max) {
    for (let i: number = current === 0 ? 1 : 0; i <= 9; i++) {
      const target = current + i;
      if (target <= max) {
        res.push(target);
        lexicalOrderHandle(res, max, target * 10);
      }
    }
  }
}
/**
 * @description 按字典序返回范围 [1, n] 内所有整数
 * @author angle
 * @date 2021-10-19
 * @export
 * @param {number} n
 * @returns {number[]}
 */
export function lexicalOrder(n: number): number[] {
  const res: number[] = [];
  lexicalOrderHandle(res, n);
  return res;
}
