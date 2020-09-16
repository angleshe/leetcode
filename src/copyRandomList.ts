import Node from '../model/RandomList';

/**
 * @description 深拷贝随机链表
 * @author angle
 * @date 2020-09-16
 * @export
 * @param {(Node | null)} head
 * @returns {(Node | null)}
 */
export function copyRandomList(head: Node | null): Node | null {
  const res: Node = new Node(0, null, null);
  const map: Map<Node, Node> = new Map<Node, Node>();
  if (head) {
    let target: Node | null = head;
    let current: Node = res;
    while (target) {
      if (map.has(target)) {
        current.next = map.get(target)!;
      } else {
        current.next = new Node(target.val, null, null);
        map.set(target, current.next);
      }
      if (target.random) {
        if (map.has(target.random)) {
          current.next.random = map.get(target.random)!;
        } else {
          const random: Node = new Node(target.random.val, null, null);
          current.next.random = random;
          map.set(target.random, random);
        }
      }
      target = target.next;
      current = current.next;
    }
  }
  return res.next;
}
