import { ListNode } from '../model/ListNode';
import { TreeNode } from '../model/TreeNode';

export function getListSize(head: ListNode): number {
  let size: number = 0;
  for (
    let currentNode: ListNode | null = head;
    currentNode !== null;
    currentNode = currentNode.next
  ) {
    size++;
  }
  return size;
}
/**
 * @description 将升序链表转换为高度平衡的二叉搜索树
 * @author angle
 * @date 2020-08-07
 * @export
 * @param {(ListNode | null)} head
 * @returns {(TreeNode | null)}
 */
export function sortedListToBST(head: ListNode | null): TreeNode | null {
  function sortedListToBSTHandler(start: number, end: number): TreeNode | null {
    if (start > end || head === null) {
      return null;
    }
    const mid: number = Math.floor(start + (end - start) / 2);
    const left: TreeNode | null = sortedListToBSTHandler(start, mid - 1);
    const tree: TreeNode = new TreeNode(head.val);
    tree.left = left;
    head = head.next!;
    tree.right = sortedListToBSTHandler(mid + 1, end);
    return tree;
  }
  return head ? sortedListToBSTHandler(0, getListSize(head) - 1) : null;
}
