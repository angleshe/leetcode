export class MedianFinder {
  private data: number[] = [];

  /**
   * @description 添加数据流
   * @author angle
   * @date 2021-03-04
   * @param {number} num
   * @memberof MedianFinder
   */
  addNum(num: number): void {
    if (this.data.length) {
      let left: number = 0;
      let right: number = this.data.length - 1;
      if (this.data[left] >= num) {
        this.data.splice(0, 0, num);
      } else if (this.data[right] <= num) {
        this.data.push(num);
      } else {
        while (right > left) {
          const mid = left + Math.floor((right - left) / 2);
          if (num === this.data[mid]) {
            right = mid;
            break;
          } else if (num < this.data[mid]) {
            right = mid;
          } else {
            left = mid + 1;
          }
        }
        this.data.splice(right, 0, num);
      }
    } else {
      this.data.push(num);
    }
  }

  /**
   * @description 获取中位数
   * @author angle
   * @date 2021-03-04
   * @returns {number}
   * @memberof MedianFinder
   */
  findMedian(): number {
    if (this.data.length % 2) {
      const mid = (this.data.length - 1) / 2;
      return this.data[mid];
    }
    const mid = this.data.length / 2;
    return (this.data[mid - 1] + this.data[mid]) / 2;
  }
}
