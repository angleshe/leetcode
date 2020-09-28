import { ListNode } from '../model/ListNode';

/**
 * @description 链表插入排序。
 * @author angle
 * @date 2020-09-28
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function insertionSortList(head: ListNode | null): ListNode | null {
  const dummyHead: ListNode = new ListNode(0);
  dummyHead.next = head;
  if (head && head.next) {
    let prevNode: ListNode = head;
    let targetNode: ListNode | null = head.next;
    while (targetNode) {
      if (targetNode.val < prevNode.val) {
        let temp: ListNode = dummyHead;
        while (temp.next!.val < targetNode.val) {
          temp = temp.next!;
        }
        prevNode.next = targetNode.next;
        targetNode.next = temp.next;
        temp.next = targetNode;
        targetNode = prevNode.next;
      } else {
        prevNode = targetNode;
        targetNode = targetNode.next;
      }
    }
  }
  return dummyHead.next;
}
