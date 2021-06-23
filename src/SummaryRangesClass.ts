/**
 * @description 将输入的数据流总结为不相交的区间列表。
 * @author angle
 * @date 2021-06-23
 * @export
 * @class SummaryRanges
 */
export class SummaryRanges {
  private res: [number, number][];
  constructor() {
    this.res = [];
  }

  addNum(val: number): void {
    if (this.res.length) {
      if (val <= this.res[0][0] && this.res[0][0] - val <= 1) {
        this.res[0][0] = val;
      } else if (val < this.res[0][0]) {
        this.res.unshift([val, val]);
      } else if (
        val >= this.res[this.res.length - 1][1] &&
        val - this.res[this.res.length - 1][1] <= 1
      ) {
        this.res[this.res.length - 1][1] = val;
      } else if (val > this.res[this.res.length - 1][1]) {
        this.res.push([val, val]);
      } else {
        let left: number = 0;
        let right: number = this.res.length - 1;
        while (left < right) {
          const mid = left + Math.ceil((right - left) / 2);
          if (this.res[mid][0] > val) {
            right = mid - 1;
          } else if (this.res[mid][0] === val) {
            return;
          } else {
            left = mid;
          }
        }
        if (this.res[left][1] + 1 === val) {
          if (this.res[left + 1][0] - 1 === val) {
            const [, end] = this.res.splice(left + 1, 1)[0];
            this.res[left][1] = end;
          } else {
            this.res[left][1] = val;
          }
        } else if (this.res[left][1] < val) {
          if (left < this.res.length - 1 && this.res[left + 1][0] - 1 === val) {
            this.res[left + 1][0] = val;
          } else {
            this.res.splice(left + 1, 0, [val, val]);
          }
        }
      }
    } else {
      this.res.push([val, val]);
    }
  }

  getIntervals(): number[][] {
    return this.res;
  }
}
