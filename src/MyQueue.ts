/**
 * @description 使用两个栈实现先入先出队列
 * @author angle
 * @date 2021-01-13
 * @export
 * @class MyQueue
 */
export class MyQueue {
  private stack: number[] = [];

  private tmp: number[] = [];

  push(x: number): void {
    while (this.stack.length) {
      this.tmp.push(this.stack.pop()!);
    }
    this.stack.push(x);
    while (this.tmp.length) {
      this.stack.push(this.tmp.pop()!);
    }
  }

  pop(): number {
    return this.stack.pop()!;
  }

  peek(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return !this.stack.length;
  }
}
