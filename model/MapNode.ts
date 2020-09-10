export default class Node {
  public val: number;
  public neighbors: Node[];
  constructor(val: number, neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }

  static createNumberMapNode(data: number[][]): Node {
    const nodeArr: Node[] = data.map((_, index) => new Node(index + 1));
    for (let i: number = 0; i < data.length; i++) {
      nodeArr[i].neighbors = data[i].map((item) => nodeArr[item - 1]);
    }
    return nodeArr[0];
  }

  toArray(num: number): number[][] {
    const map: Map<number, Node> = new Map([[this.val, this]]);
    const childrenNode: Node[] = [...this.neighbors];
    while (childrenNode.length) {
      const item: Node = childrenNode.shift()!;
      if (!map.has(item.val)) {
        map.set(item.val, item);
        childrenNode.push(...item.neighbors);
      }
    }
    const res: number[][] = [];
    for (let i: number = 1; i <= num; i++) {
      if (map.has(i)) {
        res.push(map.get(i)!.neighbors.map((item) => item.val));
      } else {
        return [];
      }
    }
    return res;
  }
}
