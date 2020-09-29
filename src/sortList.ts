import { ListNode } from '../model/ListNode';

/**
 * @description 链表排序
 * @author angle
 * @date 2020-09-29
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (head && head.next) {
    let fast: ListNode | null = head.next;
    let slow: ListNode = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next!;
    }
    if (slow) {
      const tmp = slow.next;
      slow.next = null;
      let left = sortList(head);
      let right = sortList(tmp);
      const res = new ListNode(0);
      let target = res;
      while (left && right) {
        if (left.val < right.val) {
          target.next = left;
          left = left.next;
        } else {
          target.next = right;
          right = right.next;
        }
        target = target.next;
      }
      target.next = left ? left : right;
      return res.next;
    }
  }
  return head;
}
