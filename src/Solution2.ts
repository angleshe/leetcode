export class Solution {
  private nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }
  /**
   * @description 随机输出给定的数字的索引
   * @author angle
   * @date 2021-11-09
   * @param {number} target
   * @returns {number}
   * @memberof Solution
   */
  pick(target: number): number {
    let res: number = -1;
    let n: number = 1;
    for (let i: number = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        if (Math.floor(Math.random() * n) === 0) {
          res = i;
        }
        n++;
      }
    }
    return res;
  }
}
