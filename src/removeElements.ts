import { ListNode } from '../model/ListNode';

/**
 * @description 删除链表中等于给定值 val 的所有节点。
 * @author angle
 * @date 2020-11-09
 * @export
 * @param {(ListNode | null)} head
 * @param {number} val
 * @returns {(ListNode | null)}
 */
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head?.val === val) {
    head = head.next;
  }
  if (head) {
    let target: ListNode = head;
    while (target.next) {
      if (target.next.val === val) {
        target.next = target.next.next;
      } else {
        target = target.next;
      }
    }
  }
  return head;
}
