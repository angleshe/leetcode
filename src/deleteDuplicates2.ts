import { ListNode } from '../model/ListNode';

/**
 * @description 删除链表所有重复的元素，使得每个元素只出现一次
 * @author angle
 * @date 2020-07-03
 * @export
 * @param {(ListNode<number> | null)} head
 * @returns {(ListNode<number> | null)}
 */
export function deleteDuplicates(head: ListNode<number> | null): ListNode<number> | null {
  if (head) {
    let target: ListNode<number> | null = head;
    while (target.next) {
      if (target.next.val === target.val) {
        target.next = target.next.next;
      } else {
        target = target.next;
      }
    }
  }
  return head;
}
