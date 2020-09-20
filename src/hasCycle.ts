import { ListNode } from '../model/ListNode';

/**
 * @description 判断链表中是否有环
 * @author angle
 * @date 2020-09-20
 * @export
 * @param {(ListNode | null)} head
 * @returns {boolean}
 */
export function hasCycle(head: ListNode | null): boolean {
  if (head && head.next) {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;
    while (fast) {
      if (fast.next === slow) {
        return true;
      }
      slow = slow.next!;
      fast = fast.next?.next ?? null;
    }
  }
  return false;
}
