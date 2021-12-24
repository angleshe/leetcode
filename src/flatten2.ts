export class Node {
  public val: number;
  public prev: Node | null;
  public next: Node | null;
  public child: Node | null;

  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val ?? 0;
    this.prev = prev ?? null;
    this.next = next ?? null;
    this.child = child ?? null;
  }

  public toArray(): number[] {
    const res: number[] = [];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: Node | null = this;
    while (target) {
      res.push(target.val);
      target = target.next;
    }
    return res;
  }

  public static createNodeOfArray(arr: Array<number | null>): Node | null {
    let res: Node | null = null;
    if (arr.length) {
      let prevLevel: Node | null = null;
      let target: Node | null = null;
      arr.forEach((item) => {
        if (item === null) {
          if (target) {
            if (target.next) {
              target = target.next;
            } else {
              target = prevLevel;
            }
          }
        } else {
          const node = new Node(item);
          if (!prevLevel) {
            res = node;
            prevLevel = node;
          } else if (target) {
            if (target.next) {
              target.child = node;
              prevLevel = node;
            } else {
              target.next = node;
              node.prev = target;
            }
          }
          target = node;
        }
      });
    }
    return res;
  }
}
/**
 * @description 扁平化多级双向链表
 * @author angle
 * @date 2021-12-24
 * @export
 * @param {(Node | null)} head
 * @returns {(Node | null)}
 */
export function flatten(head: Node | null): Node | null {
  const stack: Node[] = [];
  let target = head;
  while (target) {
    if (target.child) {
      if (target.next) {
        stack.push(target.next);
      }
      target.next = target.child;
      target.child.prev = target;
      target.child = null;
    }
    if (!target.next) {
      const next = stack.pop();
      if (next) {
        target.next = next;
        next.prev = target;
      }
    }
    target = target.next;
  }
  return head;
}
