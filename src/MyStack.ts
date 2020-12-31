/**
 * @description 栈结构
 * @author angle
 * @date 2020-12-31
 * @export
 * @class MyStack
 */
export class MyStack {
  private data: number[] = [];

  push(x: number): void {
    const len = this.data.length;
    this.data.push(x);
    for (let i: number = 0; i < len; i++) {
      this.data.push(this.data.shift()!);
    }
  }

  pop(): number {
    return this.data.shift()!;
  }

  top(): number {
    return this.data[0];
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}
