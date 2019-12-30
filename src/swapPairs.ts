import { ListNode } from '../model/ListNode';
export function swapPairs(head: ListNode<number> | null): ListNode<number> | null {
  if (head && head.next !== null) {
    let res: ListNode<number> | null = null;
    let itemNode: ListNode<number> | null = null;
    let lNode: ListNode<number> | null = head;
    let rNode: ListNode<number> | null = head.next;
    while (lNode !== null && rNode !== null) {
      if (res === null || itemNode === null) {
        res = rNode;
        itemNode = res;
        lNode.next = rNode.next;
        itemNode.next = lNode;
      } else {
        itemNode.next = rNode;
        itemNode = itemNode.next;
        lNode.next = rNode.next;
        itemNode.next = lNode;
      }
      itemNode = itemNode.next;
      lNode = lNode.next;
      if (lNode !== null) {
        rNode = lNode.next;
      }
    }
    return res;
  }
  return head;
}
