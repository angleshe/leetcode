import { ListNode } from '../model/ListNode';
/**
 * @description 删除链表所有含有重复数字的节点
 * @author angle
 * @date 2020-07-02
 * @export
 * @param {(ListNode<number> | null)} head 链表
 * @returns {(ListNode<number> | null)} 删除重复节点后的链表
 */
export function deleteDuplicates(head: ListNode<number> | null): ListNode<number> | null {
  const res: ListNode<number> = new ListNode<number>(0);
  res.next = head;
  if (head && head.next) {
    let startNode: ListNode<number> | null = res;
    while (startNode && startNode.next && startNode.next.next) {
      if (startNode.next.val === startNode.next.next.val) {
        let endNode = startNode.next.next.next;
        while (endNode && endNode.val === startNode.next.val) {
          endNode = endNode.next;
        }
        startNode.next = endNode;
      } else {
        startNode = startNode.next;
      }
    }
  }
  return res.next;
}
