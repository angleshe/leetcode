type NestedIntegerType = Array<number | NestedIntegerType>;
export class NestedInteger {
  private value: number | NestedInteger[] | undefined;
  constructor(value?: number) {
    this.value = value;
  }
  isInteger(): boolean {
    return this.value !== undefined && !Array.isArray(this.value);
  }
  getInteger(): number | null {
    return (Array.isArray(this.value) ? null : this.value) ?? null;
  }
  setInteger(value: number): void {
    this.value = value;
  }
  add(elem: NestedInteger): void {
    if (!Array.isArray(this.value)) {
      this.value = [elem];
    } else {
      this.value.push(elem);
    }
  }
  getList(): NestedInteger[] {
    return Array.isArray(this.value) ? this.value : [];
  }

  toArray(): NestedIntegerType | number | undefined {
    if (this.value === undefined) {
      return undefined;
    }
    if (Array.isArray(this.value)) {
      return this.value.map<NestedIntegerType | number>((item) => item.toArray() ?? []);
    }
    return this.value;
  }

  static createdNestedIntegerList(data: NestedIntegerType): NestedInteger[] {
    return data.map<NestedInteger>((item) => {
      const node = new NestedInteger();
      if (Array.isArray(item)) {
        const list = NestedInteger.createdNestedIntegerList(item);
        list.forEach((it) => {
          node.add(it);
        });
      } else {
        node.setInteger(item);
      }
      return node;
    });
  }
}
