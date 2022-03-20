class Heap<T> {
  private data: Array<T>;
  constructor(private compare: (a: T, b: T) => boolean) {
    this.data = [];
  }

  push(item: T): void {
    this.data.push(item);
    this.siftUp();
  }

  shift(): T | undefined {
    const res = this.data.shift();
    if (this.data.length > 1) {
      this.data.unshift(this.data.pop()!);
      this.siftDown();
    }
    return res;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  private siftUp(): void {
    let target: number = this.data.length - 1;
    while (target) {
      // eslint-disable-next-line no-bitwise
      const parentIndex = (target - 1) >> 1;
      if (this.compare(this.data[target], this.data[parentIndex])) {
        [this.data[target], this.data[parentIndex]] = [this.data[parentIndex], this.data[target]];
        target = parentIndex;
      } else {
        break;
      }
    }
  }

  private siftDown(): void {
    let target: number = 0;
    // eslint-disable-next-line no-bitwise
    const end = this.data.length >> 1;
    while (target < end) {
      const parentLeftIndex = target * 2 + 1;
      const parentRightIndex = parentLeftIndex + 1;
      let targetIndex: number = parentLeftIndex;
      if (
        parentRightIndex < this.data.length &&
        this.compare(this.data[parentRightIndex], this.data[parentLeftIndex])
      ) {
        targetIndex = parentRightIndex;
      }
      if (this.compare(this.data[targetIndex], this.data[target])) {
        [this.data[target], this.data[targetIndex]] = [this.data[targetIndex], this.data[target]];
        target = targetIndex;
      } else {
        break;
      }
    }
  }
}
/**
 * @description 输出最终可获得的最多资本
 * @author angle
 * @date 2022-03-17
 * @export
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @returns {number}
 */
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const arr: Array<[number, number]> = [];
  for (let i = 0; i < profits.length; i++) {
    arr.push([profits[i], capital[i]]);
  }
  const list = arr.sort((a, b) => a[1] - b[1]);
  const heap = new Heap<number>((a, b) => a > b);
  let i: number = 0;
  while (k) {
    while (i < list.length && w >= list[i][1]) {
      heap.push(list[i][0]);
      i++;
    }
    if (heap.isEmpty()) {
      break;
    }
    w += heap.shift()!;
    k--;
  }
  return w;
}
