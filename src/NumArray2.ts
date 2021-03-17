export class NumArray {
  private data: number[];
  private sum: number[];

  constructor(nums: number[]) {
    this.data = nums;
    this.sum = this.data.reduce<number[]>((prev, curr, index) => {
      if (index) {
        prev.push(curr + prev[index - 1]);
      } else {
        prev.push(curr);
      }
      return prev;
    }, []);
  }

  /**
   * @description nums[index] 的值更新为 val
   * @author angle
   * @date 2021-03-17
   * @param {number} index
   * @param {number} val
   * @memberof NumArray
   */
  update(index: number, val: number): void {
    const difference = val - this.data[index];
    this.data[index] = val;
    for (let i = index; i < this.data.length; i++) {
      this.sum[i] += difference;
    }
  }

  /**
   * @description 返回子数组 nums[left, right] 的总和
   * @author angle
   * @date 2021-03-17
   * @param {number} left
   * @param {number} right
   * @returns {number}
   * @memberof NumArray
   */
  sumRange(left: number, right: number): number {
    return this.sum[right] - (left ? this.sum[left - 1] : 0);
  }
}
