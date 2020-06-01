/**
 * @description 生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵
 * @author angle
 * @date 2020-06-01
 * @export
 * @param {number} n
 * @returns {number[][]} 数据矩阵
 */
export function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from<undefined, number[]>(Array<undefined>(n), () =>
    Array<number>(n).fill(0)
  );
  let num: number = 1;
  let left: number = 0;
  let right: number = n - 1;
  let top: number = 0;
  let bottom: number = n - 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    for (let i: number = left; i <= right; i++) {
      res[top][i] = num++;
    }
    if (++top > bottom) {
      break;
    }
    for (let i: number = top; i <= bottom; i++) {
      res[i][right] = num++;
    }
    if (--right < left) {
      break;
    }
    for (let i: number = right; i >= left; i--) {
      res[bottom][i] = num++;
    }
    if (--bottom < top) {
      break;
    }
    for (let i: number = bottom; i >= top; i--) {
      res[i][left] = num++;
    }
    if (++left > right) {
      break;
    }
  }
  return res;
}
