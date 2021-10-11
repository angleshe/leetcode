export class RandomizedCollection {
  private hash: Record<number, number[]>;
  private list: number[];
  constructor() {
    this.hash = {};
    this.list = [];
  }
  /**
   * @description 向集合中插入元素 val。
   * @author angle
   * @date 2021-10-11
   * @param {number} val
   * @returns {boolean}
   * @memberof RandomizedCollection
   */
  insert(val: number): boolean {
    const index = this.list.length;
    this.list.push(val);
    if (this.hash[val]?.length) {
      this.hash[val].push(index);
      return false;
    }
    this.hash[val] = [index];
    return true;
  }
  /**
   * @description 当 val 存在时，从集合中移除一个 val。
   * @author angle
   * @date 2021-10-11
   * @param {number} val
   * @returns {boolean}
   * @memberof RandomizedCollection
   */
  remove(val: number): boolean {
    const targetIndex = this.hash[val]?.shift();
    if (targetIndex !== undefined) {
      const lastIndex = this.list.length - 1;
      if (targetIndex !== lastIndex) {
        const index = this.hash[this.list[lastIndex]].findIndex((i) => i === lastIndex)!;
        this.hash[this.list[lastIndex]][index] = targetIndex;
        [this.list[targetIndex], this.list[lastIndex]] = [
          this.list[lastIndex],
          this.list[targetIndex]
        ];
      }
      this.list.pop();

      return true;
    }
    return false;
  }
  /**
   * @description 从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。
   * @author angle
   * @date 2021-10-11
   * @returns {number}
   * @memberof RandomizedCollection
   */
  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
