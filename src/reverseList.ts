import { ListNode } from '../model/ListNode';

/**
 * @description 反转一个单链表
 * @author angle
 * @date 2020-11-13
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head?.next) {
    const next = head.next;
    const res = reverseList(head.next);
    head.next = null;
    next.next = head;
    return res;
  }
  return head;
}
