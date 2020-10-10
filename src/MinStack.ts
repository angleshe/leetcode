/**
 * @description 支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈
 * @author angle
 * @date 2020-10-10
 * @export
 * @class MinStack
 */
export class MinStack {
  private minStack: number[];
  private numStack: number[];
  constructor() {
    this.minStack = [];
    this.numStack = [];
  }

  push(x: number): void {
    this.numStack.push(x);
    if (this.minStack.length === 0 || this.getMin() >= x) {
      this.minStack.push(x);
    }
  }

  pop(): void {
    if (this.numStack.length) {
      const num: number = this.numStack.pop()!;
      if (this.getMin() === num) {
        this.minStack.pop();
      }
    }
  }

  top(): number {
    return this.numStack[this.numStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
