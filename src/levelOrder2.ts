export class Node {
  public val: number;
  public children: Node[];

  constructor(val?: number) {
    this.val = val ?? 0;
    this.children = [];
  }

  static createdNodeOfArray(arr: Array<null | number>): Node | null {
    const queue: Node[] = [];
    let i: number = 0;
    let res: Node | null = null;
    while (i < arr.length) {
      if (arr[i] === null) {
        i++;
        const target = queue.shift()!;
        while (i < arr.length && arr[i] !== null) {
          const node = new Node(arr[i]!);
          target.children.push(node);
          queue.push(node);
          i++;
        }
      } else {
        res = new Node(arr[i]!);
        queue.push(res);
        i++;
      }
    }
    return res;
  }
}
/**
 * @description 返回N叉树节点值的层序遍历
 * @author angle
 * @date 2021-12-23
 * @export
 * @param {(Node | null)} root
 * @returns {number[][]}
 */
export function levelOrder(root: Node | null): number[][] {
  const res: number[][] = [];
  if (root) {
    let queue: Node[] = [root];
    while (queue.length) {
      const arr: Node[] = [];
      const values: number[] = [];
      while (queue.length) {
        const target = queue.shift()!;
        values.push(target.val);
        arr.push(...target.children);
      }
      res.push(values);
      queue = arr;
    }
  }
  return res;
}
