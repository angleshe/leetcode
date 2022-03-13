/**
 * @description 非重叠矩形中的随机点
 * @author angle
 * @date 2022-03-13
 * @export
 * @class Solution
 */
export class Solution {
  private pointCountArr: number[] = [];
  private pointCount: number = 0;

  constructor(private rects: number[][]) {
    rects.forEach(([ai, bi, xi, yi]) => {
      if (ai !== xi && bi !== yi) {
        this.pointCount += (xi - ai + 1) * (yi - bi + 1);
      }
      this.pointCountArr.push(this.pointCount);
    });
  }

  pick(): number[] {
    const num = Math.floor(Math.random() * this.pointCount);

    let left: number = 0;
    let right: number = this.pointCountArr.length - 1;
    while (right > left) {
      // eslint-disable-next-line no-bitwise
      const mid = left + ((right - left) >> 1);
      if (this.pointCountArr[mid] <= num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const position = left === 0 ? num : num - this.pointCountArr[left - 1];
    const [ai, bi, xi] = this.rects[left];
    return [ai + (position % (xi - ai + 1)), bi + Math.floor(position / (xi - ai + 1))];
  }
}
