import { ListNode } from '../model/ListNode';

/**
 * @description 删除某个链表中给定的（非末尾）节点
 * @author angle
 * @date 2021-01-20
 * @export
 * @param {(ListNode | null)} root
 */
export function deleteNode(root: ListNode | null): void {
  if (root && root.next) {
    root.val = root.next.val;
    root.next = root.next.next;
  }
}
