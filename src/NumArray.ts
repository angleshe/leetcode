export class NumArray {
  private sums: number[] = [];
  constructor(nums: number[]) {
    nums.forEach((item, index) => {
      if (index) {
        this.sums.push(this.sums[this.sums.length - 1] + item);
      } else {
        this.sums.push(item);
      }
    });
  }
  /**
   * @description 求出数组从索引 i 到 j（i ≤ j）范围内元素的总和
   * @author angle
   * @date 2021-03-12
   * @param {number} i
   * @param {number} j
   * @returns {number}
   * @memberof NumArray
   */
  sumRange(i: number, j: number): number {
    return i ? this.sums[j] - this.sums[i - 1] : this.sums[j];
  }
}
