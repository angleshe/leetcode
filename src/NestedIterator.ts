import { NestedInteger } from '../model/NestedInteger';

/**
 * @description 扁平嵌套的整型列表迭代器
 * @author angle
 * @date 2021-05-26
 * @export
 * @class NestedIterator
 */
export class NestedIterator {
  private stack: NestedInteger[];

  constructor(nestedList: NestedInteger[]) {
    this.stack = nestedList.reverse();
  }

  hasNext(): boolean {
    while (this.stack.length) {
      if (this.stack[this.stack.length - 1].isInteger()) {
        return true;
      }
      const node = this.stack.pop()!;
      const list = node.getList();
      this.stack.push(...list.reverse());
    }
    return false;
  }

  next(): number {
    const node = this.stack.pop()!;
    return node.getInteger()!;
  }
}
