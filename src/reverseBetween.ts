import { ListNode } from '../model/ListNode';

/**
 * @description 反转从位置 m 到 n 的链表
 * @author angle
 * @date 2020-07-18
 * @export
 * @param {(ListNode | null)} head
 * @param {number} m
 * @param {number} n
 * @returns {(ListNode | null)}
 */
export function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
  let successor: ListNode | null = null;
  function _reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (head === null || head.next === null || m === n) {
      return head;
    }
    if (n === 1) {
      successor = head.next;
      return head;
    }
    const lastNode = _reverseBetween(head.next, m - 1, n - 1);
    if (m > 1) {
      head.next = lastNode;
      return head;
    }
    head.next.next = head;
    head.next = successor;
    return lastNode;
  }
  return _reverseBetween(head, m, n);
}
