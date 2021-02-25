// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface Iterator {
  hasNext: () => boolean;
  next: () => number;
}
/**
 * @description 顶端迭代器
 * @author angle
 * @date 2021-02-25
 * @export
 * @class PeekingIterator
 */
export class PeekingIterator {
  private iterator: Iterator;
  private head: null | number = null;

  constructor(iterator: Iterator) {
    this.iterator = iterator;
  }

  peek(): number {
    if (this.head === null) {
      this.head = this.iterator.next();
    }
    return this.head;
  }

  next(): number {
    if (this.head !== null) {
      const res = this.head;
      this.head = null;
      return res;
    }
    return this.iterator.next();
  }

  hasNext(): boolean {
    return this.head !== null || this.iterator.hasNext();
  }
}
