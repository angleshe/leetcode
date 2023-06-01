export class Solution {
  private len: number = 0;
  private readonly map = new Map<number, number>();

  constructor(private m: number, private n: number) {
    this.reset();
  }

  private getRandomValue(): number {
    return Math.floor(Math.random() * this.len);
  }

  private parseValue(value: number): [number, number] {
    return [value % this.m, Math.floor(value / this.m)];
  }

  flip(): number[] {
    const value = this.getRandomValue();
    this.len--;
    const realValue = this.map.get(value) ?? value;
    if (value !== this.len) {
      this.map.set(value, this.map.get(this.len) ?? this.len);
    }
    return this.parseValue(realValue);
  }

  reset(): void {
    this.map.clear();
    this.len = this.m * this.n;
  }
}
