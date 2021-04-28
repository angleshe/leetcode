import { ListNode } from '../model/ListNode';

/**
 * @description 把单链表所有的奇数节点和偶数节点分别排在一起
 * @author angle
 * @date 2021-04-28
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head !== null) {
    let l1: ListNode = head;
    let l2: ListNode | null = head.next;
    while (l2 && l2.next) {
      const next = l1.next;
      l1.next = l2.next;
      l2.next = l2.next.next;
      l1.next.next = next;
      l1 = l1.next;
      l2 = l2?.next ?? null;
    }
  }

  return head;
}
