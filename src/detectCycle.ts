import { ListNode } from '../model/ListNode';

/**
 * @description 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null
 * @author angle
 * @date 2020-09-21
 * @export
 * @param {(ListNode | null)} head
 * @returns {string}
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (head && head.next) {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;
    while (fast) {
      if (fast === slow) {
        fast = head;
        slow = slow.next!;
        while (fast !== slow) {
          fast = fast!.next;
          slow = slow.next!;
        }
        return fast;
      }
      slow = slow.next!;
      fast = fast.next?.next ?? null;
    }
  }
  return null;
}
