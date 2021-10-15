export class Solution {
  private arr: number[];

  constructor(nums: number[]) {
    this.arr = nums;
  }
  /**
   * @description 重设数组到它的初始状态并返回
   * @author angle
   * @date 2021-10-15
   * @returns {number[]}
   * @memberof Solution
   */
  reset(): number[] {
    return [...this.arr];
  }

  /**
   * @description 返回数组随机打乱后的结果
   * @author angle
   * @date 2021-10-15
   * @returns {number[]}
   * @memberof Solution
   */
  shuffle(): number[] {
    const res = this.reset();
    for (let i: number = 0; i < res.length; i++) {
      const randomIndex = Math.floor(Math.random() * res.length);
      [res[i], res[randomIndex]] = [res[randomIndex], res[i]];
    }
    return res;
  }
}
