import { ListNode } from '../model/ListNode';

/**
 * @description 获取链表中心点
 * @author angle
 * @date 2020-09-22
 * @export
 * @param {ListNode} head
 * @returns {ListNode}
 */
export function getCenterNode(head: ListNode): ListNode {
  let slow: ListNode = head;
  let fast: ListNode = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next!;
  }
  return slow;
}
/**
 * @description 倒序链表
 * @author angle
 * @date 2020-09-22
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head?.next) {
    let tail: ListNode = head;
    head = head.next;
    tail.next = null;
    while (head) {
      const temp: ListNode | null = head.next;
      head.next = tail;
      tail = head;
      head = temp;
    }
    return tail;
  }
  return head;
}
/**
 * @description 合并链表
 * @author angle
 * @date 2020-09-22
 * @export
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
export function mergeList(list1: ListNode, list2: ListNode): void {
  let target: ListNode = list1;
  while (target.next) {
    const temp = target.next;
    target.next = list2;
    list2 = list2.next!;
    target.next.next = temp;
    target = temp;
  }
  if (list2) {
    target.next = list2;
  }
}
/**
 * @description 重排链表
 * @author angle
 * @date 2020-09-22
 * @export
 * @param {(ListNode | null)} head
 */
export function reorderList(head: ListNode | null): void {
  if (head) {
    let endList: ListNode | null = getCenterNode(head);
    const temp = endList.next;
    endList.next = null;
    endList = temp;
    endList = reverseList(endList);
    if (endList) {
      mergeList(head, endList);
    }
  }
}
