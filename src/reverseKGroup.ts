import { ListNode } from '../model/ListNode';
/**
 * @description 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * @author angle
 * @date 2019-12-31
 * @export
 * @param {(ListNode<number> | null)} head 给定链表
 * @param {number} k 反转节点数
 * @returns {(ListNode<number> | null)} 处理后链表
 */
export function reverseKGroup(head: ListNode<number> | null, k: number): ListNode<number> | null {
  let res: ListNode<number> | null = null;
  let arr: ListNode<number>[] = [];
  let itemNode: ListNode<number> | null = res;
  while (head !== null) {
    for (let i: number = 0; i < k; i++) {
      if (!head || head === null) {
        break;
      }
      arr.push(head);
      head = head.next;
    }
    if (arr.length === k) {
      for (let i: number = k - 1; i >= 0; i--) {
        if (itemNode === null) {
          res = arr[i];
          itemNode = res;
        } else {
          itemNode.next = arr[i];
          itemNode = itemNode.next;
        }
      }
    } else if (arr.length === 0) {
      return res;
    } else {
      if (itemNode === null) {
        return arr[0];
      }
      itemNode.next = arr[0];
      return res;
    }
    arr = [];
  }
  (itemNode as ListNode<number>).next = null;
  return res;
}
