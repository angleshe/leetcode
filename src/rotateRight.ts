import { ListNode } from '../model/ListNode';

/**
 * @description 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置
 * @author angle
 * @date 2020-06-03
 * @export
 * @param {(ListNode<number> | null)} head 列表
 * @param {number} k 移动位置
 * @returns {(ListNode<number> | null)} 移动后列表
 */
export function rotateRight(head: ListNode<number> | null, k: number): ListNode<number> | null {
  if (k === 0 || !head) {
    return head;
  }
  let leftItem: ListNode<number> = head;
  let rightItem: ListNode<number> = head;
  while (rightItem.next || k !== 0) {
    rightItem = rightItem.next ?? head;
    if (k === 0) {
      leftItem = leftItem.next ?? head;
    } else {
      k--;
    }
  }
  rightItem.next = head;
  rightItem = leftItem.next as ListNode<number>;
  leftItem.next = null;
  return rightItem;
}
