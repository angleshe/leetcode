export class RandomizedSet {
  private hash: Record<number, number>;
  private arr: number[];
  constructor() {
    this.hash = {};
    this.arr = [];
  }
  /**
   * @description 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
   * @author angle
   * @date 2021-09-28
   * @param {number} val
   * @returns {boolean}
   * @memberof RandomizedSet
   */
  insert(val: number): boolean {
    if (this.hash[val] === undefined) {
      this.hash[val] = this.arr.length;
      this.arr.push(val);
      return true;
    }
    return false;
  }
  /**
   * @description 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
   * @author angle
   * @date 2021-09-28
   * @param {number} val
   * @returns {boolean}
   * @memberof RandomizedSet
   */
  remove(val: number): boolean {
    if (this.hash[val] !== undefined) {
      const targetIndex = this.hash[val];
      if (targetIndex !== this.arr.length - 1) {
        this.hash[this.arr[this.arr.length - 1]] = targetIndex;
        [this.arr[targetIndex], this.arr[this.arr.length - 1]] = [
          this.arr[this.arr.length - 1],
          this.arr[targetIndex]
        ];
      }
      this.arr.pop();
      delete this.hash[val];
      return true;
    }
    return false;
  }
  /**
   * @description 随机返回现有集合中的一项
   * @author angle
   * @date 2021-09-28
   * @returns {number}
   * @memberof RandomizedSet
   */
  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}
