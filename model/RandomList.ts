export default class Node {
  public val: number;
  public next: Node | null;
  public random: Node | null;

  constructor(val: number, next: Node | null, random: Node | null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }

  public static createdNode(data: Array<[number, number | null]>): Node | null {
    const res: Node = new Node(0, null, null);
    const map: Map<number, Node> = new Map<number, Node>();
    let targetNode: Node = res;
    for (let i: number = 0; i < data.length; i++) {
      let node: Node;
      if (map.has(i)) {
        node = map.get(i)!;
      } else {
        node = new Node(data[i][0], null, null);
        map.set(i, node);
      }
      targetNode.next = node;
      targetNode = targetNode.next;
      if (data[i][1] !== null) {
        if (map.has(data[i][1]!)) {
          node.random = map.get(data[i][1]!)!;
        } else {
          const random: Node = new Node(data[data[i][1]!][0], null, null);
          node.random = random;
          map.set(data[i][1]!, random);
        }
      }
    }
    return res.next;
  }

  public toArray(): Array<[number, number | null]> {
    const res: Array<[number, number | null]> = [];
    const nodeMap: Map<Node, number[]> = new Map<Node, number[]>();
    const indexMap: Map<Node, number> = new Map<Node, number>();
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: Node | null = this;
    while (target) {
      nodeMap.get(target)?.forEach((index) => (res[index][1] = res.length));

      indexMap.set(target, res.length);
      const data: [number, number | null] = [target.val, null];
      if (target.random) {
        if (indexMap.has(target.random)) {
          data[1] = indexMap.get(target.random)!;
        } else {
          const indexs = nodeMap.get(target.random)?.concat([res.length]) ?? [res.length];
          nodeMap.set(target.random, indexs);
        }
      }
      res.push(data);
      target = target.next;
    }
    return res;
  }
}
