import { ListNode } from '../model/ListNode';

/**
 * @description 找相交链表的相交节点
 * @author angle
 * @date 2020-10-12
 * @export
 * @param {(ListNode | null)} headA
 * @param {(ListNode | null)} headB
 * @returns {(ListNode | null)}
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pA: ListNode | null = headA;
  let pB: ListNode | null = headB;
  while (pA !== pB) {
    if (pA) {
      pA = pA.next;
    } else {
      pA = headB;
    }
    if (pB) {
      pB = pB.next;
    } else {
      pB = headA;
    }
  }
  return pA;
}
